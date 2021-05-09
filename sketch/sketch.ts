let board: Board;
function setup() {
  frameRate(5);

  //create a canvas to fill the content div from index.html
  const canvasContainer = select('#content');
  const size: {width?: number; height?: number} = {...canvasContainer.size()};
	var c = createCanvas(size.width, size.height);
	c.parent("content");

  board = new Board();

}

function draw() {  
  board.draw();  
}

