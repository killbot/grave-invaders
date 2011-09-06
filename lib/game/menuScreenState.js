ig.module(
    'game.menuScreenState'
)
.requires(
    'impact.font',
    'impact.game',
    'game.gameState',
    
    'game.levels.Menu',
    'game.levels.Level1'
)
.defines(function(){
MenuScreenState = GameState.extend({
    levelName: "LevelMenu", //must be 'Level' + 'name' as it exists in Level directory
    init: function(){
               
    },
    onLoad: function(){
        ig.input.bind( ig.KEY.MOUSE1, 'click' );
        //ig.game.loadLevel(LevelMenu);

    },
    onExit: function(){
        ig.input.unbind( ig.KEY.MOUSE1, 'click' );
        //alert("menu state onExit()");
    },
    update: function(){
        //meant be called inside the game's main update function.
        if (ig.input.pressed('click')){
            ig.game.myLevelDirector.changeState("Level1");
        }
    }
        
        
});
     
});