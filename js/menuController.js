var app = angular.module("ScarmaGames", []);
app.config(function($locationProvider) {
	$locationProvider.html5Mode(true);
 });

app.controller("menuController", ['$scope', function($scope) {
  
	$scope.play=function(gameUrl){
		window.location.href( gameUrl+ '/index.html');
		window.location.reload();
	//$location.path( gameUrl+ '/index.html');
  }
var linebreak="\n";	
  $scope.items = [{
    label: "Warp Bird",
    link: "Warp Bird",
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
    desc : "2 stars controlled by one player."+linebreak+
	 "20+ awesome levels."+linebreak+
	 "2D Platformer."+linebreak+
	 "2 hard to complete."
	  ,
	img : "starinblack.png"
  },{
    label: "Rob - The Talking Robot",
    link: "Rob",
    desc : "Rob is a smart robot who can do different things such as:"+linebreak+
	  " - Read a text in many languages (tts)"+linebreak+
" - Repeat what you say"+linebreak+
" - Move along the screen"+linebreak+
" - Change colour"+linebreak+
	  " - Change sex"+linebreak+
	  " - Speak louder" ,
	img : "rob.png"
  },{
    label: "Chat & Shoot",
    link: "Chat & Shoot",
    desc : "A simple online multiplayer game."+linebreak+
	  "Chat with your friends while shooting to evil Monsters."+linebreak+
	  "Have fun in endless matches with a forever looping amazing soundtrack."+linebreak+linebreak+
	  "In-Game Controls"+linebreak+
	  "Click: Shoot."+linebreak+
	  "WASD or Arrows: Move"+linebreak
	  ,
	img : "chat&shoot.png"
  },{
    label: "The Tutorial To Play This Game",
    link: "The Tutorial To Play This Game",
    desc : "What happens if the tutorial becomes the game?"+linebreak+
"The objective of the tutorial is to play this game."+linebreak+
"The game is quite a short game and is a little idea made concrete."+linebreak+
"Game made in less than 10 hours from scratch using Construct 2, Audacity and Photofiltre."+linebreak+
"Ending music generated with This Exquisite Music Engine."+linebreak+linebreak+linebreak+
	  "HINT: Words are meaningful."+linebreak,
	  img: "thetutorialtoplaythisgame.gif"
  },{
    label: "Webcam Effects",
    link: "Webcam Effects",
    desc : "Add many effects to your webcam and take picture of your beautiful face.",
	img : "webcameffects.png"
  },{
    label: "Countdown Timer",
    link: "Countdown Timer",
    desc : "If you love time and music this is the app for you."+linebreak+
	  "Useful for new year countdowns."+linebreak+linebreak+linebreak+linebreak+linebreak
	  ,
	img : "countdowntimer.png"
  }
  
  ];
}]);

