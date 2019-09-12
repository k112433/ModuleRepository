import {
  sp,
  Web,
  List,
  ItemAddResult,
  AttachmentFileInfo
} from "sp-pnp-js/lib/pnp";

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
export default AppConstants;
