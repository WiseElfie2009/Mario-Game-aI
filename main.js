img="";
noseX=0;
noseY=0;
mario_x=325;
mario_y=325;

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	mario_kick=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
	gameover=loadSound("gameover.wav");
	img=loadImage("mario05.jpg")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	video=createCapture(VIDEO);
	video.size(600,300);
	video.parent('game_console');
	video.let;

	posenet=ml5.poseNet(video,modelLoaded);
	posenet.on('pose',gotPoses);
	instializeInSetup(mario);
}

function modelLoaded(){
	console.log("(✿◡‿◡) Model Loaded (✿◡‿◡)");
}

function gotPoses(results){
	if(results.length>0){
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}

function draw() {
	game();
	//image(img,mario_x,mario_y,40,70);
}






