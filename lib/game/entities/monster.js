ig.module(
    'game.entities.monster'
)
.requires(
    'impact.entity'
)
.defines(function(){
    
EntityMonster = ig.Entity.extend({
    size: {x:32, y:32},
    type: ig.Entity.TYPE.B,     //enemies get B type
    checkAgainst: ig.Entity.TYPE.A,
    collides: ig.Entity.COLLIDES.PASSIVE,
    myTarget: null,
    
    init: function(x, y, settings){
        this.parent(x, y, settings);

    },
    
    update: function(){
        this.parent();
    }

});

});