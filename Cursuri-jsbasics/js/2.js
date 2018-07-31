// Change h1 document
var h1 = document.querySelector('h1');
h1.innerText = 'JS DOM Manipulation NEW'; // as string
console.log("H1 text", h1.innerText);
h1.innerHtml = 'JS DOM Manipulation <em>NEW</em>'; // as HTML
console.log("H1 html", h1.innerHtml);

// Manipulate attribute
var h2 = document.querySelector('h2');
h2.setAttribute("title", "Comments list"); // set attribute
console.log('Get attribute', h2.getAttribute('title'));
h2.id = "comment-list-id"; // set id attribute
console.log("comments list id", h2.id);

var commentsContainer = document.getElementById("comments-list");
commentsContainer.style.border = "dotted 3px #66ad4d";
//
// var commSt = document.querySelector('section');
// commSt.style.border = "dashed 3px #4d70be";
//
// var commSt2 = document.getElementsByClassName('comment-item')[1];
// commSt2.style.border = "groove 3px #8426a1";

var p3 = document.getElementsByClassName('comment-item');
for (var i = 0; i < p3.length; i++) {
p3[i].style.border = "double 3px #e7740a";
}

//Add new dom elements
var commentItem = document.createElement("section");
commentItem.className = "comment-item";
commentItem.innerHtml = "<h1>New comment</h1>" + "<p>New comment content <strong>author</strong></p>";
commentsContainer.appendChild(commentItem);
