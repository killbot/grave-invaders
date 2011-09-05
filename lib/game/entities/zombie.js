ig.module(
    'game.entities.zombie'
)
.requires(
    'game.entities.monster',
    'game.entities.boneTower'
)
.defines(function(){
    EntityZombie = EntityMonster.extend({
        animSheet: new ig.AnimationSheet('media/zombieSheet.png', 32, 32),
        health: 100,
        killTimer: null,
        
        init: function(x, y, settings){
            this.parent(x, y, settings);
            this.maxVel.x = 3;
            this.maxVel.y = 3;
            this.vel.x = 0;
            this.vel.y = 0;
            this.addAnim('shambling', 0.8, [0,1,2,3], false);
            this.addAnim('constructing', 0.8, [4,5,6,7], false);
            this.currentAnim.gotoRandomFrame();

            
            
        },
        update: function(){
            this.parent();
            var dx;
            var dy;
            var theta;
            var boneTower = ig.game.getEntitiesByType(EntityBoneTower)[0];
            if (boneTower.builtStatus < boneTower.maxBuiltStatus){
                var summonPoint = {x:boneTower.pos.x + boneTower.size.x/2,
                    y:boneTower.pos.y + boneTower.size.y*3/4  //of the tower.
                };
            var dx = summonPoint.x - this.pos.x;
            var dy = summonPoint.y - this.pos.y;
            var theta = Math.atan2(dy,dx);
            this.vel.x = this.maxVel.x * Math.cos(theta);
            this.vel.y = this.maxVel.y * Math.sin(theta);                
            }
            if (this.touches(boneTower)
                && this.vel.x != 0
                && this.vel.y != 0){
                    this.vel.x = 0;
                    this.vel.y = 0;
                    this.currentAnim = this.anims.constructing;
                }
            if (this.touches(boneTower)){
                boneTower.build(1);
            }
            if (this.killTimer && this.killTimer.delta() >=0){
                this.kill();
            }
        },
        kill: function(){
            //do something neat, like blow up with blood and guts, spawn
            //a particle entity with limited lifetime or something.
            var spray = ig.game.spawnEntity(EntityParticleGenerator, this.pos.x + this.size.x/2,
                                this.pos.y + this.size.y/2);
            spray.vel.x = this.vel.x;
            spray.vel.y = this.vel.y;
            this.deathTimer =  new ig.Timer(1);
            this.parent();
        }
        
});
});