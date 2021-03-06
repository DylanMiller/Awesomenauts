game.PlayScreen = me.ScreenObject.extend({
	/**
	 *  action to perform on state change
	 */
	onResetEvent: function() {
            me.audio.playTrack("music");
            
		// reset the score
		game.data.score = 0;
                //this will actually load the level instead of just sitting on the loading screen
                me.levelDirector.loadLevel("level01");
		// add our HUD to the game world
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
                
                this.resetPlayer(0, 420);
                
                var gamemanager = me.pool.pull("GameManager", 0, 0, {});
                me.game.world.addChild(gamemanager, 0);
                
                me.input.bindKey(me.input.KEY.RIGHT, "right");
                me.input.bindKey(me.input.KEY.LEFT, "left");
                me.input.bindKey(me.input.KEY.UP, "jump");
                me.input.bindKey(me.input.KEY.A, "attack");
	},


	/**
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
            me.audio.stoptrack();
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
	},
        
        resetPlayer: function(x, y){
            game.data.player = me.pool.pull("player", x, y, {});
            me.game.world.addChild(game.data.player, 5);
        }
        
});
