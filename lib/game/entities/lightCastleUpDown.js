ig.module(
    'game.entities.lightCastleUpDown'
)
.requires(
    'game.entities.building'
)
.defines(function(){
EntityLightCastleUpDown = EntityBuilding.extend({
    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.addAnim('stationary', 1, [0]);
    }

});
    
});