/* global moment:false, CryptoJS:false */
import config from './index.config';
import routerConfig from './index.route';

import runBlock from './index.run';
import SavesController from './saves/saves.controller';
import AncientsController from './ancients/ancients.controller';
import GildingController from './gilding/gilding.controller';
// import GithubContributorService from '../app/components/githubContributor/githubContributor.service';
// import WebDevTecService from '../app/components/webDevTec/webDevTec.service';
// import NavbarDirective from '../app/components/navbar/navbar.directive';
// import MalarkeyDirective from '../app/components/malarkey/malarkey.directive';

angular.module('omnicalc', [
    'ngAnimate', 
    'ngCookies', 
    'ngTouch', 
    'ngSanitize', 
    'ui.router', 
    'ngMaterial', 
    'pascalprecht.translate', 
    'LocalStorageModule'
  ])
  // .constant('malarkey', malarkey)
  .constant('moment', moment)
  .constant('CryptoJS', CryptoJS)
  .constant('ANTI_CHEAT_CODE', 'Fe12NAfA3R6z4k0z')
  .constant('SALT', 'af0ik392jrmt0nsfdghy0')
  .config(config)

  .config(routerConfig)

  .run(runBlock)
  // .service('githubContributor', GithubContributorService)
  // .service('webDevTec', WebDevTecService)
  .controller('SavesController', SavesController)
  .controller('AncientController', AncientsController)
  .controller('GildingController', GildingController);
  // .directive('acmeNavbar', () => new NavbarDirective())
  // .directive('acmeMalarkey', () => new MalarkeyDirective(malarkey));
