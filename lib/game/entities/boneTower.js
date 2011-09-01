ig.module(
    'game.entities.boneTower'
)
.requires(
    'game.entities.building'
)
.defines(function(){
    EntityBoneTower = EntityBuilding.extend({
        animSheet: new ig.AnimationSheet('media/boneTowerSheet.png', 100, 160),
        size: {x:100, y:160},
        health: 1000,
        init: function(x, y, settings){
            this.parent(x, y, settings);
            this.builtStatus = 0;
            this.maxBuiltStatus = 10000;
            this.builtThreshholds = [];
            this.animListNames = [];
            this.addAnim('graveyard', 1, [0], true);
            this.addAnim('built1', 1, [1], true);
            this.addAnim('built2', 1, [2], true);
            this.addAnim('built3', 1, [3], true);
            this.numberOfAnimations = 4;   //MUST BE UPDATED IF MORE ANIMS ADDED
            this.threshholdStep = Math.floor(this.maxBuiltStatus/(this.numberOfAnimations-1));
            for (i=0; i<this.numberOfAnimations; i++){
                this.builtThreshholds.push(i*this.threshholdStep);
            }
        },
        update: function(){
            this.parent();
            //alert("animation name = "+this.builtThreshholds[4]);
        },
        addAnim: function(name, time, frames, end){
            this.animListNames.push(name);
            this.parent(name, time, frames, end);  
        },
        build: function(n){
            this.builtStatus += n;
            if (this.builtStatus > this.maxBuiltStatus){
                this.currentAnim = this.anims.built3;
            }
            else if (this.builtStatus > 6666){
                this.currentAnim = this.anims.built2;
            }
            else if (this.builtStatus > 3333){
                this.currentAnim = this.anims.built1
            }
            /*for (i = this.numberOfAnimations-1; i>=0; i--){
                if (this.builtStatus > this.builtThreshholds[i]){
                    var name = this.animListNames[i];
                    this.currentAnim = this.anim.(name);
                }
                
            }*/
        }
        

    
});    
    
});