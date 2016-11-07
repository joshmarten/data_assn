var base = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=';
var symbol = 'AAPL';

var url;

var quote;

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

}