class Block {
    constructor(
        private size: number,
        private coords: p5.Vector,
        private color: p5.Color
    ){}

    draw(){
        fill(this.color);
        rect(this.coords.x, this.coords.y, this.size, this.size, 5);
    }
}