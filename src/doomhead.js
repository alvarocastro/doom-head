const DoomHead = function (elementId = 'doomhead', {
		health = 100,
		size = 32,
		antialias = false,
		refreshRate = 700,
		spriteSheetSrc = 'https://alvarocastro.github.io/doom-head/doomguy.png'
	} = {}) {
	const originalSize = 32,
		container = document.getElementById(elementId),
		canvas = document.createElement('canvas');
	let context,
		sprites;

	this.size = size;
	this.zoom = size / originalSize;
	this.canvas = canvas;

	canvas.width = size;
	canvas.height = size;
	container.appendChild(canvas);

	context = canvas.getContext('2d');
	context.imageSmoothingEnabled = antialias;

	this.context = context;

	sprites = new Image();
	sprites.src = spriteSheetSrc;
	sprites.onload = () => {
		this.tick();
	};
	this.sprites = sprites;
	this.spriteWidth = 24;
	this.health = health;
	this.refreshRate = refreshRate;
};

DoomHead.prototype = {
	r: function (max) {
		return Math.floor(Math.random() * max);
	},

	calcStatus: function (health) {
		/*
			0	100
			1	99	80
			2	79	60
			3	59	40
			4	39	20
			5	19	1
			6	0
		*/

		if (health > 100) {
			return 0;
		} else if (health <= 0) {
			return 6;
		}

		return health === 100 ? 1 : Math.ceil(5 - health / 20);
	},

	calcFrames: function (status) {
		const initialFrame = 1 + (status - 1) * 3;

		if (status === 0) {
			return [0, 0, 0];
		}

		if (status === 6) {
			return [16, 16, 16];
		}

		return [initialFrame, initialFrame + 1, initialFrame + 2];
	},

	calcState: function () {
		return this.r(2) ? 0 : 1 + this.r(2);
	},

	setSprite: function (sprite) {
		this.context.fillRect(0, 0, this.size, this.size);
		this.context.drawImage(this.sprites, this.spriteWidth * sprite, 0, 24, 31, 4 * this.zoom, 1 * this.zoom, 24 * this.zoom, 31 * this.zoom);
	},

	tick: function () {
		const state = this.calcState(),
			status = this.calcStatus(this.health),
			sprites = this.calcFrames(status);

		this.setSprite(sprites[state]);

		setTimeout(() => {
			this.tick();
		}, this.refreshRate);
	}
};
