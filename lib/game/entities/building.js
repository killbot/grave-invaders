ig.module(
    'game.entities.building'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityBuilding = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.FIXED,
        size: {x:32, y:32},
        animSheet: new ig.AnimationSheet('media/castlesSheet.png', 32, 32),
        init: function(x, y, settings){
            this.parent(x, y, settings);
            
        },
        update: function(){
            this.parent();
        }
    
    
    });
    
    
});