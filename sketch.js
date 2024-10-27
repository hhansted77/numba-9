let player, spikes;
let floor, wallL, wallR, ceiling;
let sparkle;

let pscore = 0;
let tscore = 0;

function setup() {
	new Canvas(1000, 600);
	displayMode('centered');
	//world.gravity.y = 5;

	//sparkle = new Sprite(450, 250, 15);
	//sparkle.vel.y = 5;
	sparkle = new Group();
	sparkle.diameter = 10;
	sparkle.x = () => random(0, canvas.w);
	sparkle.y = () => random(0, canvas.h);
	sparkle.amount = 40;
	sparkle.color = 'white';
	sparkle.stroke = 'gold';

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

	player = new Sprite();
	player.diameter = 50;
	player.textSize = 30;
	player.text = "•⩊•"
	player.color = 'pink';

	player.overlaps(sparkle, collect);


	async function randomSequence() {
		let x = random(0, width);
		let y = random(0, height);
		await spikes.rotateTo(x, y, 9);
		await spikes.moveTo(x, y, 12);
		randomSequence();
	}

	
}

function collect(player, sparkle){
	sparkle.remove();
	pscore +=1;
	//new sparkle.Sprite(random(width), random(height));
}

function draw() {
	clear();
	background('skyblue');

	textSize(20);
	fill('pink');
	stroke('black');
	text('Player: ' + pscore, 70, 50);

	fill('green');
	text('Triangle: ' + tscore, 800, 50);
	
	//sparkle.attractTo(ball, 5);

	player.moveTowards(mouse, .04);


}




