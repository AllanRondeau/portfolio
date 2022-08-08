import { TargetOptions } from "@angular-builders/custom-webpack";

import * as pkg from "../package.json";
import { Either, Maybe } from "purify-ts";

const ejs = require("ejs");

/**
 * Customize index.html file by replacing tokens with build related informations.
 *
 * Some informations are extracted from package.json, other are from environment properties
 * (look at the code of the ejs templates)
 *
 * Environnement properties can be set at computer level, or set in package.json scripts, ie :
 *
 * "start": "set LOG_LEVEL=INFO && set ENV_ID=PROD && ng serve"
 *
 * /!\ DEV : This code should remains relatively fast, because in watch mode, it's called at each modification of a file ! /!\
 *
 */
export default (targetOptions: TargetOptions,
                indexHtmlAlreadyProcessedByAngular: string) => {
  /*
   /!\ Angular have already processed the index file (in current cli version, 13).
   */
  console.info("\nindexTransformer called !\n");
  return adaptAlreadyAngularInstrumentedHtmlContent(
    targetOptions,
    process.env,
    new Date()
  )(
    indexHtmlAlreadyProcessedByAngular
  );
}

export const adaptAlreadyAngularInstrumentedHtmlContent =
  (targetOptions: TargetOptions,
   processEnvObject: any,
   currentDate: Date) =>
    (indexHtmlAlreadyProcessedByAngularWithSomeEJSInside: string) =>
      Either.encase(() =>
        Maybe.of(
          indexHtmlAlreadyProcessedByAngularWithSomeEJSInside
        ).map(
          interpretEJSContentWithBuildSpecificDatas({
            APP_VERSION: pkg.version,
            BUILD_DATE: currentDate,
            LOG_LEVEL: processEnvObject.LOG_LEVEL,
            ENV_ID: processEnvObject.ENV_ID
          })
        ).map(interpreted =>
          relocateHeadContent(
            fetchHeadContentFromInterpretedTemplate(
              interpreted
            )
          )(interpreted)
        )).caseOf({
        Left: (e: Error) => {
          console.error("An error occurred adapting your index file.")
          console.error(e);
        },
        Right: (r: Maybe<string>) =>
          r.orDefault(
            indexHtmlAlreadyProcessedByAngularWithSomeEJSInside
          )
      });

const interpretEJSContentWithBuildSpecificDatas =
  (ejsDatas: any) =>
    (s: string) =>
      ejs.render(
        s,
        ejsDatas,
        {
          // needed for relocating included templates correctly - otherwise, ejs is lost in limbo
          root: process.cwd(),
          openDelimiter: "[",
          closeDelimiter: "]"
        }
      )

export const fetchHeadContentFromInterpretedTemplate = (rawRenderedTemplate: string): string =>
  Maybe.fromNullable(
    // we delimit the content with html comments sections containing 'head' and '/head'
    /<!-- head -->(.*)<!-- \/head -->/gms.exec(rawRenderedTemplate)
  ).chainNullable(_ =>
    _[1]
  ).orDefault("")


// Since angular will push EJS head content outside of head, we must put it back in it...
const relocateHeadContent =
  (extractedHeadContentToReinject: string) =>
    (rawRenderedTemplate: string) =>

      rawRenderedTemplate
        // reinject head content
        .replace(
          /<head>(.*)<\/head>/gm,
          "<head>" + extractedHeadContentToReinject.trim() + "</head>"
        )
        // remove old content that has been moved
        // todo make the regexps injected
        .replace(
          /<!-- head -->.*<!-- \/head -->/gms,
          ""
        )
