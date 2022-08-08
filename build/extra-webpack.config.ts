import { CustomWebpackBrowserSchema } from "@angular-builders/custom-webpack";
import * as webpack from "webpack";

/*
 Inner Webpack configuration can be customised here.
 */
export default (config: webpack.Configuration, options: CustomWebpackBrowserSchema) => {
  return config;
};
