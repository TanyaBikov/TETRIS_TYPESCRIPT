var Block = (function () {
    function Block(size, coords, color) {
        this.size = size;
        this.coords = coords;
        this.color = color;
    }
    Block.prototype.draw = function () {
        fill(this.color);
        rect(this.coords.x, this.coords.y, this.size, this.size, 5);
    };
    return Block;
}());
var Board = (function () {
    function Board() {
        this.width = 390;
        this.height = 630;
        this.block_size = 30;
        this.shapes_list = new ShapesList(this.block_size);
        this.current_shape = this.shapes_list.randomShape();
    }
    Board.prototype.draw = function () {
        this.drawGrid();
        this.current_shape.draw();
        if (this.current_shape.coords.y < this.height) {
            this.current_shape.moveDown();
        }
        else {
            this.current_shape = this.shapes_list.randomShape();
        }
    };
    Board.prototype.drawGrid = function () {
        background(0);
        stroke(50);
        for (var i = this.block_size; i < this.width; i += this.block_size) {
            for (var j = this.block_size; j < this.height; j += this.block_size) {
                line(i, 0, i, this.height);
                line(0, j, this.width, j);
            }
        }
    };
    return Board;
}());
var Shape = (function () {
    function Shape(block_size, type, block_coords, color) {
        this.block_size = block_size;
        this.type = type;
        this.block_coords = block_coords;
        this.color = color;
        this.blocks_list = this.createBlocksList();
    }
    Shape.prototype.createBlocksList = function () {
        var _this = this;
        return this.block_coords.map(function (coords) { return new Block(_this.block_size, coords, _this.color); });
    };
    Shape.prototype.draw = function () {
        translate(this.coords.x, this.coords.y);
        this.blocks_list.forEach(function (block) { return block.draw(); });
    };
    Shape.prototype.moveDown = function () {
        this.coords.y += this.block_size;
    };
    return Shape;
}());
var ShapesList = (function () {
    function ShapesList(block_size) {
        this.block_size = block_size;
        this.shapes_list = this.createShapesPool();
    }
    ShapesList.prototype.createShapeTypes = function () {
        var size = this.block_size;
        return [
            {
                type: 'square',
                blocksCoords: [createVector(0, 0), createVector(0, -size), createVector(-size, -size), createVector(-size, 0)],
                color: color(255, 0, 0)
            },
            {
                type: 'tShape',
                blocksCoords: [createVector(0, 0), createVector(0, -size), createVector(-size, 0), createVector(size, 0)],
                color: color(0, 255, 0)
            },
            {
                type: 'line',
                blocksCoords: [createVector(-size, -size), createVector(-2 * size, -size), createVector(0, -size), createVector(size, -size)],
                color: color(0, 0, 255)
            },
            {
                type: 'lShape',
                blocksCoords: [createVector(0, 0), createVector(0, size), createVector(-size, -size), createVector(0, -size)],
                color: color(255, 255, 0)
            },
            {
                type: 'mirroredL',
                blocksCoords: [createVector(0, -size), createVector(-size, -size), createVector(-size, 0), createVector(-size, size)],
                color: color(0, 255, 255)
            },
            {
                type: 'zShape',
                blocksCoords: [createVector(0, 0), createVector(-size, 0), createVector(0, -size), createVector(-size, size)],
                color: color(255, 0, 255)
            },
            {
                type: 'sShape',
                blocksCoords: [createVector(0, 0), createVector(-size, 0), createVector(-size, -size), createVector(0, size)],
                color: color(0, 255, 255)
            }
        ];
    };
    ShapesList.prototype.createShapesPool = function () {
        var _this = this;
        var shapeTypes = this.createShapeTypes();
        return shapeTypes.map(function (shape) { return new Shape(_this.block_size, shape.type, shape.blocksCoords, shape.color); });
    };
    ShapesList.prototype.randomShape = function () {
        var shape = this.shapes_list[Math.floor(Math.random() * this.shapes_list.length)];
        shape.coords = createVector(Math.floor((Math.random() * 10) + 3) * this.block_size, this.block_size);
        return shape;
    };
    return ShapesList;
}());
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var board;
function setup() {
    frameRate(5);
    var canvasContainer = select('#content');
    var size = __assign({}, canvasContainer.size());
    var c = createCanvas(size.width, size.height);
    c.parent("content");
    board = new Board();
}
function draw() {
    board.draw();
}
//# sourceMappingURL=../sketch/sketch/build.js.map