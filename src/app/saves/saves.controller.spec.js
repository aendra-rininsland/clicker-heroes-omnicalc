(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('omnicalc'));

    it('should be able to load a save game', inject(function($controller) {
      var vm = $controller('savesController');
      vm.showImportDialog();
      
      expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
      expect(vm.awesomeThings.length > 5).toBeTruthy();
    }));
  });
})();
