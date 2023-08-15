/*点击图片换图*/
const myImg = document.querySelector("img");

myImg.onclick = () => {
  const mySrc = myImg.getAttribute("src");
  if (mySrc === "./img/fox.png") {
    myImg.setAttribute("src", "./img/fox copy.png");
  } else {
    myImg.setAttribute("src", "./img/fox.png");
  }
};

/*点开页面问候*/
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

setUserName();

myButton.onclick = () => {
  setUserName();
};
