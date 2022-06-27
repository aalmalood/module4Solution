(function () {
    'use strict';
    
    angular.module('menuApp')
    .controller('categoriesController', categoriesController);

    categoriesController.$inject = ['categories'];
    function categoriesController( categories) {
      var cateLstCtrl = this;
      cateLstCtrl.categories = categories;
   }
    
    })();
    