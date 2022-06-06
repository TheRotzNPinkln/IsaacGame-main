export class Movement extends Phaser.Scene
{
    constructor(scene, speed, dir, object)
    {
        super({ key: 'movement' });

        this.scene = scene;
        this.speed = speed;
        this.direction = dir;
        this.object = object;
    }

    update(time, delta)
    {
        const speed = this.speed;


        if(this.direction == 1)
        {
            this.object.setVelocityY(-1 * speed);
        }
        else if(this.direction == 2)
        {
            this.object.setVelocityY(1 * speed);
        }
        else if(this.direction == 3)
        {
            this.object.setVelocityX(1 * speed);
        }
        else if(this.direction == 4)
        {
            this.object.setVelocityX(-1 * speed);
        }
    }
}