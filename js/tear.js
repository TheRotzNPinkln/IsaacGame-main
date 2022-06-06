export class Tear extends Phaser.Scene
{
    constructor(scene, x, y, sp, dir, dmg)
    {
        super({ key: 'tear' });

        this.scene = scene;
        this.speed = sp;
        this.damage = dmg;
        this.direction = dir;
        
        /*
        //  SPRITE
        this.tear = scene.physics.add.sprite(x, y, 'tear_isaac').setSize(5, 5).setOffset(13,13);

        this.tear.move = new Move(this.scene, this.speed, this.direction, this.tear);

        this.tear.scene = this.scene;
        */
    }
    
}