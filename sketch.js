let ball, spikes;
let floor, wallL, wallR, ceiling;
let sparkle;

function setup() {
	new Canvas(1000, 600);
	displayMode('centered');
	//world.gravity.y = 5;

	ball = new Sprite();
	ball.diameter = 50;
	ball.textSize = 30;
	ball.text = "•⩊•"

	//sparkle = new Sprite(450, 250, 15);
	//sparkle.vel.y = 5;
	sparkle = new Group();
	sparkle.diameter = 10;
	sparkle.x = () => random(0, canvas.w);
	sparkle.y = () => random(0, canvas.h);
	sparkle.amount = 40;

	floor = new Sprite(500, 598, 1000, 5, 's');
	floor.color = 'skyblue';
	wallL = new Sprite(0, 300, 6, 600, 's');
	wallL.color = 'skyblue';
	wallR = new Sprite(1000, 300, 6, 600, 's');
	wallR.color = 'skyblue';
	ceiling = new Sprite(500, 2, 1000, 5, 's');
	ceiling.color = 'skyblue';

	spikes = new Turtle(30);
	randomSequence();


	async function randomSequence() {
		let x = random(0, width);
		let y = random(0, height);
		await spikes.rotateTo(x, y, 9);
		await spikes.moveTo(x, y, 12);
		randomSequence();
	}

	
}

function draw() {
	background('skyblue');

	//sparkle.attractTo(ball, 5);

	ball.moveTowards(mouse, .04);


}


