class SavesController {
  constructor ($window, CryptoJS, localStorageService, $mdDialog, ANTI_CHEAT_CODE, SALT) {
    'ngInject';
    
    this.ANTI_CHEAT_CODE = ANTI_CHEAT_CODE;
    this.SALT = SALT;
    this.md5 = CryptoJS.MD5;
    this.atob = $window.atob;
    this.JSON = $window.JSON;
    this.storage = localStorageService;
    this.dialog = $mdDialog;

    // Load existing saves from localStorage.
    this.saves = this.storage.get('saves') || [];
  }

  /**
   * Show a modal dialog to import save game string
   * @return {string|boolean} LocalStorage key if successful, null if not.
   */
  showImportDialog() {
    this.dialog.show({
      templateUrl: 'saves/saves.dialog.html',
      controller: ($scope, $mdDialog) => {
        $scope.watch('inputData', (oldVal, newVal) => {
          $mdDialog.hide(this.importSave(newVal));
        });
      }
    });
  }

  /**
   * Imports a game from a Base64 Clicker Heroes save game into local storage.
   * @param  {string} saveGameBase64 Base64 Clicker Heroes save game.
   * @return {string|null}           Array index if successful, null if failure.
   */
  importSave(saveGameBase64) {
    let i = this.saves.length + 1;
    let save = {
      id: i,
      timestamp: new Date(),
      base64: saveGameBase64,
      data: Object 
    };
    let data = this.parseSave(saveGameBase64);

    if (data) {
      save.data = data;
      let index = this.saves.push(save);
      this.storage.set('saves', this.saves);
      return index;
    } else {
      return null;
    }
  }

  /**
   * Deletes a save from localStorage.
   * @param  {string} saveKey localStorage key for save game.
   * @return {boolean}         True if key was removed, false if otherwise.
   */
  deleteSave(id) {
    let updated = this.saves.filter((v) => {
      return v !== id;
    });

    return this.storage.remove(saveKey);
  }

  /**
   * Parses a Base64 Clicker Heroes save game.
   * @param  {string} saveGameBase64 Base64 Clicker Heroes save game.
   * @return {object|boolean}        Processed save game is successful; false if not.
   */
  parseSave(saveGameBase64) {
    let fragment, txt;
    if (!!~saveGameBase64.match(this.ANTI_CHEAT_CODE)) { // "!!~" means "not not -1".
      fragment = saveGameBase64.split(this.ANTI_CHEAT_CODE);
      txt = '';
      for (var i = 0; i < fragment[0].length; i += 2) {
        txt += fragment[0][i];
      }

      if (this.md5(txt + this.SALT) !== fragment[1]) {
  			console.log('Invalid save game.'); // TODO better exception handling.
  			return;
  		}

      return this.JSON.parse(this.atob(txt));
    } else {
      return false;
    }
  }

  /**
   * Exports a JSON save game back to Base64.
   * @param  {object} saveGame Clicker Heroes save game object.
   * @return {string}          Base64-encoded save game.
   */
  exportSave(saveGame) {
    // TODO
  }

  // activate($timeout, webDevTec) {
  //   this.getWebDevTec(webDevTec);
  //   $timeout(() => {
  //     this.classAnimation = 'rubberBand';
  //   }, 4000);
  // }
  // 
  // getWebDevTec(webDevTec) {
  //   this.awesomeThings = webDevTec.getTec();
  // 
  //   angular.forEach(this.awesomeThings, (awesomeThing) => {
  //     awesomeThing.rank = Math.random();
  //   });
  // }
  // 
  // showToastr() {
  //   this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
  //   this.classAnimation = '';
  // }
}

export default SavesController;
