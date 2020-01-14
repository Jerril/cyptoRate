class UI{
	constructor(){
		this.init();
	}

	init(){
		this.printCryptos();
	}

	// Print cryptocurrencies option
	printCryptos(){
		cryptoAPI.getCryptocurrencies()
		.then(cryptos => {
			// Insert each item
			cryptos.forEach(crypto => {
				const option = document.createElement('option');
				option.value = crypto.id;
				option.appendChild(document.createTextNode(crypto.name));

				// Append to the parent
				document.getElementById('cryptocurrency').appendChild(option);
			});			
		})
		.catch(error =>{
				console.log(error);
		});
	}

	displayResult(result, currency){
		// Read the currency
		let currencyName = 'price_'+currency.toLowerCase();
		let value = result[currencyName];

		// Remove previous results
		const prevResult = document.querySelector('#result > div');
		if(prevResult){
			prevResult.remove();
		}

		//get the currency symbol
		let currencySymbol = '';

		switch(currency){
			case 'USD': 
				currencySymbol = '&dollar;';
				break;
			case 'GBP': 
				currencySymbol = '&pound;';
				break;
			case 'EUR': 
				currencySymbol = '&euro;';
				break;
			case 'NGN': 
				currencySymbol = '&#8358;';
				break;
			case 'INR': 
				currencySymbol = '&#8360;';
				break;
		}


		// Create html template
		let HTMLTemplate = '';
		HTMLTemplate += `
			<div class="card cyan darken-3">
				<div class="card-content white-text">
					<span class="card-title">Result</span>
					<p>The Price of ${result.name} from ${currency} is ${currencySymbol} ${value}</price>
					<p>Last Hour: ${result.percent_change_1h} %</p>
					<p>Last Day: ${result.percent_change_24h} %</p>
					<p>Last 7 Days: ${result.percent_change_7d} %</p>
				</div>
			</div>
		`;

		// Display spinner
		this.showSpinner();

		setTimeout(()=>{
				// Delete spinner
				document.querySelector('.spinner img').remove();

				// Display result
				document.getElementById('result').innerHTML = HTMLTemplate;
		}, 3000);
	}

	// Display message
	printMessage(message, className){
		const div = document.createElement('div');
		div.className = className;
		div.appendChild(document.createTextNode(message));

		messageDiv.appendChild(div);

		setTimeout(()=>{
			document.querySelector('.messages div').remove();
		}, 3000);
	}

	// Show spinner
	showSpinner(){
		const spinner = document.createElement('img');
		spinner.src = 'img/spinner.gif';
		spinnerDiv.appendChild(spinner);
	}
}