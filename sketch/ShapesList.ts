class ShapesList {
    private shapes_list: Shape[];

    constructor(private block_size: number){
        this.shapes_list = this.createShapesPool();
    }

    private createShapeTypes(){
        const size = this.block_size;
        return [
            {
                type: 'square',
                blocksCoords: [createVector(0,0), createVector(0,-size), createVector(-size,-size), createVector(-size,0)],
                color: color(255,0,0)
            },
            {
                type: 'tShape',
                blocksCoords : [createVector(0,0), createVector(0, -size), createVector(-size,0), createVector(size,0)],
                color: color(0,255,0)
            },
            {
                type: 'line',
                blocksCoords: [createVector(-size,-size), createVector(-2*size, -size), createVector(0, -size), createVector(size, -size)],
                color: color(0, 0 ,255)
            },
            {
                type: 'lShape',
                blocksCoords: [createVector(0,0), createVector(0,size),createVector(-size, -size),createVector(0, -size)],
                color: color(255,255,0)
            },
            {
                type: 'mirroredL',
                blocksCoords: [createVector(0,-size), createVector(-size,-size),createVector(-size,0), createVector(-size,size)],
                color: color(0, 255, 255)
            },
            {
                type: 'zShape',
                blocksCoords: [createVector(0,0),createVector(-size,0), createVector(0,-size), createVector(-size,size)],
                color: color(255, 0, 255)
            },
            {
                type: 'sShape',
                blocksCoords: [createVector(0,0), createVector(-size,0),createVector(-size,-size), createVector(0,size)],
                color: color(0, 255, 255)
            }
        ]
    }

    private createShapesPool(){
        const shapeTypes = this.createShapeTypes();
        return shapeTypes.map( shape => new Shape(this.block_size, shape.type, shape.blocksCoords, shape.color));
    }

    randomShape(){
        const shape = this.shapes_list[Math.floor(Math.random()*this.shapes_list.length)];
        shape.coords = createVector(Math.floor((Math.random()*10)+3)*this.block_size, this.block_size);
        return shape;
    }
}