{
  "resourceType": "GMExtension",
  "resourceVersion": "1.2",
  "name": "GoogleSignIn",
  "androidactivityinject": "",
  "androidclassname": "YYGoogleSignIn",
  "androidcodeinjection": "<YYAndroidGradleDependencies>\r\n\r\nimplementation 'com.google.android.gms:play-services-auth:19.2.0'\r\n\r\n</YYAndroidGradleDependencies>\r\n\r\n<YYAndroidGradleAndroid>\r\ncompileOptions {\r\n   sourceCompatibility 1.8\r\n   targetCompatibility 1.8\r\n}\r\n</YYAndroidGradleAndroid>",
  "androidinject": "",
  "androidmanifestinject": "",
  "androidPermissions": [],
  "androidProps": true,
  "androidsourcedir": "",
  "author": "",
  "classname": "YYGoogleSignIn",
  "copyToTargets": 9007199254741036,
  "date": "2021-08-23T15:59:21.4039452+01:00",
  "description": "",
  "exportToGame": true,
  "extensionVersion": "1.2.0",
  "files": [
    {"resourceType":"GMExtensionFile","resourceVersion":"1.0","name":"","constants":[],"copyToTargets":-1,"filename":"GoogleSignIn.ext","final":"","functions":[
        {"resourceType":"GMExtensionFunction","resourceVersion":"1.0","name":"GoogleSignIn_Show","argCount":0,"args":[],"documentation":"","externalName":"GoogleSignIn_Show","help":"GoogleSignIn_Show()","hidden":false,"kind":4,"returnType":1,},
        {"resourceType":"GMExtensionFunction","resourceVersion":"1.0","name":"GoogleSignIn_SignOut","argCount":0,"args":[],"documentation":"","externalName":"GoogleSignIn_SignOut","help":"GoogleSignIn_SignOut()","hidden":false,"kind":4,"returnType":1,},
      ],"init":"","kind":4,"order":[
        {"name":"GoogleSignIn_Show","path":"extensions/GoogleSignIn/GoogleSignIn.yy",},
        {"name":"GoogleSignIn_SignOut","path":"extensions/GoogleSignIn/GoogleSignIn.yy",},
      ],"origname":"","ProxyFiles":[],"uncompress":false,"usesRunnerInterface":false,},
    {"resourceType":"GMExtensionFile","resourceVersion":"1.0","name":"","constants":[],"copyToTargets":-1,"filename":"GoogleSignIn.js","final":"","functions":[
        {"resourceType":"GMExtensionFunction","resourceVersion":"1.0","name":"GoogleSignIn_Show","argCount":0,"args":[],"documentation":"","externalName":"GoogleSignIn_Show","help":"GoogleSignIn_Show()","hidden":false,"kind":5,"returnType":1,},
      ],"init":"","kind":5,"order":[
        {"name":"GoogleSignIn_Show","path":"extensions/GoogleSignIn/GoogleSignIn.yy",},
        {"name":"GoogleSignIn_Show","path":"extensions/GoogleSignIn/GoogleSignIn.yy",},
      ],"origname":"","ProxyFiles":[],"uncompress":false,"usesRunnerInterface":false,},
  ],
  "gradleinject": "\r\n\r\nimplementation 'com.google.android.gms:play-services-auth:19.2.0'\r\n\r\n",
  "hasConvertedCodeInjection": true,
  "helpfile": "",
  "HTML5CodeInjection": "\r\n<GM_HTML5_PreBody>\r\n    <script src=\"https://accounts.google.com/gsi/client\" async defer></script>\r\n</GM_HTML5_PreBody>",
  "html5Props": true,
  "IncludedResources": [],
  "installdir": "",
  "iosCocoaPodDependencies": "",
  "iosCocoaPods": "\r\n     pod 'GoogleSignIn','6.2.4'\r\n",
  "ioscodeinjection": "\r\n<YYIosCocoaPods>\r\n     pod 'GoogleSignIn','6.2.4'\r\n</YYIosCocoaPods>\r\n\r\n<YYIosCFBundleURLSchemesArray>\r\n     <string>com.googleusercontent.apps.20722703459-bb8lnfpgj83fuao2sn48ugv7jr7urpol</string>\r\n</YYIosCFBundleURLSchemesArray>\r\n",
  "iosdelegatename": "",
  "iosplistinject": "",
  "iosProps": true,
  "iosSystemFrameworkEntries": [],
  "iosThirdPartyFrameworkEntries": [],
  "license": "",
  "maccompilerflags": "",
  "maclinkerflags": "",
  "macsourcedir": "",
  "options": [
    {"resourceType":"GMExtensionOption","resourceVersion":"1.0","name":"html5ClientID","defaultValue":"","description":"Can be accessed in-game by the name 'html5ClientID'","displayName":"HTML5 Client ID","exportToINI":false,"extensionId":null,"guid":"a9082ed0-4d32-4f1d-9d8e-3e8dccfe075a","hidden":false,"listItems":[],"optType":2,},
    {"resourceType":"GMExtensionOption","resourceVersion":"1.0","name":"androidClientID","defaultValue":"","description":"Can be accessed in-game by the name 'androidClientID'","displayName":"Android Client ID","exportToINI":false,"extensionId":null,"guid":"dbf63b47-98bd-4520-95ca-f70576af7321","hidden":false,"listItems":[],"optType":2,},
    {"resourceType":"GMExtensionOption","resourceVersion":"1.0","name":"iosClientID","defaultValue":"","description":"Can be accessed in-game by the name 'iosClientID'","displayName":"iOS Client ID","exportToINI":false,"extensionId":null,"guid":"c25a7650-d2fb-4e2b-8495-e56fbe1d36b4","hidden":false,"listItems":[],"optType":2,},
  ],
  "optionsFile": "options.json",
  "packageId": "",
  "parent": {
    "name": "GoogleSignIn",
    "path": "folders/Authentication Extensions/GoogleSignIn.yy",
  },
  "productId": "",
  "sourcedir": "",
  "supportedTargets": -1,
  "tvosclassname": null,
  "tvosCocoaPodDependencies": "",
  "tvosCocoaPods": "",
  "tvoscodeinjection": "<YYTvosPlist>\r\n\r\n</YYTvosPlist>\r\n\r\n",
  "tvosdelegatename": null,
  "tvosmaccompilerflags": "",
  "tvosmaclinkerflags": "",
  "tvosplistinject": "\r\n\r\n",
  "tvosProps": false,
  "tvosSystemFrameworkEntries": [],
  "tvosThirdPartyFrameworkEntries": [],
}