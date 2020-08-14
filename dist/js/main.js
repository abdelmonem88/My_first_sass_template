//nav toggle
const navToggler = document.querySelector('.nav-toggler');
const list = document.querySelector('.list');
const listContainer = document.querySelector('.list-container');
let containerHeight = listContainer.getBoundingClientRect().height;
let listHeight = list.getBoundingClientRect().height;

navToggler.addEventListener('click', () => {
	if (listContainer.style.height) {
		listContainer.style.height = null;
	} else {
		listContainer.style.height = `${listHeight}px`;
	}
});
