class Wall{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("width",2);
    this.obj.setAttribute("height",2);
    this.obj.setAttribute("depth",2);
    this.obj.setAttribute("color","	#e4e6a8");
    this.obj.setAttribute("opacity",0.5);
    scene.append(this.obj);
  }
}