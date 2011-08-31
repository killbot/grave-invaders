ig.module(
    'game.entities.laserbeam'
)
.requires(
    'impact.entity',
)
.defines(function(){
    EntityLaserbeam = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.PASSIVE,
        
        init: function(x, y, settings){
            this.parent(x, y, settings);
        },
        update: function(){
            this.parent();
        }

        
    });
    
    
});