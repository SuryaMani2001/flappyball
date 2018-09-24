function Pipe(){
this.topy = floor(random(350));
this.x = 600;
this.vel= 1.5;
this.gap = 150;

this.show = function(){
	rect(this.x,0,35,this.topy);
	rect(this.x,this.topy+this.gap,35,480-this.topy)

}
this.update = function(){
	this.x -=this.vel;
}
}