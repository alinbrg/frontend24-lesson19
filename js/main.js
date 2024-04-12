const colors = ["red", "green", "blue", "yellow", "pink", "purple"];
const randomColor = () => {
	return colors[Math.floor(Math.random() * colors.length)];
};

const section = document.querySelector("#test");
// const section2 = document.getElementById('test');
const paragraphs = document.querySelectorAll("p");
const secondP = document.querySelector("p:nth-of-type(2)");
const button = section.querySelector("button");

console.log(section);
const divElement = document.createElement("div");
divElement.innerHTML = "<img class='img' src='test' alt='test' />";
// divElement.innerText = "<img src='test' alt='test' />";
// divElement.style.backgroundColor = "green";
// divElement.style.borderColor = "darkblue";
// divElement.style.minHeight = "300px";

divElement.classList.add("card");
divElement.classList.add("card2");
// divElement.classList.toggle("card");
// divElement.classList.remove("card");

// section.appendChild(divElement);

button.insertAdjacentElement("beforebegin", divElement);
// divElement.remove()

function buttonClickFn(event) {
	event.stopPropagation();
	console.log("button clicked", event);

	// divElement.classList.toggle("card");
	divElement.style.backgroundColor = randomColor();
}

function renderCharacters(characters) {
	return characters
		.map(
			(char) => `
      <div>
         <button>remove </button>
        <img class="img" src="${char.image}" alt="${char.name}">
      </div>`
		)
		.join("");
}

// button.addEventListener("click", (event) => {
// 	event.stopPropagation();
// 	console.log("button clicked", event);
// });

const aTag = document.querySelector("a");

aTag.addEventListener("click", (event) => {
	event.preventDefault();

	// if (true) {
	// 	console.log("a tag clicked", event);
	// 	window.location.href = "google.com";
	// } else {
	// 	console.log("a tag clicked else", event);
	// }
});
// section.addEventListener("click", (event) => {
// 	console.log("section clicked", event);
// });

button.addEventListener("click", buttonClickFn);
const renderBtn = document.querySelector(".render-characters");

renderBtn.addEventListener(
	"click",
	() => {
		console.log("render characters");

		document.querySelector(".charachters-list").innerHTML =
			renderCharacters(characters);

		// const button = document.querySelectorAll(".img");
	},
	{ once: true }
);
