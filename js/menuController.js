var app = angular.module("ScarmaGames", []);
app.controller("menuController", ['$scope', function($scope) {
  $scope.items = [{
    label: "Warp bird",
    link: "Warp bird",
    desc : "A game about birds"
  }, {
    label: "Star In Black",
    link: "Star In Black",
    desc : "A game about stars"
  },{
    label: "Rob - The Talking Robot",
    link: "Rob",
    desc : "A game about a talking robot"
  },{
    label: "Chat & Shoot",
    link: "Chat & Shoot",
    desc : "A game about chatting and shooting laser beams"
  },{
    label: "The Tutorial To Play This Game",
    link: "The Tutorial To Play This Game",
    desc : "What happens if the tutorial becomes the game?"+"<br>"+
"The objective of the tutorial is to play this game."+"<br>"+
"The game is quite a short game and is a little idea made concrete."+"<br>"+
"Game made in less than 10 hours from scratch using Construct 2, Audacity and Photofiltre."+"<br>"+
"Ending music generated with This Exquisite Music Engine. HINT: Words are meaningful."+"<br>"
  },{
    label: "Webcam Effects",
    link: "Webcam Effects",
    desc : "A game about using a webcam"
  }
  ,{
    label: "Countdown Timer",
    link: "Countdown Timer",
    desc : "A game about using a timer and playing songs at the same time"
  }
  
  ];
}]);
