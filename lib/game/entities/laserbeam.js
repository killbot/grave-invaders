ig.module(
    'game.entities.laserbeam'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityLaserbeam = ig.Entity.extend({
        size: {x:1, y:1},
        type: ig.Entity.TYPE.NONE,
        checkAgainst: ig.Entity.TYPE.B,
        collides: ig.Entity.COLLIDES.PASSIVE,
        init: function(x, y, settings){ //settings MUST have {x,y} for beamStart
            this.parent(x, y, settings);
            this.beamEnd = {x:x*ig.system.scale, y:y*ig.system.scale};
            this.beamStart = {x:settings.x*ig.system.scale, y:settings.y*ig.system.scale};
            this.age = 0;
            this.thickness = 0;
            this.lifetime = 2*ig.system.fps;    //lifetime in ticks.
            this.flashColor = "rgba(255, 255, 255, 1)";
            this.beamColor = "rgba(255, 50, 40, 1)";
            //this.flashColor = {r:255, g:255, b:255, a:1};
            //this.beamColor = {r:255, g:50, b:40, a:.2};
        },
        update: function(){
            this.parent();
            this.age++;
            if (this.age <= this.lifetime/2){  //gradual buildup of intensity
                this.thickness = 1 + (this.age/7.5)*(this.age/7.5); 
            }
            else {                              //sharp decrease in intensity
                this.thickness = 1/Math.sqrt(this.age/7.5);
            }
            if (this.age >= this.lifetime){
                this.kill();
            }
        },
        draw: function(){
            var context = ig.system.context;
            context.beginPath();
            context.lineCap = "round";
            context.moveTo(this.beamStart.x, this.beamStart.y);
            context.lineTo(this.beamEnd.x, this.beamEnd.y);
            context.strokeStyle = this.beamColor;
            context.lineWidth = this.thickness;
            context.stroke();
            
        },
        check: function(target){
            if (this.age == Math.floor(this.lifetime/2)){   //only do damage
                    target.receiveDamage(110, this);         //at a single tick.
            }
        }

        
    });
    
    
});