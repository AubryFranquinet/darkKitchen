const chk = document.querySelector('.switch');

chk.addEventListener('change', () => {
	var element = document.body;
	element.classList.toggle("dark-mode");
});
