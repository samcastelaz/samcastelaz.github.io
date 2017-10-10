var first = [
	'Eat an orange and you can get protection from scurvy.',
	'Your orange gets hacked, you get a knife in your orange.',
	'Everyone remembers what an orange is.',
	'Walk around with oranges in your ears and everyone thinks you\'re crazy.',
	'An orange a day keeps scurvy away.',
	'For $999 you can buy approximately 2559 oranges.',
	'An orange requires no charging to be of use.'
]

var second = [
	'Eat an iPhone and you can get internal bleeding.',
	'Your iPhone gets hacked, you get your face stolen.',
	'No one remembers the iHome. I mean HomePod. I mean AppleHome. I meanAirBud. I mean HomeBud.',
	'Walk around with AirPods and everyone thinks you\'re crazy, dumb, and poor.',
	'An iPhone a day keeps financial security away.',
	'For $999 you can buy approximately 1 iPhone.',
	'An iPhone requires a different way of charging it every year.'
]

var titles = [
	"Fight the power, one peel at a time!",
	"Orange you glad for this site?",
	"The site Johnny Appleseed does not want you to know about"
]

function generateQuote() {
	var ranNum = Math.floor(Math.random() * (first.length));
	var fact1 = document.getElementById('fact1Text');
	var fact2 = document.getElementById('fact2Text');
	var one = first[ranNum];
	var two = second[ranNum];
	fact1.innerHTML = one;
	fact2.innerHTML = two;
}

function changeTitle() {
	var ranNum = Math.floor(Math.random() * (titles.length));
	var titleElement = document.getElementById('title');
	var title = titles[ranNum];
	titleElement.innerHTML = title;
}