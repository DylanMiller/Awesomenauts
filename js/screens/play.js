game.PlayScreen = me.ScreenObject.extend({
	/**
	 *  action to perform on state change
	 */
	onResetEvent: function() {
		// reset the score
		game.data.score = 0;
                //this will actually load the level instead of just sitting on the loading screen
                me.levelDirector.loadLevel("level01");
		// add our HUD to the game world
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
                
                var player = me.pool.pull("player", 0, 420, {});
                
                me.game.world.addChild(player, 5);
                
                me.input.bindKey(me.input.KEY.D, "right");
                me.input.bindKey(me.input.KEY.A, "left");
                me.input.bindKey(me.input.KEY.W, "jump");
                me.input.bindKey(me.input.KEY.SPACE, "attack");
	},


	/**
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
	}
});
