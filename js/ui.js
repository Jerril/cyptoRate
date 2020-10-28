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
			let items = cryptos.data;
			items.forEach(item => {
				const option = document.createElement('option');
				option.value = item.id;
				option.appendChild(document.createTextNode(item.name));

				// Append to the parent
				document.getElementById('cryptocurrency').appendChild(option);
			});			
		})
		.catch(error =>{
				console.log(error);
		});
	}

	displayResult(result, currency){
		// Read the currencyS
		let value = result.quote[currency].price;

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
					<p>The Price of ${result.name} from ${currency} is ${currencySymbol} ${value.toFixed(2)}</price>
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
