import * as pluralize from "pluralize";
import { sp, ListEnsureResult, App } from "sp-pnp-js";

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
        if (AppConstants.ListCreated) {
          sp.web.lists
            .getByTitle(AppConstants.ListName)
            .items.add(item)
            .then(res => {})
            .catch(err => {});
        } else AppConstants.Queue.push(item);
      }
    }
  }

  private async CreateListColumns() {
    alert("Creating Columns");
    sp.web.lists
      .getByTitle(AppConstants.ListName)
      .fields.addMultilineText("PageURL")
      .then((a: any) => {
        ////
        alert("PageURL");
        sp.web.lists
          .getByTitle(AppConstants.ListName)
          .fields.addText("FileName")
          .then((a: any) => {
            alert("FileName");
            ////
            sp.web.lists
              .getByTitle(AppConstants.ListName)
              .fields.addText("Method")
              .then((a: any) => {
                alert("Method");
                ////
                sp.web.lists
                  .getByTitle(AppConstants.ListName)
                  .fields.addUser("User", 0)
                  .then((a: any) => {
                    alert("User");
                  });

                //
              });

            //
          });

        //
      });

    // sp.web.lists
    //   .getByTitle(AppConstants.ListName)
    //   .fields.addMultilineText("PageURL")
    //   .then((res: any) => {
    //     alert("Multiline Added");
    //   });
    // Promise.all([
    //   sp.web.lists
    //     .getByTitle(AppConstants.ListName)
    //     .fields.addMultilineText("PageURL"),
    //   sp.web.lists.getByTitle(AppConstants.ListName).fields.addText("FileName"),
    //   sp.web.lists.getByTitle(AppConstants.ListName).fields.addText("Method"),
    //   sp.web.lists.getByTitle(AppConstants.ListName).fields.addUser("User", 0),
    //   sp.web.lists
    //     .getByTitle(AppConstants.ListName)
    //     .fields.addChoice("Extype", ["Info", "Error", "Warn"]),
    //   sp.web.lists
    //     .getByTitle(AppConstants.ListName)
    //     .fields.addMultilineText("ErrorMessage"),
    //   sp.web.lists
    //     .getByTitle(AppConstants.ListName)
    //     .fields.addMultilineText("ErrorDetails"),
    //   sp.web.lists
    //     .getByTitle(AppConstants.ListName)
    //     .fields.addMultilineText("JSON"),
    //   sp.web.lists
    //     .getByTitle(AppConstants.ListName)
    //     .fields.addNumber("ProgrammeID"),
    //   sp.web.lists
    //     .getByTitle(AppConstants.ListName)
    //     .fields.addNumber("StatusCode")
    // ])
    //   .then(res => {
    //     AppConstants.ListCreated = true;
    //     this.CheckQueue();
    //   })
    //   .catch(err => {
    //     AppConstants.ListCreated = false;
    //     console.log(err);
    //   });
  }

  private CheckQueue() {
    let obj: any;
    while (AppConstants.Queue.length) {
      obj = AppConstants.Queue.pop();
      if (obj != undefined) this.Log(obj);
    }
  }

  public async Initalize(listName: any) {
    AppConstants.ListName = listName;
    console.log("Initialize Called");
    // Processing for If List Exist or Not
    await sp.web.lists.ensure(listName).then((value: ListEnsureResult) => {
      if (value.created) {
        alert("List has been Created");
        this.CreateListColumns();
      } else {
        AppConstants.ListCreated = true;
        alert("List was Created Aready already ");
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
  private static _queue: ILogger[] = [];
  private static _listCreated: boolean = false;

  public static Instance() {
    return this._instance || (this._instance = new this());
  }
  public static get ListName(): string {
    return this._listName;
  }
  public static set ListName(_listName: string) {
    this._listName = _listName;
  }
  public static get Queue(): ILogger[] {
    return this._queue;
  }
  public static set Queue(q: ILogger[]) {
    this._queue = q;
  }
  public static get ListCreated(): boolean {
    return this._listCreated;
  }

  public static set ListCreated(q: boolean) {
    this._listCreated = q;
  }

  public constructor() {}
}
