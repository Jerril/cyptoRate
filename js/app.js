// Instantiate the classes
const cryptoAPI = new CryptoAPI();
const ui = new UI();

// Variables
const form = document.getElementById('form'),
	messageDiv = document.querySelector('.messages'),
	spinnerDiv = document.querySelector('.spinner');


// Eventlisteners
form.addEventListener('submit', e =>{
	e.preventDefault();

	// Read inputs
	currencySelect = document.getElementById('currency').value;
	cryptoSelect = document.getElementById('cryptocurrency').value;

	// Validate fields
	if(currencySelect === '' || cryptoSelect === ''){
		ui.printMessage("There was an error! All fields are mandatory", "deep-orange darken-4 card-panel");
	}else{
		cryptoAPI.queryAPI(currencySelect, cryptoSelect);
	}
});