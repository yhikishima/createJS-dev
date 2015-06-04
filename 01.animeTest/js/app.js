(function() {
	var canvas = document.querySelector('#canvas');
	var canvas2 = document.querySelector('#canvas02');
	var myCanvas = document.querySelector('#myCanvas');
	var rockCanvas = document.getElementById('rockCanvas');

	function createCircle() {
		var stage = new createjs.Stage(canvas);
		var circle = new createjs.Shape();

		circle.graphics.beginFill('#ccc');
		circle.graphics.drawCircle(100, 100, 50);
		circle.x = 100;
		circle.y = 100;

		stage.addChild( circle );
		stage.update();		
	}

	function createImg() {
		var stage = new createjs.Stage(canvas2);
		var dragon = new createjs.Bitmap('./img/dragon.png')
		dragon.x = 40;
		dragon.y = 20;

		stage.addChild(dragon);

		var update = function() {
			stage.update();			
		};

		createjs.Ticker.addEventListener( 'tick', update );
	}

	function catDash() {
		var stage = new createjs.Stage( myCanvas );
		 
		var data = {
		    images: [ './img/cat.png' ],
		    frames: { width : 100, height : 100 },
		    animations: { 
		        myAnim: [ 0, 5, true, 0.3 ]
		    }
		};
		 
		var spriteSheet = new createjs.SpriteSheet( data );
		var cat = new createjs.Sprite(spriteSheet);
		stage.addChild( cat );
		cat.gotoAndPlay('myAnim');
		 
		var update = function() {
		    stage.update();
		}
		 
		createjs.Ticker.setFPS( 60 );
		createjs.Ticker.addEventListener( 'tick', update );
	}

	function createRock() {
		var stage = new createjs.Stage(rockCanvas);
		var myBitmap = new createjs.Bitmap( './img/rock.png' );

		stage.addChild( myBitmap );

		var update = function() {
		    stage.update();
		}

		createjs.Ticker.setFPS( 60 );
		createjs.Ticker.addEventListener( 'tick', update );


	}

	createCircle();
	createImg();
	catDash();
	createRock();

})();