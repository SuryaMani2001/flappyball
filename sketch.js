
function setup()
{

		createCanvas(640,480);

		frameRate(60);

		this.bird = new Bird();
		this.score =0;
		this.gamestate = false;
		this.pipes = [];

		this.relaventpipes =[];
		this.first = new Pipe(); 
		this.pipes.push(new Pipe());
		this.relaventpipes.push(new Pipe());

}

function keyPressed() 
{

		this.gamestate = true;
		console.log("GOING UP");
		bird.goUP();

}


function draw()
{

		if(this.gamestate)
		{

						fill(255,255,255);
						this.current= new Pipe();  

								if(frameCount%200 ==0)
								{
										 pipes.push(this.current);
										 relaventpipes.push(this.current);
								}

						bird.update();

								for(i=0;i<pipes.length;i++)
								{
								
										pipes[i].update();

								}

								for(i=0;i<relaventpipes.length;i++)
								{

										relaventpipes[i].update();

								}

						background(0,0,0);

						bird.show();
								
								for(i=0;i<pipes.length;i++)
								{
										
										pipes[i].show();
								
								}

						textSize(32);
						text('Score:', 400, 30);

						this.score = floor(frameCount/10);
						text(this.score, 500, 30);


		}
		else
		{ 
						background(0,0,0);

						textSize(100);
						fill(255,255,255);

						text('Flappy Ball', 85, 100);
						textSize(20);

						text("\"I'm not proud of this\" - Surya", 210, 150);
						text("Score:  "+this.score,300, 200);


						text('Press Space to begin', 225, 400);


}

}









