ig.module(
    'game.entities.player'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityPlayer = ig.Entity.extend({
    size: {x:32, y:32},
    collides: ig.Entity.COLLIDES.ACTIVE,
    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.addAnim('pulsing', 0.1, [0,1,2,3,3,3,3,2,1,0,0,0]);

    },
    
    update: function(){
        if (ig.input.state('up')){
            this.vel.y = -100;
        }
        else if (ig.input.state('down')){
            this.vel.y = 100;
        }
        else {
            this.vel.y = 0;
        }
        if (ig.input.state('right')){
            this.vel.x = 100;
        }
        else if (ig.input.state('left')){
            this.vel.x = -100;
        }
        else {
            this.vel.x = 0;
        }
        if (this.vel.x != 0 && this.vel.y != 0){ //prevent speed being > 100
            this.vel.x = this.vel.x * 0.707;
            this.vel.y = this.vel.y * 0.707;  
        }
        this.parent();
    }
});
});