game.resources = [

	/* Graphics. 
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
        //adding the tile images so i can use them in the map
        {name: "background-tiles", type:"image", src: "data/img/background-tiles.png"},
        {name: "meta-tiles", type:"image", src: "data/img/meta-tiles.png"},
        //adding a player
        {name: "player", type:"image", src: "data/img/orcSpear.png"},
        {name: "tower", type:"image", src: "data/img/tower_round.svg.png"},
         {name: "creep1", type:"image", src: "data/img/brainmonster.png"},
         {name: "title-screen", type:"image", src: "data/img/title.png"},
	/* Atlases 
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
		
	/* Maps. 
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
 	 */
        //adding the map
        {name: "level01", type: "tmx", src: "data/map/test.tmx"},
	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/"},
	 */	
        {name: "music", type: "audio", src: "data/bgm/"}
	/* Sound effects. 
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/"}
	 */
];
