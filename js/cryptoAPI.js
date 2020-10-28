class CryptoAPI{

	// Query API
	async queryAPI(currency, cryptocurrency){
		// URL based on the currency and cryptocurrency selected

		const url = await fetch(`https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/tools/price-conversion?amount=1&id=${cryptocurrency}&convert=${currency}`, {
			method: 'GET',
			headers: {
				'X-CMC_PRO_API_KEY': 'f3148c4d-fd9d-4e5f-9bc4-71542cd9bcf7'
			}
		});

		// const url = await fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptocurrency}/?convert=${currency}`);
		const data = await url.json();

		// Display rate	
		ui.displayResult(data.data, currency);
	}

	// Get all the cryptocurrencies
	async getCryptocurrencies(){
		// Fetch the cryptocurrencies using API
		
		const url = await fetch('https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
			method: 'GET',
			headers: {
				'X-CMC_PRO_API_KEY': 'f3148c4d-fd9d-4e5f-9bc4-71542cd9bcf7'
			}
		});
		const data = await url.json();
		return data;
	}
}