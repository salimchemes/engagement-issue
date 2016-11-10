/*
  Declaration files are how the Typescript compiler knows about the type information(or shape) of an object.
  They're what make intellisense work and make Typescript know all about your code.

  A wildcard module is declared below to allow third party libraries to be used in an app even if they don't
  provide their own type declarations.

  To learn more about using third party libraries in an Ionic app, check out the docs here:
  http://ionicframework.com/docs/v2/resources/third-party-libs/

  For more info on type definition files, check out the Typescript docs here:
  https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html
*/
declare module '*';
declare interface Engagement { 
    onError(
        error: any
    ): void;

    initializeReach(
        onOpenURL: any,
        onDataPushReceived: any
    ): void;

    handleOpenURL(
        url: string
    ): void;

    handleDataPush(
        result: any
    ): void;

    startActivity(
        activityName: string,
        extraInfos: string,
        successCallback?: (winParam: any) => void,
        errorCallback?: (error: any) => void
    ): void;

    endActivity(
        successCallback?: (winParam: any) => void,
        errorCallback?: (error: any) => void
    ): void;

    sendAppInfo(
        appInfos: any,
        successCallback?: (winParam: any) => void,
        errorCallback?: (error: any) => void
    ): void;

     sendEvent(
        eventName: string,
        extraInfos: string,
        successCallback?: (winParam: any) => void,
        errorCallback?: (error: any) => void
    ): void;

    startJob(
        jobName: string,
        extraInfos: string,
        successCallback?: (winParam: any) => void,
        errorCallback?: (error: any) => void
    ): void;

    endJob(
        jobName: string,
        successCallback?: (winParam: any) => void,
        errorCallback?: (error: any) => void
    ): void;

    sendSessionEvent(
        evtName: string,
        extraInfos: string,
        successCallback?: (winParam: any) => void,
        errorCallback?: (error: any) => void
    ): void;

    sendSessionError(
        error: any,
        extraInfos: string,
        successCallback?: (winParam: any) => void,
        errorCallback?: (error: any) => void
    ): void;

    sendError(
        error: any,
        extraInfos: string,
        successCallback?: (winParam: any) => void,
        errorCallback?: (error: any) => void
    ): void;

    sendJobEvent(
        eventName: string,
        jobName: string,
        extraInfos: string,
        successCallback?: (winParam: any) => void,
        errorCallback?: (error: any) => void
    ): void;

    sendJobError(
        error: string,
        jobName: string,
        extraInfos: string,
        successCallback?: (winParam: any) => void,
        errorCallback?: (error: any) => void
    ): void;

    getStatus(
        successCallback?: (winParam: any) => void,
        errorCallback?: (error: any) => void
    ): void;

    requestPermissions(
        successCallback?: (winParam: any) => void,
        errorCallback?: (error: any) => void
    ): void;
} 
declare var Engagement : Engagement; 