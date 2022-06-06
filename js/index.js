import { Game } from './game.js';
import { Scene1 } from './Scene1.js';
import { Movement } from './move.js';
import { Shoot } from './shoot.js';
import { Tear } from './tear.js';
import { Sound } from './sound.js';
import { Player } from './player.js';

const config = 
{
	type: Phaser.AUTO,
	width: 830,
	height: 520,
	physics: {
		default: 'matter',
		matter: {
			debug:true,
			gravity: {y: 0}
		}
	},
	scene:[ Game, Scene1, Movement, Shoot, Tear], 
}

var game = new Phaser.Game(config);

