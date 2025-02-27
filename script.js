let t = 101;
let scene
let time;
let rnd = (l, u) => Math.random() * (u - l) + l;
let puppet = { template: "#Puppet", scale: 0.5, speed: 0.02 }
let Peter = { template: "#peter", scale: 0.5, speed: 0.02 }
let foxy = { template: "#funtime", charge: "Funtime_Foxy--Haywire", scale: 1, speed: 0.02 }
let models = [puppet, Peter, foxy]
let players = [ ]
let playerNum = 5

window.onload = function() {
  time = document.getElementById("time");
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  button.onclick = function(){
    this.components.sound.playSound();
  }

  const box = new MovingBox({x: -52.25, y: 1, z: 0 });
  box.moveSideToSide();
  
  for (let i = 0; i < playerNum; i++){
    const boxes = new Defense({x: rnd(-50,-35), y:1, z:rnd(20,-15)});
    players.push(boxes);
    boxes.moveSideToSide();
  }
  setTimeout(loopTimer,1000);
  setTimeout(loop,1000);
  
  for (let i = 0; i < 6; i++) {
    let x = rnd(-20, 20);
    let z = rnd(-20, 20);
    let r = Math.floor(rnd(0, models.length));
    //Models.push(new Animatronic(x, 0, z, models[r]));
  }
}
function loopTimer(){
t--;
time.setAttribute("value",`Your Time: ${t}`);
setTimeout(loopTimer,1000);
}
function loop() {

  for (let model of Models) {
    let d = distance(model.obj, camera);
    if (3 < d && d < 6) {
      model.rotateTowards(camera);
      model.forward()
    }
  }
  window.requestAnimationFrame(loop);
}

function distance(obj1, obj2) {
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2));
  return d;
}

