import * as pluralize from "pluralize";
import { sp, ListEnsureResult } from "sp-pnp-js";

/**
 * @Method: Returns the plural form of any noun.
 * @Param {string}
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
    sp.web.lists.ensure(listName).then((value: ListEnsureResult) => {
      if (value.created) {
        console.log("List already Exist");
      } else {
        console.log("Going to Create a List with this Name");
      }
    });
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

export class AppConstants {
  private static _instance: AppConstants;

  private static _listName: string;

  //private static foo: ProjectsCrud = new ProjectsCrud(null);

  public static Instance() {
    // Do you need arguments? Make it a regular static method instead.

    return this._instance || (this._instance = new this());
  }
  public static get ListName(): string {
    return this._listName;
  }
  public static set ListName(_listName: string) {
    this._listName = _listName;
  }

  public constructor() {
    //...
  }
}
