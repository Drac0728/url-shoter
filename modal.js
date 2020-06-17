
// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');
const tooltip = document.querySelector('.tooltip')

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Copy
function copy(){
	const text = document.getElementById("copy-url");
	text.select();
  /* Copy the text inside the text field */
  document.execCommand("copy");
	tooltip.style.opacity='1';
}
