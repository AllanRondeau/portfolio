import {
  adaptAlreadyAngularInstrumentedHtmlContent,
  fetchHeadContentFromInterpretedTemplate
} from "./index-html-transform";
/*
  My dear TDD pal : this is just some 'crude' unit testing, just to be as fast as possible when
  trying to make the ejs templating works (after an angular-cli update broke everything...).

  This is not quality grade testing. Have a nice day ! :)
 */
describe("Various index ejs template file enhancements ", () => {

  describe("functions works", () => {

    it("like 'adaptAngularInstrumentedHtmlContent'", () => {

      const NOT_IMPORTANT_FOR_NOW = {
        project: "string",
        target: "string"
      };

      const indexTransform = adaptAlreadyAngularInstrumentedHtmlContent(
        NOT_IMPORTANT_FOR_NOW,
        {
          LOG_LEVEL : "BLIP"
        },
        new Date()
      );

      expect(indexTransform("")).toEqual("")
      expect(indexTransform("<html><head></head><body></body></html>")).toEqual("<html><head></head><body></body></html>")
      expect(indexTransform(`
      <html>
        <head></head>
        <body></body>
      </html>
      `)).toEqual(`
      <html>
        <head></head>
        <body></body>
      </html>
      `)

      expect(indexTransform(`
      <html>
        <head></head>
        <!-- head -->
        <!-- head -->
        <body></body>
      </html>
      `)).toEqual(`
      <html>
        <head></head>
        <!-- head -->
        <!-- head -->
        <body></body>
      </html>
      `)

      // it extracted the newline between head and /head and reinjected it
      expect(indexTransform(`
      <html>
        <head></head>
        <!-- head -->
        <!-- /head -->
        <body></body>
      </html>
      `)).toEqual(`
      <html>
        <head></head>
        
        <body></body>
      </html>
      `)

      // it extracted the newline between head and /head and reinjected it
      expect(indexTransform(`
      <html>
        <head></head>
        <!-- head -->
        [%= LOG_LEVEL %]
        <!-- /head -->
        <body></body>
      </html>
      `)).toEqual(`
      <html>
        <head>BLIP</head>
        
        <body></body>
      </html>
      `)

    });

    it("like 'fetchHeadContentFromRawRenderedTemplate'", () => {
      expect(fetchHeadContentFromInterpretedTemplate("")).toBe("");
      expect(fetchHeadContentFromInterpretedTemplate("aze aze aze ")).toBe("");
      expect(fetchHeadContentFromInterpretedTemplate("aze <!-- --> azeaze <!-- -->")).toBe("");
      expect(fetchHeadContentFromInterpretedTemplate("aze <!-- head --> azeaze <!-- /head -->")).toBe(" azeaze ");
    });

  });

});