ig.module(
    'game.entities.wisp'
)
.requires(
    'game.entities.monster',
    'game.entities.buildingLight'
    
)
.defines(function(){
EntityWisp = EntityMonster.extend({
    animSheet: new ig.AnimationSheet('media/wispSheet.png', 32, 32),
    health: 300,
    maxVel: {x:16, y:16},
    vel: {x:1, y:1},
    myTarget: null,
    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.addAnim('moving', 0.3, [0,1,2,3,3,2,1,0]);

        
    },
    update: function(){
        this.parent();
        if (!this.myTarget){
            this.findTarget();
        }
        else if (this.myTarget.health <=0){
            this.findTarget();
        }
    },
    findTarget: function(){
        var targetList = ig.game.getEntitiesByType(EntityBuildingLight);
        if (targetList.length <= 0){    //target not found.
            this.vel.x = 0;
            this.vel.y = 0;
            //alert("target not found");
        }
        else{                           //target found and randomly picked
            var random = Math.floor(Math.random()*targetList.length);
            this.myTarget = targetList[random];
            var dx = this.myTarget.pos.x + this.myTarget.size.x/2
                    - this.pos.x - this.size.x/2;
            var dy = this.myTarget.pos.y + this.myTarget.size.y/2
                    - this.pos.y - this.size.y/2;
            var theta = Math.atan2(dy, dx);
            this.vel.x = this.maxVel.x * Math.cos(theta);
            this.vel.y = this.maxVel.y * Math.sin(theta);
        }
    },
    check: function(otherEntity){
        this.vel.x = 0;
        this.vel.y = 0;
        otherEntity.receiveDamage(1, this);
    }
    
}); 
});