ig.module(
    'game.entities.monsterGenerator'
)
.requires(
    'game.entities.monster',
    'game.entities.wisp',
    'game.entities.zombie'
)
.defines(function(){
EntityMonsterGenerator = ig.Entity.extend({
    frequency: 2,
    spawnTimer: null,
    monsterTypes: ['EntityZombie', 'EntityWisp'],
    
    _wmDrawBox: true,
    _wmBoxColor: 'rgba(255, 0, 0, 0.5)',
    _wmScalable: true,
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.spawnTimer = new ig.Timer(this.frequency);
    },
    
    update: function(){
        if (this.spawnTimer && this.spawnTimer.delta() >= 0){
            alert("timer elapsed");
            this.makeMonster();
            this.spawnTimer.reset();
        }
    },
    makeMonster: function(){
        alert("inside making monster");
        var monsterIndex = Math.floor(Math.random()*(this.monsterTypes.length));
        var x = Math.random()*this.size.x + this.pos.x;
        var y = Math.random()*this.size.y + this.pos.y;
        ig.game.spawnEntity(this.monsterTypes[monsterIndex], x, y);
    }
    
}); 
});