export class Game extends Phaser.Scene 
{
	constructor()
	{
		super({ key: 'game' });
	}

	preload()
	{
		this.scene.start("Scene1");
		console.log("Change to scene 1");
	}

	create()
	{

	}

	update()
	{
		
	}
}





/*
var game = new Phaser.Game(config);

//scene = 1;


function CreateBackground()
{
	this.background = this.add.image(0,0, 'background').setOrigin(0,0);
	this.background.setScale(0.8,0.8);
}
////////////////////////////////////////////////////////////////////////
//Isaac
////////////////////////////////////////////////////////////////////////
function CreateIsaac()
{
	
	body = this.matter.add.sprite(0,0, 'head');
	body.setOrigin(0.5,0.5);
	body.speed = 5;
	//Life
	body.health = 2;
	body.maxHealth = body.health;
	
	body.x=config.width/2;
	body.y=config.height/2;
}

function LoseLive(player, lose)
{
	player.health -= lose;
	if(player.health <= 0)
	{
		player.destroy();
	}

	//enemyList.remove(enemyList.getLast(true), true, true);
} 


/*
var live = 5;
function PlayerLife(v)
{
	live = live - v;

	if(live == 0)
	{
		ChangeRoom2();
	}
	
}
function PlayerReduceLives(h)
{
	var hearts = 0;
	hearts = h
	PlayerLife(hearts)
	
}*/

/*
function ReduceEnemies(z)
{
	
}

var omega = 1;

function NoEnemies(x)
{
	omega = x;
	return omega
}
////////////////////////////////////////////////////////////////////////
//Cambiar las Habitaciones
////////////////////////////////////////////////////////////////////////
function ChangeRoom2() 
{
	//scene.start("Scene2");
	//this.scene.start("Scene2");
	console.log("Dead");
}

////////////////////////////////////////////////////////////////////////
//Tear
////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////
//Enemy
////////////////////////////////////////////////////////////////////////
function CreateEnemy(positionX, positionY)
{
	enemygroup = this.matter.world.nextGroup(true);
	enemy = this.matter.add.sprite(0,0, 'enemy');
	enemy.setOrigin(0.5,0.5);
	enemy.speed = 2;

	enemy.setCollisionGroup(enemygroup);
	enemy.x=positionX;
	enemy.y=positionY;

	enemy.delay = 0;

	//enemy = enemyList.create(0,0, 'enemy');
	//var enemyList = this.add.enemy();
	//enemy = enemyList.add(this);
	//enemyList.add(this) = enemy;
	//enemy.add.enemyList;
	enemyList.add(enemy);
}

function CreateOnlyEnemy(positionX, positionY)
{
	enemygroup = this.matter.world.nextGroup(true);
	enemy = this.matter.add.sprite(0,0, 'enemy');
	enemy.setOrigin(0.5,0.5);
	enemy.speed = 2;

	enemy.setCollisionGroup(enemygroup);
	enemy.x=positionX;
	enemy.y=positionY;

	enemy.delay = 0;

	//enemy = enemyList.create(0,0, 'enemy');
	//var enemyList = this.add.enemy();
	//enemy = enemyList.add(this);
	//enemyList.add(this) = enemy;
	//enemy.add.enemyList;
}

function CreateEnemyList() 
{
	//enemyList = game.matter.add.group();
	//enemyList = game.add.group();
	//enemyList = this.matter.add.group();
	//var enemyList = game.add.group();
	enemyList = this.add.group();
}

function MoveEnemy(enemy)
{
	enemy.delay++;
	if(enemy.delay >= 180)
	{
		enemy.delay = 0;
	}
	enemy.y+=enemy.speed/2;
}

function MoveEnemies()
{
	Phaser.Actions.Call(enemyList.getChildren(), MoveEnemy);
}
function MoveEnemyBullets()
{

}

function ShootEnemy()
{

}

function CallShot(enemyGun)
{

}

function destroyEnemy(e, s) 
{
	enemyList.remove(enemyList.getLast(true), true, true);
}

function CreateEnemyShot(EtankRotation)
{
	
}


function destroyGun(g, s)
{
	
}

////////////////////////////////////////////////////////////////////////
//movement keys
////////////////////////////////////////////////////////////////////////
function SetKeys()
{
	keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
	keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
	keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
	keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

	key1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
	key2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);

	keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
}

function treatClick(pointer)
{
	
}

////////////////////////////////////////////////////////////////////////
//Update
////////////////////////////////////////////////////////////////////////


var timer = 0;




////////////////////////////////////////////////////////////////////////
//Musica
////////////////////////////////////////////////////////////////////////
function StartMusic()
{
	this.BGM = this.sound.add("BGM");

	var MusicConfig = {
		mute: false,
		volume: 0.2,
		rate: 1,
		detune: 0,
		seek: 0,
		loop: true,
		delay: 0
	}
	this.BGM.play(MusicConfig);
}

function AddTeadSound()
{
	this.tear = this.sound.add("tearSFX");

}

function TearSound()
{
	var SFXConfig = {
	mute: false,
	volume: 4,
	rate: 1,
	detune: 0,
	seek: 0,
	loop: false,
	delay: 0
	}
	this.tear.play(SFXConfig);
}

*/