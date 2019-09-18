# SPFX_Logger

SPFX_Logger is a library which is used to log into your sharepoint through code. 

## Installation

Use NPM to install this package

```bash
npm install custom_utility
```

## Usage

```node
import LoggerHelper from 'custom_utility';

let _logger = new LoggerHelper();
let listName = "custom_log_list";
_logger.Initialize(listName);

// After logger initialization you can Log anything in your sharepoint list
let obj = {
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
```

## Interface 
```node
/* object should of the following interface ILogger */
interface ILogger {
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
```
