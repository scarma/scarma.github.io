var app = angular.module("ScarmaGames", []);
app.controller("menuController", ['$scope', function($scope) {
	var linebreak="\n"
  $scope.items = [{
    label: "Warp bird",
    link: "Warp bird",
    desc : "A Bird Can Destroy"+linebreak+
"You are a cute little bird who can't fly. But you can collect bombs and hammers."+linebreak+
	  "Enter The Warp Zone!"+linebreak+
"The Warp Zone is useful for rest or trade with merchants."+linebreak+
"Infinite randomly generated levels!"+linebreak+
"Levels become more and more difficult. How far can you go without dying?"+linebreak+
"Play directly from your browser from any device!"+linebreak+
"You can play it using any browser with HTML5 support (Chrome recommended)."+linebreak+
"Now with online leaderboard!"+linebreak+
"Choose your username and password and when you die your score is automatically submitted online!"+linebreak+
"In-Game Controls"+linebreak+
"A / rotate left = Move left"+linebreak+
"D / rotate right = Move right"+linebreak+
"W / slide up = Jump"+linebreak+
"ESC = Restart level"+linebreak+
"Click / tap on a brick = Brick smash"+linebreak+
"Double click / tap = Drop a bomb",
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
"Ending music generated with This Exquisite Music Engine."+linebreak+linebreak+
	  "HINT: Words are meaningful."+linebreak,
	  img: "thetutorialtoplaythisgame.gif"
  },{
    label: "Webcam Effects",
    link: "Webcam Effects",
    desc : "A game about using a webcam",
	img : "webcameffects.png"
  }
  
  ];
}]);

