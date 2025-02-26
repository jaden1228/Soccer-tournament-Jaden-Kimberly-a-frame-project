class Defense {
  constructor(position) {
    this.scene = document.querySelector('a-scene');
    this.box = document.createElement('a-cylinder');
    this.box.setAttribute('position', position); 
    this.box.setAttribute('radius', 0.5);
    this.box.setAttribute('color', 'blue'); 
    this.box.setAttribute('height','3');
    this.box.setAttribute('static-body', '');
    this.scene.appendChild(this.box);

    
    this.direction = 2; 
    this.speed = 0.75; 
  }

  
  moveSideToSide() {
    setInterval(() => {
      let position = this.box.getAttribute('position');
      position.z += this.speed * this.direction;
      this.box.setAttribute('position', position);

      
      if (position.z > 6.5 || position.z < -6.5) {
        this.direction *= -1;
      }
    }, 100); 
  }
}