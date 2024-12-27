document.querySelector('.menu').addEventListener('click', () => {
	document.querySelectorAll('.target').forEach((item) => {
		item.classList.toggle('change');
	})
})

const icons = document.querySelectorAll('.section-1-icons i');
let i = 0; // Start with the first icon (zero-based index)

setInterval(() => {
    // Remove 'change' class from the current icon
    icons[i].classList.remove('change');

    // Increment index and loop back to 0 if needed
    i = (i + 1) % icons.length;

    // Add 'change' class to the next icon
    icons[i].classList.add('change');
}, 4000);
