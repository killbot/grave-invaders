ig.module(
    'game.entities.crosshairs'
)
.requires(
    'game.entities.player'
)
.defines(function(){
EntityCrosshairs = EntityPlayer.extend({
    collides: ig.Entity.COLLIDES.NEVER,
    size: {x:32, y:32},
    zIndex: 10,
    animSheet: new ig.AnimationSheet('media/crosshairsSheet.png', 32, 32),
    
    init: function(x, y, settings){
        this.parent(x,y,settings);
        this.addAnim('pusling', 0.1, [0,1,2,3,3,2,1,]);
    }

});
    
    
});