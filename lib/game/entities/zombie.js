ig.module(
    'game.entities.zombie'
)
.requires(
    'game.entities.monster'
)
.defines(function(){
    EntityZombie = EntityMonster.extend({
        animSheet: new ig.AnimationSheet('media/zombieSheet.png', 32, 32),
        init: function(x, y, settings){
            this.parent(x, y, settings);
            this.vel.x = -3;    //walk leftwardly
            this.addAnim('shambling', 0.8, [0,1,2,3], false);
            this.currentAnim.gotoRandomFrame();
        },
        update: function(){
            this.parent();   
        }
    
    });
    
    
});