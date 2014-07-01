
     var app = angular.module('Lista', []);

     function ListaController($scope) {

         $scope.showInputsEditedProduct = false;
         $scope.showInputProduct = false;
         $scope.showDeleteButton = false;
         $scope.productsInList = false;



         $scope.show = function () {
             $scope.showInputProduct = !$scope.showInputProduct;
         };


         $scope.products = [];

         $scope.addProduct = function () {
             $scope.products.push({
                 name: $scope.newProductName,
                 details: $scope.newProductDetails,
                 checked: false

             });
             $scope.newProductName = "";
             $scope.newProductDetails = "";
             $scope.productsInList = true;
         };

         $scope.showNew = function () {
             this.showInputsEditedProduct = !this.showInputsEditedProduct;
         };

         $scope.check = function () {
             var i;
             for (i = 0; i <= $scope.products.length; i++)
                 $scope.products.checked = !$scope.products.checked;
         };

         $scope.erase = function () {
             var i;
             for (i = 0; i <= $scope.products.length; i++) {
                 if ($scope.products[i].checked) {
                     $scope.products.splice(i, 1);
                     i--;
                 }
             }
         };

         $scope.$watch( 'products' , function(){
              var i;
              for(i = 0; i <= $scope.products.length; i++)
                  if ($scope.products[i].checked)
                                $scope.showDeleteButton=true;
         },true);
     }


