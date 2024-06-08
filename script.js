// Different Ways of select or Target the HTML Elems

// Using Class or Id attribute 
let elem_one = document.getElementById("one");
// output :->  <h2 id="one">We're happy you've</h2>
let elem_two = document.getElementsByClassName("main-header")

// Using query selectors
let elem_three = document.querySelector(".main-div")
/*<div class="main-div">
  <h1 class="main-header">
    Welcome aboard, we're thrilled to have you here!
  </h1>
  <h2 id="one">We're happy you've</h2>
  <h2 id="two">Let's make great things happen together</h2>
  <h2 id="three">We hope you feel right at home</h2>
  <ul>
    <li>One</li>
    <li>Three</li>
    <li>Two</li>
    <li>Four</li>
  </ul>
</div> */
let elem_four = document.querySelector("#one")
// output : <h2 id="one">We're happy you've</h2>
let elem_five = document.querySelector("li")
// output : <li>One</li> return first li elm
let elem_six = document.querySelector("input[type='text']")
// output : <input type="text" value="Naveen">

let elem_seven = document.querySelectorAll("li")
// output : NodeList {0: HTMLLIElement, 1: HTMLLIElement, 2: HTMLLIElement, 3: HTMLLIElement} it returns NodeList of all li elems, here NodeList is kind of array but not Array. to access this we need to use only forEach()


// Accessing or works the DOM selected Elms
let elem_six_val = elem_six.value;
// output : Naveen
elem_seven.forEach((el) => {
  // console.log(el)
})
// output : <li>One</li> <li>Three</li> <li>Two</li> <li>Four</li>
const elemtextOne = elem_four.innerText;
// output : We're happy you've
const elemtextTwo = elem_four.textContent;
// output : We're happy you've
const elemtextThree = elem_four.innerHTML;
// output : We're happy you've

// Adding Style to targeted elms
elem_four.style.backgroundColor = "green"
elem_four.style.color = "white"
elem_four.style.borderRadius = "15px"
// Adding or retrieving attributes to elms
const attrOne = elem_four.getAttribute("class")
const attrTwo = elem_four.setAttribute("className", "header")

// Traversing btw nested Elems
const parentElm = document.querySelector(".parent");
const childElm = document.querySelector("#days")
// Parent to children traversing
const chldElms = parentElm.children;
// output : HTMLCollection {0: HTMLHeadingElement, 1: HTMLDivElement, 2: HTMLDivElement, 3: HTMLDivElement, 4: HTMLDivElement} Returns all chidren in the form of HtmlCollection.
const firstChldElm = parentElm.firstElementChild;
// output : <h2>Days in a Week</h2>
const lastChldEln = parentElm.lastElementChild;
// output : <div id="days">Thrusday</div>

//  children to parent traversing
const chldParent = childElm.parentElement;
//output :  <div class="parent">
//   <h2>Days in a Week</h2>
//   <div id="days">Monday</div>
//   <div id="days">Tuesday</div>
//   <div id="days">wednesday</div>
//   <div id="days">Thrusday</div>
// </div>
const siblingElms = childElm.nextElementSibling;
// output : <div id="days">Tuesday</div>
const nodeList = parentElm.childNodes;
// output : NodeList {0: Text, 1: HTMLHeadingElement, 2: Text, 3: HTMLDivElement, 4: Text, …} returns all Nodes from parent includes line braks extra space etc..


// Creation of Elements and properties
const mainBody = document.querySelector("body")
const newDiv = document.createElement("div");
newDiv.className = "div-one";
newDiv.id = "divOne"
// output: <div class="div-one" id="divOne"></div>
newDiv.setAttribute("title", "code In kannada")
newDiv.style.backgroundColor = "lightBlue";
newDiv.style.border = "2px solid red"
newDiv.innerText = "This div created using JS DOM Operations"
// output:<div class="div-one" id="divOne" title="code In kannada" style="background-color: lightblue; border: 2px solid red;">This div created using JS DOM Operations</div>
const newText = document.createTextNode("Learned By Code In Kannada Youtube channel.")
// Appending the Elems 
newDiv.appendChild(newText)
// To display all the above we need to append div elm to main HTML Doc
mainBody.appendChild(newDiv)

// Edit and Removal of ELms 
const liElm = document.querySelector("li:nth-child(2)");
// liElm.replaceWith(document.createElement("li").textContent = "3")
// console.log(liElm)
liElm.remove()