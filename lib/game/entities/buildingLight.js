ig.module(
    'game.entities.buildingLight'
)
.requires(
    'game.entities.building'
)
.defines(function(){
    EntityBuildingLight = EntityBuilding.extend({
        type: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.FIXED,
        size: {x:32, y:32},
        health: 200,
        animSheet: new ig.AnimationSheet('media/castlesSheet.png', 32, 32),
        init: function(x, y, settings){
            this.parent(x, y, settings);
            
        },
        update: function(){
            this.parent();
        }
    
    
    });
    
    
});