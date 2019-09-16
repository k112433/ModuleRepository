import * as pluralize from "pluralize";
import { sp, ListEnsureResult, App } from "sp-pnp-js";


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
    let defaultView = sp.web.lists.getByTitle(AppConstants.ListName).defaultView;
    let allFields:string[]=[];
    sp.web.lists
      .getByTitle(AppConstants.ListName)
      .fields.addMultilineText("PageURL")
      .then((a: any) => {
        allFields.push("PageURL");
        ////

        sp.web.lists
          .getByTitle(AppConstants.ListName)
          .fields.addText("FileName")
          .then((a: any) => {
            allFields.push("FileName");
            ////
            sp.web.lists
              .getByTitle(AppConstants.ListName)
              .fields.addText("Method")
              .then((a: any) => {
                allFields.push("Method");
                ////
                sp.web.lists
                  .getByTitle(AppConstants.ListName)
                  .fields.addUser("User", 0)
                  .then((a: any) => {
                    allFields.push("User");
                    ////
                    sp.web.lists
                      .getByTitle(AppConstants.ListName)
                      .fields.addChoice("Extype", ["Info", "Error", "Warn"])
                      .then((a: any) => {
                        allFields.push("Extype");
                        ////
                        sp.web.lists
                          .getByTitle(AppConstants.ListName)
                          .fields.addMultilineText("ErrorMessage")
                          .then((a: any) => {
                            allFields.push("ErrorMessage");
                            ////
                            sp.web.lists
                              .getByTitle(AppConstants.ListName)
                              .fields.addMultilineText("ErrorDetails")
                              .then((a: any) => {
                                allFields.push("ErrorDetails");
                                ////
                                sp.web.lists
                                  .getByTitle(AppConstants.ListName)
                                  .fields.addMultilineText("JSON")
                                  .then((a: any) => {
                                    allFields.push("JSON");
                                    ////
                                    sp.web.lists
                                      .getByTitle(AppConstants.ListName)
                                      .fields.addNumber("ProgrammeID")
                                      .then((a: any) => {
                                        allFields.push("ProgrammeID");
                                        ////
                                        sp.web.lists
                                          .getByTitle(AppConstants.ListName)
                                          .fields.addNumber("StatusCode")
                                          .then((a: any) => {
                                            allFields.push("StatusCode");
                                            this.addAllFieldsToView(defaultView,allFields);
                                            AppConstants.ListCreated = true;
                                            this.CheckQueue();
                                          });

                                        //
                                      });

                                    //
                                  });

                                //
                              });

                            //
                          });

                        //
                      });

                    //
                  });

                //
              });

            //
          });

        //
      });
  }

  private addAllFieldsToView(defView:any,allFields:string[]){
    const batch = sp.web.createBatch();
    defView.fields.inBatch(batch).removeAll();
    allFields.forEach(fieldName => {
    defView.fields.inBatch(batch).add(fieldName);
    batch.execute().then(_ => console.log('Done')).catch(console.log);
});

batch.execute().then(_ => console.log('Done')).catch(console.log);
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
        console.log("List Created");
        this.CreateListColumns();
      } else {
        AppConstants.ListCreated = true;
        this.CheckQueue();
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
  Extype?: any;
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
