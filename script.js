// your code here

const urlEle = document.getElementById("url");
const nameFieldEle = document.getElementById("name");
const yearFieldEle = document.getElementById("year");
const btn = document.getElementById("button");

btn.addEventListener("click", (e) => {
	e.preventDefault();
	const name = nameFieldEle.value;
	const year = yearFieldEle.value;

	const URL = "https://localhost:8080/";
	
	let finalStr = URL + "?";
	if(name !== "") {
		finalStr += "name=" + name;
	}

	if(year !== "") {
		if(name !== "") finalStr += "&";
		finalStr += "year=" + year;
	}

	urlEle.innerText = "";
	urlEle.innerText = finalStr;
});