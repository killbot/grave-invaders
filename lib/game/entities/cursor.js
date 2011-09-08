ig.module(
    'game.entities.cursor'
)
.requires(
    'game.entities.player'
)
.defines(function(){
EntitySetupCursor = EntityPlayer.extend({
    collides: ig.Entity.COLLIDES.NEVER,
    size: {x:32, y:32},
    zIndex: 10,
    animSheet: new ig.AnimationSheet('media/cursors.png'),
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.addAnim('setups', 1, [0], true);
    }
    
    
    
    
});    
});