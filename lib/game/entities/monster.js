ig.module(
    'game.entities.monster'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityMonster = ig.Entity.extend({
    size: {x:32, y:40},
    collides: ig.Entity.COLLIDES.ACTIVE,
    
    animSheet: new ig.AnimationSheet( 'media/ghost1.png', 32, 40),
    
    init: function(x, y, settings){
        this.addAnim( 'floating', 0.3, [0,1] );
        this.parent(x, y, settings);
        
        
        
    },
    
    update: function(){
        if( ig.input.state('up')){
            this.vel.y = -100;
        }
        else if (ig.input.state('down')){
            this.vel.y = 100;   
        }
        else{
            this.vel.y = 0;
        }
        if (ig.input.state('left')){
            this.vel.x = -100;
        }
        else if (ig.input.state('right')){
            this.vel.x = 100;
        }
        else {
            this.vel.y = 0;
            this.vel.x = 0;
        }
    }
});

});