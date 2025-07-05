// Get references to the elements
const addList = document.getElementById("add-button");
const inputText = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");

// Define the function
function addItem() {
    const inputValue = inputText.value.trim(); // remove spaces

    if (inputValue !== "") {
        //create new list item element
        const listItem = document.createElement("li"); // create <li>
        listItem.textContent = inputValue;             // set text

        //create a delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️"
        deleteBtn.classList.add("delete-btn");
    
        //Attach event listener to remove the item when clicked.
        deleteBtn.addEventListener("click",function () {
            const confirmDelete = confirm("Are you sure you want to delete the item?")
            if (confirmDelete) {
            listContainer.removeChild(listItem);
            alert("Item deleted.");
            }
        });

        //Add the delete button to the list item
        listItem.appendChild(deleteBtn);

        listContainer.appendChild(listItem);           // add to list
        inputText.value = "";                          // clear input
    } else {
        alert("Please enter a valid item.");
    }
}

// Add the event listener
addList.addEventListener("click", addItem);
