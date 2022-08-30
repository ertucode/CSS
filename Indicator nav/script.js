const circle = document.querySelector(".circle");
const circleWidth = circle.getBoundingClientRect().width;

const activeElem = document.querySelector(".active");

moveCircle(activeElem);

[...document.querySelectorAll("li")].forEach((li) => {
	li.addEventListener("click", () => {
		if (li.classList.contains("active")) {
			return;
		}

		const activeLi = document.querySelector("li.active");
		activeLi.classList.remove("active");
		li.classList.add("active");

		moveCircle(li);
	});
});

function moveCircle(activeElem) {
	const rect = activeElem.getBoundingClientRect();
	circle.style.transform = `translateX(${
		rect.left + rect.width / 2 - circleWidth / 2
	}px) translateY(-50%)`;
}
