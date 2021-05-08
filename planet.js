class Planet {
  constructor(R_, d_, v_, isSun_) {
    this.R = R_;
    this.d = d_; // Abstand von Sonne bei (0,0,0)
    this.isSun = isSun_;
    this.v = v_;

    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.theta = 0;

    this.brightness = random(0, 255);

    this.phi = random(TWO_PI); // Startwinkel des Planeten
    if (this.isSun === false) {

      this.phis = [];

    }


  }

  angle2coordinates() {
    this.x = this.d * sin(this.theta) * cos(this.phi);
    this.y = this.d * sin(this.theta) * sin(this.phi);
    this.z = this.d * cos(this.theta);
  }






  show() {
    if (this.isSun) {
      //noFill();
      //stroke(20,2)
      //fill(243, 159, 24);
      //sphere(this.R);
      stroke(50,200);
      fill(200)
      sphere(this.R / 2);


    } else {

      push();



      this.angle2coordinates()

      rotateY(this.phi);
      translate(this.x, this.y, this.z);


      fill(this.brightness);
      noStroke();
      //stroke(255)
      sphere(this.R);
      pop();
      this.phis.push(this.phi);
      //  console.log(this.phis)

    }
    if (this.isSun === false) {
      this.trail();
      if(this.phis.length > 500*this.d/dPlan){
        this.phis.splice(0,1);
      }

    }





  }









  update() {

    if (this.isSun === false) {
      this.phi = this.phi + this.v;
    }



  }


  trail() {
    push();
    //rotateY(this.phi);
    rotateX(PI / 2)
    //translate(this.d, 0,0);
    //scale(1,0.5)
    beginShape()
    for (let i = 0; i < this.phis.length; i++) {

      noFill()
      stroke(255, 30);
      this.x = this.d * sin(this.phis[i]); //*cos(this.thetas[i]);
      this.y = this.d * cos(this.phis[i]); //*sin(this.thetas[i]);
      //this.z = this.d * cos(this.phis[i]);
      this.z = 0;
      vertex(this.x, this.y, this.z);


    }
    endShape();

    pop();
  }


}
