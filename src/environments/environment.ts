// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  makeUpApiBase: 'http://makeup-api.herokuapp.com/api/v1/products.json',
  currencyApiBase: 'https://restcountries.com/v3.1',
  firebase: {
    projectId: 'comm-project-ecc1f',
    appId: '1:555258376095:web:dd36a78c508acb4b81d7aa',
    databaseURL: 'https://comm-project-ecc1f-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'comm-project-ecc1f.appspot.com',
    apiKey: 'AIzaSyDDQuDjPP3bPyLw_0rPXY_Q-ZK4f40QUnc',
    authDomain: 'comm-project-ecc1f.firebaseapp.com',
    messagingSenderId: '555258376095',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
