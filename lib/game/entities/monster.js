ig.module(
    'game.entities.monster'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityMonster = ig.Entity.extend({
    size: {x:32, y:32},
    collides: ig.Entity.COLLIDES.PASSIVE,

    
    init: function(x, y, settings){
        this.parent(x, y, settings);
    },
    
    update: function(){
        this.parent();
    }
});

});