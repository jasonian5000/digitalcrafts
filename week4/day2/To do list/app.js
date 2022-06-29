const newItem = () => {
  const li = document.createElement("li");
  const doneBtn = document.createElement("button");
  const removeBtn = document.createElement("button")
  doneBtn.textContent = "✔" 
  removeBtn.textContent = "❌" 
  const inputText = document.getElementById("textBox").value;
  const listItem = document.createTextNode(inputText);
  
  li.appendChild(listItem);
  li.appendChild(doneBtn)
  li.appendChild(removeBtn)

  document.getElementById("todoList").appendChild(li);
};

const markComplete = () => {
    
}

const submitBtn = document.getElementById("submit");
const textBox = document.getElementById("textBox")

submitBtn.onclick = () => newItem();
textBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault()
        submitBtn.click()
    }
})
