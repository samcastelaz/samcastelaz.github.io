var quotes = [
	'Eat an orange and you can get protection from scurvy.<br/>Eat an iPhone and you can get internal bleeding.',
	'Your orange gets hacked, you get a knife in your orange.<br/>Your iPhone gets hacked, you get your face stolen',
	'Everyone remembers what an orange is.<br/>No one remembers the iHome. I mean HomePod. I mean AppleHome. I mean HomeBud.',
	'Walk around with oranges in your ears and everyone thinks you\'re crazy.<br/>Work around with AirPods and everything thinks you\'re crazy and stuipd',
	'An orange a day keeps scurvy away.<br/>An iPhone a day keeps finical security away.'
]

function generateQuote() {
	var ranNum = Math.floor(Math.random() * (quotes.length));
	var text = document.getElementById('quoteText');
	var quote = quotes[ranNum];
	text.innerHTML = quote;
}