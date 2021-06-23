// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlAdhList: 'http://localhost:8888/adherent/adhMap',
  urlAdhAdd: 'http://localhost:8888/adherent/adhMap',
  urlAdhDelete: 'http://localhost:8888/adherent/adhMap/',
  urlAdhUpdate: 'http://localhost:8888/adherent/adhMap/',
  urlAdhFindById: 'http://localhost:8888/adherent/adhMap/',
  urlAdr: 'http://localhost:8888/adresse/adrMap',
  urlAg: 'http://localhost:8888/agentBM/agMap',
  urlArt: 'http://localhost:8888/ar/artMap',
  urlCas: 'http://localhost:8888/casier/casMap',
  urlCat: 'http://localhost:8888/categorie/catMap',
  urlIden: 'http://localhost:8888/identite/ideMap',
  urlLiv: 'http://localhost:8888/livre/livMap',
  urlPan: 'http://localhost:8888/panier/panMap',
  urlRes: 'http://localhost:8888/reservation/resMap',
  urlSm: 'http://localhost:8888/sm/smMap',
  urlVis: 'http://localhost:8888/visiteur/visMap'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
