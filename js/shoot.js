export class Shoot extends Phaser.Scene 
{
    constructor(scene, x, y, sp, dmg)
    {
        super({ key: 'shoot' });

        this.x = x;
        this.y = y;
        this.scene = scene;
        this.speed = sp;
        this.damage = dmg;

        this.tearDelay = 0.3;
        this.time = 0;

        //KEYS
        /*
        this.keys = scene.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.UP,
            down: Phaser.Input.Keyboard.KeyCodes.DOWN,
            right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
            left: Phaser.Input.Keyboard.KeyCodes.LEFT,
        });
        */
    }

    tearshoot(dir)
    {
        var tear = new Tear(this.scene, this.x, this.y, this.speed, dir, this.damage);
        return tear;
    }

    update(time, delta)
    {
        this.x = this.scene.isaac.head.x;
        this.y = this.scene.isaac.head.y;

        const keys = this.keys;
        const tearDelay = this.tearDelay;

        if (keys.up.isDown || keys.down.isDown || keys.right.isDown || keys.left.isDown)
        {
            this.time = this.time + delta / 1000.0;
            if (this.time >= tearDelay)
            {
                this.time = 0;
                if (keys.up.isDown)
                {
                    return this.tearshoot(1);
                }
                else if (keys.down.isDown)
                {
                    return this.tearshoot(2);
                }
                else if (keys.right.isDown)
                {
                    return this.tearshoot(3);
                }
                else if (keys.left.isDown)
                {
                    return this.tearshoot(4);
                }
            }
        }
        return undefined;
    }
}