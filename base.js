function getRandomNumber(leftBound, rightBound) {
	return Math.floor(Math.random() * (rightBound - leftBound + 1)) + leftBound;
}

function drawPoint(context, x, y) {
	context.fillRect(x, y, 1, 1);
}

function drawLine(context, x1, y1, x2, y2) {
	context.line(x1, y1, x2, y2);
}

function getCentroid(point1, point2, point3) {
	let x = (point1.x + point2.x + point3.x) / 3;
	let y = (point1.y + point2.y + point3.y) / 3;
	return new Point(x, y);
}

function getHexagonRandomLine(coordinates) {
	let pointIndex = getRandomNumber(0, coordinates.length - 1);
	let point = coordinates[pointIndex];
	let neighbourPointIndex;
	let randomNumber = getRandomNumber(0, 1);
	if (randomNumber === 0) {  // left
		if (pointIndex === 0) {
			neighbourPointIndex = coordinates.length - 1;
		} else {
			neighbourPointIndex = pointIndex - 1;
		}
	} else {  // right
		if (pointIndex === coordinates.length - 1) {
			neighbourPointIndex = 0;
		} else {
			neighbourPointIndex = pointIndex + 1;
		}
	}
	let neighbourPoint = coordinates[neighbourPointIndex];
	return new Line(point, neighbourPoint);
}

function drawCoordinatesLines(coordinates) {
	
}

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Line {
	constructor(point1, point2) {
		this.point1 = point1;
		this.point2 = point2;
	}
}

class Hexagon {
	constructor(radius) {
		this.radius = radius;
	}

	getCoordinates(xCenter=0, yCenter=0) {
		let coordinates = [];
		let absCoordX = Math.round(this.radius / 2);
		let absCoordY = Math.round(Math.sqrt(3) * this.radius / 2);
		coordinates.push(new Point(this.radius + xCenter, yCenter));
		coordinates.push(new Point(absCoordX + xCenter, -absCoordY + yCenter));
		coordinates.push(new Point(-absCoordX + xCenter, -absCoordY + yCenter));
		coordinates.push(new Point(-this.radius + xCenter, yCenter));
		coordinates.push(new Point(-absCoordX + xCenter, absCoordY + yCenter));
		coordinates.push(new Point(absCoordX + xCenter, absCoordY + yCenter));
		return coordinates;
	}
}

class FractalCanvas {
	constructor(context, MAX_X, MAX_Y) {
		this.context = context;
		this.MAX_X = MAX_X;
		this.MAX_Y = MAX_Y;
	}

	setCanvasSizes() {
		this.context.canvas.width = MAX_X;
		this.context.canvas.height = MAX_Y;
	}

	drawPoint(point) {
		drawPoint(this.context, point.x, point.y);
	}

	get randomPoint() {
		return new Point(getRandomNumber(0, this.MAX_X), getRandomNumber(0, this.MAX_Y));
	}

	setColor(color) {
		if (color) {
			let oldColor = this.context.fillStyle;
			this.context.fillStyle = color;
			return oldColor;
		}
	}

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
