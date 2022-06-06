import { Player } from './player.js';
import { Sound } from './sound.js';

export class Scene1 extends Phaser.Scene 
{

	constructor ()
    {
		super({ key: 'Scene1' });
    }


	preload()
	{
		this.load.image('tiles', 'assets/tilemaps/Tileset4.png')
		this.load.tilemapTiledJSON("map",'assets/tilemaps/Room0alter.json');
		//this.load.image('background', 'assets/sprites/Treasure_Room_1.png');
		this.load.image('head', 'assets/sprites/SatDown.png');
		this.load.image('tear', 'assets/sprites/tear.png');

		this.load.audio("BGM", ["assets/audio/BGM.mp3", "assets/audio/BGM.ogg"]);

		this.load.audio("tearSFX", ["assets/audio/SFX/Tears_Fire_2.mp3"]);
		this.load.image('enemy', 'assets/sprites/Flies.png');
	}

	create()
	{
		const sound = new Sound(this);
		sound.StartMusic();
		const map = this.make.tilemap({ key: 'map' , width: 5000, height: 5000});
		const tileset = map.addTilesetImage('Tileset4', 'tiles');
		map.createLayer('Base', tileset, 0, 0);
		map.createLayer('Mix', tileset, 0, 0);
		map.createLayer('Obstacles', tileset, 0, 0);
		const wallsLayer = map.createLayer('Walls', tileset, 0, 0);
		map.createLayer('CloseDoor', tileset, 0, 0);
		map.createLayer('OpenDoor', tileset, 0, 0);
		this.isaac = new Player(this, 5, map);
		//this.add.overlap(enemyList, body, ChangeRoom2, null, this);
		//CreateBackground.call(this);
		//CreateIsaac.call(this);
		//SetKeys.call(this);	
		//ReduceEnemies.call(2);
		//StartMusic.call(this);
		//CreateEnemyList.call(this);
		//CreateEnemy.call(this, 400, 65);
		//AddTeadSound.call(this);
		//var group1 = this.matter.world.nextGroup(true);
		
		this.matter.add.world.setBounds(this.isaac, wallsLayer);
		//wallsLayer.setCollisionBetween(38,40);
		wallsLayer.setCollisionBetween(200,500);
		//this.physics.add.collider(this.Player, wallsLayer);

		//body.setCollisionGroup(group1);
		//teargroup = this.matter.world.nextGroup(true);
	    //this.matter.world.setBounds(75, 75, config.width-155, config.height-155, 32, true, true, true, true);
	    //this.matter.world.setBounds(87, 87, config.width-255, config.height-255, 32, true, true, true, true);
		//var bodyAnim = body.animations.add('walk');

		//bodyAnim.animations.play('walk', 30, true);
		
	}
	
	update()
	{
		this.isaac.update();
		/*this.BGM.play(MusicConfig);
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
			this.scene.stop("Scene1");
			this.scene.start("Scene2");
			console.log("Change to scene 2");
		}
		//console.log(tank.angle);

		//MoveEnemies.call(this);

		//MoveBullets.call(this);
		*/
	}
};