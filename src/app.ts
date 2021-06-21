const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddress(event: Event) {
    event.preventDefault();

    const enteredAddress = addressInput.value;

    // send to google's api
    
}
form.addEventListener('submit', searchAddress);