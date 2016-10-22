var app = angular.module("ScarmaGames", []);
app.controller("menuController", ['$scope', function($scope) {
	var linebreak="\n"
  $scope.items = [{
    label: "Warp bird",
    link: "Warp bird",
    desc : "A game about birds",
	img : "WarpBirdGif.gif"
  }, {
    label: "Star In Black",
    link: "Star In Black",
    desc : "A game about stars",
	img : "starinblack.png"
  },{
    label: "Rob - The Talking Robot",
    link: "Rob",
    desc : "rob",
	img : "rob.png"
  },{
    label: "Chat & Shoot",
    link: "Chat & Shoot",
    desc : "A game about chatting and shooting laser beams",
	img : "chat&shoot.png"
  },{
    label: "The Tutorial To Play This Game",
    link: "The Tutorial To Play This Game",
    desc : "What happens if the tutorial becomes the game?"+linebreak+
"The objective of the tutorial is to play this game."+linebreak+
"The game is quite a short game and is a little idea made concrete."+linebreak+
"Game made in less than 10 hours from scratch using Construct 2, Audacity and Photofiltre."+linebreak+
"Ending music generated with This Exquisite Music Engine. HINT: Words are meaningful."+linebreak,
	  img: "thetutorialtoplaythisgame.gif"
  },{
    label: "Webcam Effects",
    link: "Webcam Effects",
    desc : "A game about using a webcam",
	img : "webcameffects.png"
  }
  
  ];
}]);

