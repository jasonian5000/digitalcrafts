// Add a Heading
// Select the h1 tag and set "Toppings" as the text of the heading.

// Add Class
// Select the list item 'burger'. Add a class of 'list-item'.

// Create and Append
// Create a new li element and append it to the list.



const heading = document.getElementById("heading")
const burger = document.getElementById("burger")
const list = document.getElementById("list")

heading.innerText = "Toppings"
burger.className = "list-item"
list.append(document.createElement("li"))
