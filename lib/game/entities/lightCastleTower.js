ig.module(
    'game.entities.lightCastleTower'
)
.requires(
    'game.entities.building'
)
.defines(function(){
    EntityLightCastleTower = EntityBuilding.extend({
        collides: ig.Entity.COLLIDES.FIXED,
        animSheet: new ig.AnimationSheet('media/lightTowerSheet.png', 32, 64),
        size: {x:32, y:64},
        init: function(x, y, settings){
            this.parent(x, y, settings);
            this.addAnim('spinning', 0.1, [0,1,2,3,4,5,6,7]);
        },
        
        update: function(){
            this.parent();
        }
        
    });
   
    
    
});