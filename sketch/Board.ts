class Board{

    private width: number;
    private height: number;
    private block_size: number;
    private shapes_list: ShapesList;
    private current_shape: Shape;

    constructor(){
        this.width = 390;
        this.height = 630;
        this.block_size = 30;
        this.shapes_list = new ShapesList(this.block_size);
        this.current_shape = this.shapes_list.randomShape();
    }

    draw(){
        this.drawGrid();
        this.current_shape.draw();
        if(this.current_shape.coords.y < this.height){
            this.current_shape.moveDown();
        }else{
            this.current_shape = this.shapes_list.randomShape();
        }
    }
    
    private drawGrid(){
        background(0);
        stroke(50);
        for(var i= this.block_size; i < this.width; i+=this.block_size){
            for(var j=this.block_size; j < this.height; j+=this.block_size){
                line(i, 0, i, this.height);
                line(0, j, this.width, j);
            }
        }
    }   
    
    
}