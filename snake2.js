function Snake() {//constructs the snake
  this.x=100;//this refers to the Snake, or whatever is above it.
  this.y=100;//sets the default coordinates
  this.xspeed=1;//sets the initial directions (right)
  this.yspeed=0;//sets the initial direction when starting(not moving)
  this.total=0;//Global variable for score
  this.tail=[];


  this.dir = function(x,y) {//this moves the snake based on x and y
    this.xspeed = x;
    this.yspeed = y;
  }

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);//setting d to equal a distance in pixels
    if (d < 1) {
      this.total++;
      document.getElementById('score').innerHTML=this.total;
      eatSound.setVolume(0.5);
      eatSound.play();
      //music.play();
      return true;
    }
    else{
      return false;
    }
  }


  this.update = function() {//Moves the snake
    for (var i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1]; //Add 1 to tail of snake
    }
    if (this.total >= 1) { //If our score is greater than or equal to 1, append
      this.tail[this.total-1] = createVector(this.x, this.y); //Adding vectors to index positions based on total-1
    }
    this.x = this.x + this.xspeed*scl;//current position + currentspeed(20)
    this.y = this.y + this.yspeed*scl;
  }

  this.show = function() { //build a function called show, makes the snake visible
    var xx = random(255);
    var yy = random(255);
    var zz = random(255);
    fill(xx,yy,zz); //This is the snake color
    for (var i = 0; i<this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
      fill(xx,yy,zz);
    }
    rect(this.x, this.y, scl, scl); //This is the snake shape
  }

  this.death = function() {
    if ((this.tail.length === 0) && ((this.x===-20) || (this.x>599) || (this.y===-20) || (this.y>599))) {//If tail is zero as you touch the wall
      noLoop();
      this.total=0;
      this.tail=[];
      document.getElementById('score').innerHTML="GAME OVER"
      music.stop();
      deathSound.setVolume(1.0);
      deathSound.play();
    }
    for (var i = 0; i<this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x,this.y,pos.x,pos.y); //If distance between head and its tail is less than 1 pixel
      if ((d<1) || ((this.x<0) || (this.x>w-scl) || (this.y<0) || (this.y>h-scl))) {
        this.tail=[]; // Clear the tail array
        noLoop(); //Stops the function and loop (draw function)
        document.getElementById('score').innerHTML="GAME OVER"
        music.stop();
        deathSound.setVolume(1.0);
        deathSound.play();
      }
    }
  }
}
