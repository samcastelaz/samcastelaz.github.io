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
		iphone: 'No one remembers the iHome. I mean HomePod. I mean AppleHome. I meanAirBud. I mean HomeBud.'
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
	}
];

var titles = [
	"Fight the power, one peel at a time!",
	"Orange you glad for this site?",
	"The site Johnny Appleseed does not want you to know about"
];

function generateQuote() {
	var ranNum = Math.floor(Math.random() * (quotes.length));
	var fact1 = document.getElementById('fact1Text');
	var fact2 = document.getElementById('fact2Text');
	var quote = quote[ranNum];
	fact1.innerHTML = quote.orange;
	fact2.innerHTML = quote.iphone;
}

function changeTitle() {
	var ranNum = Math.floor(Math.random() * (titles.length));
	var titleElement = document.getElementById('title');
	var title = titles[ranNum];
	titleElement.innerHTML = title;
}