var base = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=';
var symbol = 'AAPL';

var url;

var quote;

var price;

function setup() {
	createCanvas(windowWidth, windowHeight);
	url = base + symbol;
	loadJSON(url, getData);
}

function getData(data) {
	quote = data;
	console.log(quote);
}

function draw() {
	background(255);
	if (quote) {
		noStroke();
		textAlign(CENTER);
		textSize(height / 15);
		fill(100);
		text(quote.Name, width / 2, height / 8);
		textSize(height / 20);
		text(quote.Symbol, width / 2, height / 5);

		price = quote.LastPrice;

		map(price, quote.Low, quote.High, 0, width);

		strokeWeight(height / 10);
		stroke('red');
		line(0, height / 2, price, height / 2);

		strokeWeight(height / 10);
		stroke('green');
		line(width, height / 2, price, height / 2);

		noStroke();
		fill(255);
		ellipse(price, height / 2, height / 10, height / 10);

		noStroke();
		textAlign(CENTER);
		textSize(height / 35);
		fill(100);
		text("Current Price: " + "$" + quote.LastPrice, width / 2, height * 3 / 5);

		noStroke();
		textAlign(LEFT);
		textSize(height / 40);
		fill(100);
		text("Low: " + "$" + quote.Low, width/40, height * 3 / 5);
		
		noStroke();
		textAlign(RIGHT);
		textSize(height / 40);
		fill(100);
		text("High: " + "$" + quote.High, width*39/40, height * 3 / 5);
	}
}