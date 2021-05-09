class Shape {
    public coords: p5.Vector;
    private blocks_list: Block[];

    constructor(
        private block_size: number,
        private type: string,
        private block_coords: p5.Vector[],
        private color: p5.Color
    ){
        this.blocks_list = this.createBlocksList();
    }

    private createBlocksList(){
        return this.block_coords.map( coords => new Block(this.block_size, coords, this.color));
    }

    draw(){
        translate(this.coords.x, this.coords.y);
        this.blocks_list.forEach(block => block.draw());
    }

    moveDown(){
        this.coords.y += this.block_size;
    }

}