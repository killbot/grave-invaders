//BAse class for the various game states.  includes:
//menu screen
//cinematic scenes
//setup
//battle

ig.module(
    'game.gameState'
)
.requires(
    'impact.impact'
)
.defines(function(){
GameState = ig.Class.extend({

    onLoad: function(){
        
    },
    onExit: function(){
        
    },
    changeState: function(state){
        if (state == "Menu"){
            
            
        }
        else if (state == "Level1"){
            
        }
    }
    
    
});    
});