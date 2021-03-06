var quotes = [
	{
		orange: 'Eat an orange and you can get protection from scurvy.',
		iphone: 'Eat an iPhone and you can get internal bleeding.'
	},
	{
		orange: 'Your orange gets hacked, you get a knife in your orange.',
		iphone: 'Your iPhone gets hacked, you get your face stolen.'
	},
	{
		orange: 'Everyone remembers what an orange is.',
		iphone: 'No one remembers the iHome. I mean HomePod. I mean AppleHome. I mean AirBud. I mean HomeBud.'
	},
	{
		orange: 'Walk around with oranges in your ears and everyone thinks you\'re crazy.',
		iphone: 'Walk around with AirPods and everyone thinks you\'re crazy, dumb, and poor.'
	},
	{
		orange: 'An orange a day keeps scurvy away.',
		iphone: 'An iPhone a day keeps financial security away.'
	},
	{
		orange: 'For $999 you can buy approximately 2559 oranges.',
		iphone: 'For $999 you can buy approximately 1 iPhone.'
	},
	{
		orange: 'An orange requires no charging to be of use.',
		iphone: 'An iPhone requires a different way of charging it every year.'
	},
	{
		orange: 'An orange is a modified berry.',
		iphone: 'An iPhone is a modified Blackberry.'
	},
	{
		orange: 'Juice an orange and you get orange juice.',
		iphone: 'Juice an iPhone and you get a broken juicer and broken iPhone.'
	},
	{
		orange: 'Oranges have stood the test of time.',
		iphone: 'Macs become obsolete after one year.'
	}
];

var viewedTitles = [];

var titles = [
	"Fight the power, one peel at a time!",
	"Orange you glad for this site?",
	"The site Johnny Appleseed does not want you to know about"
];

function generateQuote() {
	var ranNum = Math.floor(Math.random() * (quotes.length));
	var fact1 = document.getElementById('fact1Text');
	var fact2 = document.getElementById('fact2Text');
	var quote = quotes[ranNum];
	fact1.innerHTML = quote.orange;
	fact2.innerHTML = quote.iphone;
}

function changeTitle() {
	var ranNum = Math.floor(Math.random() * (titles.length));
	var titleElement = document.getElementById('title');
	var title = titles[ranNum];
	var splicedTitle = titles.splice(ranNum, 1);
	viewedTitles.push(splicedTitle);
    if (titles.length == 0) {
      titles.push.apply(titles, viewedTitles);
      viewedTitles = [];
      var splicedTitle = titles.splice(ranNum, 1);
	  	viewedTitles.push(splicedTitle);
    }
	titleElement.innerHTML = title;
}

function setup() {
	this.changeTitle()
	this.generateQuote()
}

window.onload = setup