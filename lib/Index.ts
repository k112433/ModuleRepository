import * as pluralize from "pluralize";
import { sp } from "sp-pnp-js";
import { AppConstants } from "../lib/AppConstants";
/**
 * @Method: Returns the plural form of any noun.
 * @Param {string}cls
 * @Return {string}
 */

export default class LoggerHelper {
  private _appConstants: AppConstants;
  public static listName: string;
  constructor() {
    this._appConstants = AppConstants.Instance();
  }

  public Log(item: ILogger) {
    if (AppConstants) {
      if (AppConstants.ListName) {
        sp.web.lists
          .getByTitle(AppConstants.ListName)
          .items.add(item)
          .then(res => {})
          .catch(err => {
            console.log(err);
            console.log("An Error Occured While Writting Log");
          });
      }
    }
  }

  public Initalize(listName: any) {
    AppConstants.ListName = listName;
    // Processing for If List Exist or Not
  }
}

export interface ILogger {
  PageURL?: string;
  FileName?: string;
  Method?: string;
  UserId?: any;
  ExType?: any;
  ErrorMessage?: string;
  ErrorDetails?: string;
  JSON?: string;
  ProgrammeID?: number;
  StatusCode?: number;
}
