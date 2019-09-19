(function(){

    var app = angular.module('app',[]);

    
    
    
    

    app.controller('mycontroller',['$scope', '$interval', function($scope,$interval){
        var i = 0;
        $scope.bgs=['./img/bgbook1.png', './img/bg1.png'];
        $scope.books = ['./img/imgbook1.png', './img/imgbook2.png'];
        $scope.texts = ['./img/textbook1.png', './img/textbook2.png'];
        $scope.titles = ['./img/titlebook1.png', './img/titlebook2.png'];
        $scope.show = true;

        $scope.bg = $scope.bgs[i % 2];
        $scope.book = $scope.books[i % 2];
        $scope.text = $scope.texts[i % 2];
        $scope.title = $scope.titles[i%2];
        i++;

        slideshow = function(){
           $scope.bg = $scope.bgs[i % 2];
           $scope.book = $scope.books[i % 2];
           $scope.text = $scope.texts[i % 2];
           $scope.title = $scope.titles[i%2];

           i++;
        }

        $scope.leftslide = function(){
            i = (i+2-1)%2;
         
            $scope.bg = $scope.bgs[i % 2];
            $scope.book = $scope.books[i % 2];
            $scope.text = $scope.texts[i % 2];
            $scope.title = $scope.titles[i%2];          
        }

        $scope.rightslide = function(){
            i++;
           
            $scope.bg = $scope.bgs[i % 2];
            $scope.book = $scope.books[i % 2];
            $scope.text = $scope.texts[i % 2];
            $scope.title = $scope.titles[i%2];
            
        }

        $scope.shows = function(){
            $scope.show = !$scope.show;
        }

        $interval(function(){slideshow();}, 5000);
    }]);






})();