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
            this.addAnim('reloading', 1, [8]);
            this.reloadTimer = 0;
        },
        
        update: function(){
            this.parent();
            if (this.reloadTimer > 0){
                this.reloadTimer --;
            }
            if (this.reloadTimer == 1){
                this.reloadTimer --;
                this.currentAnim = this.anims.spinning.rewind();
            }
        },
        
        fire: function(){
            this.reloadTimer = 150;     //5 seconds at 30fps.
            this.currentAnim = this.anims.reloading;
            
        }
        
    });
   
    
    
});