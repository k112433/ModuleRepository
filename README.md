# spfx_logger

spfx_logger is a library which is used to log into your sharepoint through code. 

## Installation

Use npm to install this package

```bash
npm install spfx_logger
```
## Latest Version

```bash
1.0.6
```

## Usage

```node
import LoggerHelper from 'spfx_logger';

let _logger = new LoggerHelper();
let listName = "custom_log_list";
_logger.Initalize(listName);

/* Note: If list with this name doesnt exist in SharePoint then Initialize() method will
  make a new list in your sharePoint based on ILogger interface info
  Try to choose unique name which doesn't exist in your sharepoint
*/




// After logger initialization you can Log anything in your sharepoint list
let obj:ILogger = {};
obj = {
ErrorMessage: "It is error message",
ErrorDetails: "These are error details",
Extype: "Error",
 PageURL: "https:\\contoso.sharepoint.com\test\Pages\Get.aspx",
  FileName: "ListService.ts",
  Method: "GetItems()",
  UserId: 1,
  JSON: '{"error":"it is exception","message":"it is error message"}',
  ProgrammeID: 1,
  StatusCode: 404
}

_logger.Log(obj);
// this method will log your error in the initialized List 
```

## Interface 
```node
/* object should of the following interface ILogger
Note: All columns are nullable 
 */
interface ILogger {
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
```
