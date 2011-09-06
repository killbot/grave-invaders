//Level director class, controlls the moving from levels to levels
//Basicly just a state transition machine.  All changing between levels
//should be handled here with the changeState() method.

ig.module(
    'game.levelDirector'
)
.requires(
    'impact.impact',
    'game.gameState',
    'game.menuScreenState',
    'game.level1State'
)
.defines(function(){
LevelDirector = ig.Class.extend({
    currentState: [],
    
    init: function(state){
        this.changeState(state);
        //this.currentState.push(new MenuScreenState());
        //this.currentState[0].onLoad();
    },
    changeState: function(state){
        if (state == "Menu"){
            if (this.currentState[0]){
                this.currentState[0].onExit();
                var deadState = this.currentState.pop();
                delete deadState;
            }
            this.currentState.push(new MenuScreenState());
            this.currentState[0].onLoad();
            ig.game.loadLevelDeferred(LevelMenu);
        }
        else if (state == "Level1"){
            alert("inside changeState, switching to Level1");
            if (this.currentState[0]){
                this.currentState[0].onExit();
                var deadState = this.currentState.pop();
                delete deadState;
                ig.game.loadLevelDeferred(LevelLevel1);
            }
            this.currentState.push(new Level1State());
            this.currentState[0].onLoad();
        }
        else if (state == "Level2"){
            if (this.currentState[0]){
                this.currentState[0].onExit();
                var deadState = this.currentState.pop();
                delete deadState;
            }
            this.currentState.push(new Level1State());
            this.currentState[0].onLoad();
        }
        
        
        else {
            alert("invalid state = "+state);
        }
        
        
    }
    
    
});    
});