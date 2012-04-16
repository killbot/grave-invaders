ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'game.entities.buildingLight',
	'game.entities.monster',
	'game.entities.player',
	'game.entities.building',
	'game.entities.crosshairs',
	'game.entities.lightCastleUpDown',
	'game.entities.lightCastleTower',
	'game.entities.darkCastle',
	'game.entities.zombie',
	'game.entities.laserbeam',
	'game.entities.boneTower',
	'game.entities.wisp',
	'game.entities.monsterGenerator',
	'game.entities.particleGenerator',
	
	'game.gameState',
	'game.menuScreenState',
	'game.levelDirector',
	
	'game.levels.Menu',
	'game.levels.Level1',
	'game.levels.Level1New'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	gravity: 25,
	myLevelDirector: null,
	
	init: function() {
		/*ig.input.bind( ig.KEY.UP_ARROW, 'up' );
		ig.input.bind( ig.KEY.DOWN_ARROW, 'down');
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left');
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right');
		ig.input.bind( ig.KEY.SPACE, 'fire');
		this.loadLevel(LevelLevel1);
		*/
		//this.loadLevel(LevelMenu);
		//this.currentLevel.push(new MenuScreenState());
		//this.currentLevel[0].onLoad();
		
		// Initialize your game here; bind keys etc.
		this.myLevelDirector = new LevelDirector("Menu");
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		this.myLevelDirector.currentState[0].update();
		// Add your own, additional update code here
		/*if (ig.input.pressed('fire')){
			var lightTowers = this.getEntitiesByType(
						'EntityLightCastleTower');
			for (i=0; i<lightTowers.length; i++){
				if (lightTowers[i].reloadTimer == 0){
					lightTowers[i].fire();
					break;
				}
			}

			
		}
		else {
		}
		*/
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		//var x = ig.system.width/2,
		//	y = ig.system.height/2;
		//this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 30, 600, 400, 2 );

});
