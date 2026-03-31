// getElementById - returns single element
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// getElementsByClassName - returns HTMLCollection (live)
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName - returns HTMLCollection (live)
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector - returns first match
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// querySelectorAll - returns NodeList (static) select 
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);
 // task 1: select  the h1 element
const h1 = document.querySelector("h1");
console.log("Selected h1:", h1);

// task 2: select all elements with class "content"
const contentElements = document.querySelectorAll(".content");
console.log("Selected content elements:", contentElements);
// task 3: select the form with id "contact-form"
const contactForm = document.getElementById("contact-form");
console.log("Selected contact form:", contactForm);
// task 4: select the email input
const emailInput = document.querySelector('input[type="email"]');
console.log("Selected email input:", emailInput);
// task 5: select all list items in the nav
const navItems = document.querySelectorAll("nav li"); 
console.log("Selected nav items:", navItems);
// task 6: select the first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("Selected first .nav-link:", firstNavLink);

// task 7: select the last paragraph
const lastParagraph = document.querySelector("p:last-of-type");
console.log("Selected last paragraph:", lastParagraph);





// Practice: Select these elements
// 1. The h1 element    
// 2. All elements with class "content"
// 3. The form with id "contact-form"
// 4. The email input
// 5. All list items in the nav
// 6. The first .nav-link
// 7. The last paragraph
