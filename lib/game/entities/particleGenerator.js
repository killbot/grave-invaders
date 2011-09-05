//This is a particle generator.  EntityParticleGenerator makes EntityParticles
//

ig.module(
    'game.entities.particleGenerator'
)
.requires(
    'impact.entity'
)
.defines(function(){
EntityParticleGenerator =  ig.Entity.extend({
    collides: ig.Entity.COLLIDES.NEVER,
    size: {x:20, y:20},
    theta: {t1:-1.45, t2:-1.6},    //angles the generator sweeps through
    angleSweep: null,
    density: 1,                    //how dense the particle generation
    lifetime: 1,                   //in Seconds.
    particleMaxSpeed: 10,
    lifeClock: null,
    
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.lifeClock = new ig.Timer(this.lifetime);
        this.angleSweep = this.theta.t2 - this.theta.t1;
    },
    
    update: function(){
        if (this.lifeClock && this.lifeClock.delta() >= 0){
            this.kill();
        }
        for (i=0; i<this.density; i++){
            var tempDirection = Math.random()*this.angleSweep + this.theta.t1;
            var tempSpeed = Math.random()*this.particleMaxSpeed;
            //alert("particle generator location = "+this.pos.x+", "+this.pos.y);
            ig.game.spawnEntity(EntityParticle, this.pos.x, this.pos.y,
                                        {direction:tempDirection,
                                        speed:tempSpeed
                                        });
        }
    }
   
   
    
});

EntityParticle = ig.Entity.extend({ //Basic particle class.  Default is a 1x1
                                    //pixel.  Can subclass or make larger.
    size: {x:3, y:3},
    maxVel: {x:20, y:20},
    lifetime: 2,
    lifeClock: null,
    colorStart: {r:255, g:0, b:0, a:1},
    colorCurrent: null,
    colorEnd: {r:255, g:0, b:0, a:0},
    colorStep: {r:0, g:0, b:0, a:0}, //amount each color changes per tick
    gravityFactor: 1,
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.lifeClock = new ig.Timer(this.lifetime);
        this.colorStep.r = this.getColorStep(this.colorStart.r, this.colorEnd.r);
        this.colorStep.g = this.getColorStep(this.colorStart.g, this.colorEnd.g);
        this.colorStep.b = this.getColorStep(this.colorStart.b, this.colorEnd.b);
        this.colorStep.a = this.getColorStep(this.colorStart.a, this.colorEnd.a);
        this.colorCurrent = this.colorStart;
        var direction = settings.direction;
        var speed = settings.speed;
        this.vel.x = this.maxVel.x * settings.speed * Math.cos(settings.direction);
        this.vel.y = this.maxVel.y * settings.speed * Math.sin(settings.direction);
        //alert("spawning particle at "+this.pos.x+", "+this.pos.y);
    },
    
    update: function(){
        if (this.lifeClock && this.lifeClock.delta() >= 0){
            this.kill();
        }
        this.colorCurrent.r += this.colorStep.r;
        this.colorCurrent.g += this.colorStep.g;
        this.colorCurrent.b += this.colorStep.b;
        this.colorCurrent.a += this.colorStep.a;
        //for (var member in this.colorCurrent){
        //    member = this.checkColorBounds(member);            
        //}
        this.colorCurrent.r = this.checkColorBounds(this.colorCurrent.r);
        this.colorCurrent.g = this.checkColorBounds(this.colorCurrent.g);
        this.colorCurrent.b = this.checkColorBounds(this.colorCurrent.b);
        this.colorCurrent.a = this.checkColorBounds(this.colorCurrent.a);

        this.parent();
    },
    
    draw: function(){
        var context = ig.system.context;
        var drawPos = {x:this.pos.x, y:this.pos.y };
        drawPos.x *= ig.system.scale;
        drawPos.y *= ig.system.scale;
        
        //context.fillStyle = this.colorCurrent;
        context.fillStyle = "rgba("+this.colorCurrent.r+", "
                                    +this.colorCurrent.g+", "
                                    +this.colorCurrent.b+", "
                                    +this.colorCurrent.a+")";
        //alert("particle drawn at = "+drawPos.x+", "+drawPos.y);
        context.fillRect(drawPos.x, drawPos.y, this.size.x, this.size.y);
        //context.fillRect(100, 200, this.size.x, this.size.y);
    },
    
    getColorStep: function(color1, color2){
        var ticks = this.lifetime*ig.system.fps;
        //alert("color 2, color1, ticks = "+color2+", "+color1+", "+ticks);
        //alert("alpha value = "+(1-0)/60);
        return ((color2-color1)/ticks);
    },
    
    checkColorBounds: function(color){
        //checks to make sure rounding errors didn't take the colors out of bounds
        if (color<0) { return 0; alert("color less than 0");}
        else if (color>255) {return 255; alert("color greater than 255");}
        else {return color;}
    }
    

}); 

});