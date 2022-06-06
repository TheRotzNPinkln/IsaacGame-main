export class Sound extends Phaser.Scene 
{
    constructor(scene)
    {
        super({ key: 'Sound' });

        this.scene = scene;
        
    }

    StartMusic()
    {
        this.BGM = this.scene.sound.add("BGM");

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

    AddTeadSound()
    {
        this.tear = this.sound.add("tearSFX");

    }

    TearSound()
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

}