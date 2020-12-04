//Clase Walker
function Walker(x,y){
    this.x=x
    this.y=y
    
    //movement with the same probabilities in the 4 directions
    this.moveNormal=function(){
        var move=Math.floor(random(0, 4));

        if(move==0){
            this.x++;
        }else if(move==1){
            this.x--;
        }else if(move==2){
            this.y++;
        }else{
            this.y--;
        }

        //constrain to the size of canvas.
        this.x=constrain(this.x, 0, width-1);
        this.y=constrain(this.y, 0, height-1);
    }
    //movement with the different probabilities in the 4 directions
    this.moveProb=function(){
        var move=random(1);

        if(move<0.15){
            this.x++;
        }else if(move<0.4){
            this.x--;
        }else if(move<0.95){
            this.y++;
        }else{
            this.y--;
        }

        //constrain to the size of canvas.
        this.x=constrain(this.x, 0, width-1);
        this.y=constrain(this.y, 0, height-1);
    }
    //draw method
    this.draw=function () {
        stroke(0);
        point(this.x, this.y);
        
    }
}
//

//walker object
var walker={};
var setup = function(){
    createCanvas(500, 500);
    walker=new Walker(width/2,height/2);
    background(255, 255, 255);
}


var draw = function(){
    
    walker.moveNormal();
    //walker.moveProb();
    walker.draw();
    
}