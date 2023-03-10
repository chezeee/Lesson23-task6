const init = () => {
  const shoppingList = document.querySelector("#shopping-list");

  fetch(
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/shoppinglist/items.json"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Something went wrong...");
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((purchaseData) => {
        shoppingList.insertAdjacentHTML(
          "beforeend",
          `<li>${purchaseData.item}</li>`
        );
      });
    })
    .catch((error) => console.error(error));
};

// Sample usage - do not modify
init();
