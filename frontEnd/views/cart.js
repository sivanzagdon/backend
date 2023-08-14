// Get a reference to the remove button element
const removeBtn = document.getElementById("remove-btn");

// Add a click event listener to the remove button
removeBtn.addEventListener("click", function () {
    // Find the parent row of the clicked remove button
    const row = removeBtn.parentNode.parentNode;

    // Remove the entire row from the table
    row.parentNode.removeChild(row);
});



document.addEventListener("DOMContentLoaded", () => {
  const addToCartForms = document.querySelectorAll(".card-button");
  addToCartForms.forEach((form) => {
    form.addEventListener("click", handleAddToCart);
  });
});

function handleAddToCart(event) {
  const button = event.target;
  const card = button.closest(".card");
  const product = card.querySelector(".text-title").textContent;
  const weightInput = card.querySelector(".card-input input");
  const weight = weightInput.value;

  const cartItem = {
    product: product,
    weight: weight,
  };

  fetch("/add-to-cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartItem),
  })
    .then((response) => {
      if (response.ok) {
        alert("Item added to cart successfully");
      } else {
        alert("Error adding item to cart");
      }
    })
    .catch((error) => {
      console.error("Error adding item to cart:", error);
    });
}
  

