ig.module(
    'game.entities.lightCastleTower'
)
.requires(
    'game.entities.building',
    'game.entities.laserbeam'
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
            this.reloadTimer = 5*ig.system.fps      //5 seconds at 30fps.
            this.currentAnim = this.anims.reloading;
            var crosshairs = ig.game.getEntitiesByType(EntityCrosshairs)[0];
            var targetLoc = {x:crosshairs.pos.x + crosshairs.size.x/2,
                                y:crosshairs.pos.y + crosshairs.size.y/2};
            //targetLoc.x *= ig.system.scale;
            //targetLoc.y *= ig.system.scale;
            var startLoc = {x:this.pos.x + this.size.x/2,
                                y:this.pos.y + this.size.y/5};
            //startLoc.x *= ig.system.scale;    //offsets to the eyball at the top
            //startLoc.y *= ig.system.scale;
            ig.game.spawnEntity(EntityLaserbeam, targetLoc.x, targetLoc.y,
                                        {x:startLoc.x, y:startLoc.y});
        }
        
    });
   
    
    
});