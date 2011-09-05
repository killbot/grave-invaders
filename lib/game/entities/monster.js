ig.module(
    'game.entities.monster'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityMonster = ig.Entity.extend({
    size: {x:32, y:32},
    type: ig.Entity.TYPE.B,     //enemies get B type
    checkAgainst: ig.Entity.TYPE.A,
    collides: ig.Entity.COLLIDES.PASSIVE,
    myTarget: null,
    bloodColor: {r:255, g:0, b:0, a:1}, //default blood color is red.
    spraySettings: {theta1:1.2, theta2:1.8, density:20, speed:10, lifetime:1},
    gravityFactor: 0,
    
    init: function(x, y, settings){
        
        this.parent(x, y, settings);

    },
    
    update: function(){
        this.parent();
    }
/*    
    sprayBlood: function(){
        var timer = new Timer(this.spraySettings.lifetime);
        var colorStep = {r:0, g:0, b:0, a:0},
        //default spray blood behavior is to not change colors, but to
        //just change alpha from the original alpha, to 0, makes it look like
        //its fading out which is cool.  Can overload this if you want.
        colorStep.a = this.getColorStep(this.bloodColor.a, 0);
        
    },
    getColorStep: function(color1, color2){
        var ticks = this.spraySettings.lifetime * ig.system.fps;
        return ((color2-color1)/ticks);
    }
 */
});

});