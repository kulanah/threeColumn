class component {
  constructor(originSide, height, centerPoint, y, focalLength){
    this.originSide = originSide;
    this.height = height;
    this.centerPoint = centerPoint;
    this.y = y;
    this.focalLength = focalLength;


    this.created = false;
    this.shape = new THREE.Geometry();

    if (this.originSide === 'left'){
      this.xOffSet = 0;
      this.oppSide = centerPoint * 2;
    } else {
      this.oppSide = 0;
      this.xOffSet = centerPoint * 2;
    }

    this.material = new THREE.LineBasicMaterial({color: 0xff37d8})
  };


  createLens(){
    //TODO: create lens stuff
    this.shape.vertices.push(this.xOffset, this.y);
    this.shape.vertices.push(this.centerPoint, this.focalLength);
    this.shape.vertices.push(this.centerPoint, this.focalLength);
    this.shape.vertices.push(this.oppSide, this.focalLength * 2);
    this.shape.vertices.push(this.oppSide, this.focalLength * 2);
    this.shape.vertices.push(this.oppSide, this.focalLength * 4);
    this.shape.vertices.push(this.oppSide, this.focalLength * 4);
    this.shape.vertices.push(this.xOffset, this.y);
    this.shape.vertices.push(this.xOffset, this.y);
    this.shape.vertices.push(this.xOffset, this.focalLength * 2);
    this.shape.vertices.push(this.xOffset, this.focalLength * 2);
    this.shape.vertices.push(this.centerPoint, this.focalLength * 3);
    this.shape.vertices.push(this.centerPoint, this.focalLength * 3);
    this.shape.vertices.push(this.oppSide, this.focalLength * 4);

    this.line = new THREE.Line(this.shape, this.material);
  }

  drawLens(scene){
    if (!this.created){
      this.createLens();
    } 
    scene.add(this.line);
  }
}