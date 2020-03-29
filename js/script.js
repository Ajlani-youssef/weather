/*let cloud = [document.getElementById("cloud1"),document.getElementById("cloud2")]
context.drawImage(cloud[0], 700, 60);
context.drawImage(cloud[1], 300, 60);
let movingCloud ;
movingCloud = setIntervalle(function(){
})*/
var couleur = [175,156,127,96,48] ;
var vitesse = 5;
var vent = 0 ;
var degree =0.2;
const myCanvas = document.getElementById("myCanvas");
let context = myCanvas.getContext("2d");
myCanvas.height = window.innerHeight;
myCanvas.width = window.innerWidth;
changer_back();
const rain = [] ;
function changer_back(){
	myCanvas.style = "background: radial-gradient(#246, #123); background: rgba("+couleur[(degree - 0.2) * 5] +","+couleur[(degree - 0.2) * 5] +","+couleur[(degree - 0.2) * 5]+","+degree+")";
}
class Goutte {
	constructor(height, width, startPositionX, startPositionY) {
    this.height = height;
    this.width = width;
    this.startPositionX = startPositionX;
    this.startPositionY = startPositionY;
    this.currentPositionY = startPositionY;
  }
  draw(){
  	context.moveTo(this.startPositionX,this.startPositionY);
  	context.lineTo(this.startPositionX + vent , this.currentPositionY + this.height);
  	context.strokeStyle = "rgba(4, 139, 154 , " + degree + ")";
    context.lineWidth = this.width;
    context.stroke();
    this.currentPositionY += vitesse;
    this.update();
	}
	update() {
    if (this.currentPositionY + this.height > myCanvas.height) {
      this.currentPositionY = 0;
    } else {
      this.currentPositionY += vitesse;
    }
      this.currentPositionX += vent;
      if (this.currentPositionX + this.width > myCanvas.width) {
      this.currentPositionX = 0;
    }
  }
}
for (let i = 0; i <1000 ; i++) {
  rain.push(new Goutte(
    Math.round(Math.random() * 20) + 10,
    Math.round(Math.random() * 20) / 10,
    Math.round(Math.random() * myCanvas.width),
    Math.round(Math.random() * myCanvas.height), 
  ))
}
function animate() {
  
  //context.clearRect(0, 0, myCanvas.width, myCanvas.height);
  context.lineJoin = "round";
  for(let i = 0; i < rain.length; i++) {
    rain[i].draw();
  }

}
var animation ;
animation = setInterval( animate() , 50 );
