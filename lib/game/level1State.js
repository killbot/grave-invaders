ig.module(
    'game.level1State'
)
.requires(
    'impact.font',
    'impact.game',
    'game.gameState'
)
.defines(function(){
Level1State = GameState.extend({
    levelName: "LevelLevel1", //must be 'Level' + 'name' as it exists in Level directory
    init: function(){
               
    },
    onLoad: function(){
        ig.input.bind( ig.KEY.UP_ARROW, 'up' );
        ig.input.bind( ig.KEY.DOWN_ARROW, 'down' );
        ig.input.bind( ig.KEY.LEFT_ARROW, 'left');
        ig.input.bind( ig.KEY.RIGHT_ARROW, 'right');
        //ig.input.bind( ig.KEY.ESC, 'pause');
        //alert("level1 state onLoad()");
        ig.game.loadLevel(LevelLevel1New);
    },
    onExit: function(){
        ig.input.unbind( ig.KEY.UP_ARROW, 'up' );
        ig.input.unbind( ig.KEY.DOWN_ARROW, 'down' );
        ig.input.unbind( ig.KEY.LEFT_ARROW, 'left');
        ig.input.unbind( ig.KEY.RIGHT_ARROW, 'right');
    },
    update: function(){
        //meant be called inside the game's main update function.
        if (ig.input.pressed('fire')){
	    var lightTowers = ig.game.getEntitiesByType(
				'EntityLightCastleTower');
            for (i=0; i<lightTowers.length; i++){
                if (lightTowers[i].reloadTimer == 0){
                    lightTowers[i].fire();
                    break;
                }
	    }
	}
    }
        
        
});
     
});