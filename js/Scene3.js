
/*
class Scene3 extends Phaser.Scene 
{
	constructor ()
    {
        super('Scene3');
    }


	preload()
	{
		this.load.image('tiles2', 'assets/tilemaps/Tileset4.png')
		this.load.tilemapTiledJSON("map2",'assets/tilemaps/Room2alter.json');
		//this.load.image('background', 'assets/sprites/Treasure_Room_3.png');
		this.load.image('head', 'assets/sprites/SatDown.png');
	}

	create()
	{
		const map = this.make.tilemap({ key: 'map2' , width: 5000, height: 5000});
		const tileset = map.addTilesetImage('Tileset4', 'tiles2');
		map.createLayer('Base', tileset, 0, 0);
		map.createLayer('Mix', tileset, 0, 0);
		map.createLayer('Obstacles', tileset, 0, 0);
		map.createLayer('Walls', tileset, 0, 0);
		map.createLayer('CloseDoor', tileset, 0, 0);
		map.createLayer('OpenDoor', tileset, 0, 0);
		//CreateBackground.call(this);
		CreateIsaac.call(this);
		SetKeys.call(this);	
		this.matter.world.setBounds(75, 75, config.width-155, config.height-155, 32, true, true, true, true);
		//var bodyAnim = body.animations.add('walk');

		//bodyAnim.animations.play('walk', 30, true);
	}

	update()
	{
		//this.BGM.play(MusicConfig);
		if(body.x == 400 && body.y == 100 && NoEnemies() <= 0)
		{
			ChangeRoom2.call(this);
		}
		if(keyA.isDown)
		{
			body.x-= body.speed;
		}
		if(keyD.isDown)
		{
			body.x+= body.speed;
		}
		if(keyW.isDown)
		{
			body.y-= body.speed;
		}
		if(keyS.isDown)
		{
			body.y+= body.speed;
		}

		if(key1.isDown)
		{
			TearSound.call(this);
			ReduceEnemies();
			LoseLive(body, 0.001)
			console.log(body.health);

		}
		if(key2.isDown)
		{
			this.scene.stop("Scene3");
			this.scene.start("Scene4");
			console.log("Change to scene 4");
		}
	}
};

*/