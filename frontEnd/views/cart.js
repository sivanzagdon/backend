// Get a reference to the remove button element
const removeBtn = document.getElementById("remove-btn");

// Add a click event listener to the remove button
removeBtn.addEventListener("click", function () {
    // Find the parent row of the clicked remove button
    const row = removeBtn.parentNode.parentNode;

    // Remove the entire row from the table
    row.parentNode.removeChild(row);
});
