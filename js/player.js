export class Player extends Phaser.Scene 
{
    constructor(scene, h, map)
    {
        super({ key: 'Player' });

        this.scene = scene;
        this.scene.matter.add.sprite(0,0, 'head').setOrigin(0.5,0.5);
		//this.scene.matter.add.sprite(0,0, 'head');
		//this.Player.setOrigin(0.5,0.5);
        this.speed = 5;
        this.map = map;
        //Life
        this.health = h;
        this.maxHealth = this.health;
        
        this.x=  this.scene.matter.config.width/2;
        this.y=  this.scene.matter.config.height/2;

		/*
		keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
		keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
		keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
		keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);^
		*/

        this.keys = scene.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.UP,
            down: Phaser.Input.Keyboard.KeyCodes.DOWN,
            right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
            left: Phaser.Input.Keyboard.KeyCodes.LEFT,
            one: Phaser.Input.Keyboard.KeyCodes.ONE,
        });
    }

	/*
	SetKeys()
	{
	keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
	keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
	keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
	keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
	}
	*/

    update()
	{
		const speed = this.speed;

		if(this.keys.left.isDown)
		{
			this.x-= speed*1;
		}
		if(this.keys.right.isDown)
		{
			this.x+= speed*1;
		}
		if(this.keys.up.isDown)
		{
			this.y-= speed*1;
		}
		if(this.keys.down.isDown)
		{
			this.y+= speed*1;
		}
		/*
		if(keyA.isDown)
		{
			this.x-= speed;
		}
		if(keyD.isDown)
		{
			this.x+= speed;
		}
		if(keyW.isDown)
		{
			this.y-= speed;
		}
		if(keyS.isDown)
		{
			this.y+= speed;
		}
		*/
		if(this.keys.one.isDown)
		{
			//TearSound.call(this);
			console.log(this.health);
		}
		
	}
}