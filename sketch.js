var h = 1080;
var w = 1920;
var scl = 1;

var sun;
var planet;


var planets = [];


var rSun;


var rPlan;
var dPlan;
var vPlan;


var timestep = 0.01;

function setup() {
  createCanvas(w * scl, h * scl, WEBGL);
  translate(width / 2, height / 2);

  rSun = height * 0.1;

  dPlan = 400.0;
  rPlan = rSun * 0.2 * random(0.5,1.5)
  vPlan = TWO_PI / 500;

  sun = new Planet(rSun, 0, 0, true);

  angleMode(RADIANS)

  createPlanets(8);
}







function draw() {
  background(40);
  sun.show();
  pointLight(255,255,255,0,0,0)

  orbitControl();


  for (let i = 0; i < planets.length; i++) {
  //  push();
    planets[i].update();
    planets[i].show();
   //  pop();

  }

}



function createPlanets(num) {
  let offset = 200;
  let d = dPlan;
  let v = vPlan;

  for (let i = 0; i < num; i++) {
    let r = rPlan * random(0.1,0.4);

    planets[i] = new Planet(rPlan, d, v, false);
    d = d + offset;
    //v = v /2;

    v = v * 0.9;

    //offset = offset *2;
    //offset = offset + offset;
  }


}
