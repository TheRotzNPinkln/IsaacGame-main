/*

class Scene2 extends Phaser.Scene 
{
	constructor ()
    {
        super("Scene2");
    }

	preload()
	{
		this.load.image('tiles1', 'assets/tilemaps/Tileset4.png')
		this.load.tilemapTiledJSON("map1",'assets/tilemaps/Room1alter.json');
		//this.load.image('background', 'assets/sprites/Treasure_Room_3.png');
		this.load.image('head', 'assets/sprites/SatDown.png');
		this.load.image('enemy', 'assets/sprites/Flies.png');
	}

	create()
	{
		const map = this.make.tilemap({ key: 'map1' , width: 5000, height: 5000});
		const tileset = map.addTilesetImage('Tileset4', 'tiles1');
		map.createLayer('Base', tileset, 0, 0);
		map.createLayer('Mix', tileset, 0, 0);
		map.createLayer('Obstacles', tileset, 0, 0);
		map.createLayer('Walls', tileset, 0, 0);
		map.createLayer('CloseDoor', tileset, 0, 0);
		map.createLayer('OpenDoor', tileset, 0, 0);
		//CreateBackground.call(this);
		CreateIsaac.call(this);
		CreateEnemyList.call(this);
		CreateEnemy.call(this, 300, 200);
		//CreateEnemyList.call(this);
		CreateEnemy.call(this, 400, 200);
		CreateEnemy.call(this, 500, 200);
		CreateEnemy.call(this, 600, 200);
		SetKeys.call(this);	
	    
	    this.matter.world.setBounds(75, 75, config.width-155, config.height-155, 32, true, true, true, true);
		//var bodyAnim = body.animations.add('walk');

		//bodyAnim.animations.play('walk', 30, true);
	}


	update()
	{
		
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
			destroyEnemy(1,2);

		}
		if(key2.isDown)
		{
			this.scene.stop("Scene2");
			this.scene.start("Scene3");
			console.log("Change to scene 3");
		}
		MoveEnemies.call(this);

		//console.log(tank.angle);

		//MoveEnemies.call(this);

		//MoveBullets.call(this);
	}
};

*/