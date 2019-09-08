# Auth client(Angular) and Server(Node.js) for the Substation Data API

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1 and [Node.js(8.x+)](https://nodejs.org/en/) / [Express](https://expressjs.com/)

App is using MSAL (AzureAD v2.0 protocol) authentication.

- Reference Links

    [About Adal(v1.0)](https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-overview)
    
    [About Msal(v2.0)](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-overview)
    
    [MSAL.js for SPA](https://github.com/AzureAD/microsoft-authentication-library-for-js)

- General App Flowchart

  1. Get accessToken through AzureAD authentication
  2. Send accessToken into Node.js server (Authentication server)
  3. Check token validation in Node.js server
  4. If accessToken valid,  server forward client request into data server using accessToken

## Configuration for App

```
{
  "client_info": { //config for Client
    "msal_info": {
      "clientID": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", //App Id for client 
      "redirectUri": "https://my.substation.com:8081/",
      "postLogoutRedirectUri": "https://my.substation.com:8081/logout",
      "consentScopes": "api://a88bb933-319c-41b5-9f04-eff36d985612/access_as_user" //Dont' change
    },
    "storeInfo": { //key names to save token informations
      "tokenKey": "smart_device_token",
      "username": "smart_device_username",
      "exptime": "smart_device_expire_time"
    },
    "apiEndPoints": {
      "graphProfileAPI": "https://graph.microsoft.com/v1.0/me",
      "serverBaseURL": "https://my.substation.com:8081/api" //Node Server Base URL
    },
    "languages" :[ //Supported language list
      //if need to add more langulages add new lines below part and place translation files /client/assets/i18n
      {"id": "en", "name": "English"},
      {"id": "fr", "name": "Française"},
      {"id": "cn", "name": "中文"},
      {"id": "es", "name": "Española"}
    ]
  },
  "server_info":{ //config for Server
    "port": 8081,//Node.js Server Port Number
    "online_mode":true, //true=> https:// , false => http://
    "apiBaseURL":"https://my.substation.com:8079/substations/v1", //base url for data server
    "pfx":"dev-smartservice.westeurope.cloudapp.azure.com.pfx" //certificate name , place in /enviornments/ssl folder
  }
}

```
[Click here](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant) to create new App ID.


## Development client

Run `npm install` to install packages.

Run `ng serve` for a dev server. Navigate to `http://localhost:8081/`. The app will automatically reload if you change any of the source files.

__Note :__ Please copy client/environment/lib/tree.js and overwrite it into node_modules/node_modules/ng2-tree/src to avoid package dependency issues.

## Development server

Run `npm install` to install packages.

Run `npm start web-server`

Run `curl http://localhost:8082/check_token` to confirm development server running.

__Note :__ Please set specified fields again in config.js to run client/server separately. 

## Build (final version)

Run `npm run server` to start the build version project.

Navigate to `http://my.substation.com:8081/` to check app running.

## Deployment using [docker](https://www.docker.com/)

Run `bash run-in-docker.sh` from command line to deploy using docker.

Run `bash cleanup.sh` to remove old docker container





