game.PlayerEntity = me.Entity.extend({
    init: function( x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "player",
                width: 64,
                height: 64,
                spritewidth: "64",
                spriteheight: "64",
                getShape: function(){
                    return(new me.Rect( 0, 0, 64, 64)).toPolygon();
                }
        }]);
        this.body.setVelocity(5, 20);
        
        this.renderable.addAnimation("idle", [78]);
        this.renderable.addAnimation("walk", [117, 118, 119, 120, 121, 122, 123, 124, 125], 80);
        this.renderable.addAnimation("attack", [66, 67, 68, 69, 70, 71, 72], 80)
        this.renderable.setCurrentAnimation("idle");
    },
    update: function(delta){
        if(me.input.isKeyPressed("right")) {
            //sets the position of x with maths
            this.body.vel.x += this.body.accel.x * me.timer.tick;
            this.flipX(true);
        }else{
            this.body.vel.x = 0;
        
      }
      
      
      if(this.body.vel.x !== 0){
        if(!this.renderable.isCurrentAnimation("walk")) {
            this.renderable.setCurrentAnimation("walk");
        }
    }else {
            this.renderable.setCurrentAnimation("idle"); 
        }
        if(me.input.isKeyPressed("attack")){
        if(!this.renderable.isCurrentAnimation("attack")){
            console.log(this.renderable.isCurrentAnimation("attack"));
            this.renderable.setCurrentAnimation("attack", "idle");
            this.renderable.setAnimationFrame();
        }
      }
        
            this.body.update(delta);
            
            
            this._super(me.Entity, "update", [delta]);
            return true;
            
            
            
            
            if(me.input.isKeyPressed("left")) {
            //sets the position of x with maths
            this.body.vel.x -= this.body.accel.x / me.timer.tick;
        }
    }
        
      
    
});

game.PlayerBaseEntity = me.entity.extend({
    init function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, (
            image: "tower",
            width: 100,
            height: 100,
            spritewidth: "100",
            spriteheight: "100",
            getShape: function() {
                return (new.me.Rect(0, 0, 100, 100)).toPolygon();
            }
        )]);
        this.broken = false;
        this.health = 10;
        this.alwaysUpdate = true;
    },
    update:function() {
        
    }
});