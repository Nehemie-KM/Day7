document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".item").forEach((lol) => {
    lol.querySelector(".plus-btn").addEventListener("click", function () {
      updateQuantity(lol, 1);
    });
    lol.querySelector(".minus-btn").addEventListener("click", function () {
      updateQuantity(lol, -1);
    });
    lol.querySelector(".delete-btn").addEventListener("click", function () {
      lol.remove();
    });
    lol.querySelector(".like-btn").addEventListener("click", function () {
      lol.querySelector(".like-btn").classList.toggle("is-active");
    });
  });

  function updateQuantity(lol, change) {
    const quantityInput = lol.querySelector('input[type="text"]');
    let newq = Math.max(1, parseInt(quantityInput.value) + change);
    quantityInput.value = newq;
    const price = parseFloat(
      lol.querySelector(".total-price").textContent.replace("$", "")
    );
    lol.querySelector(".total-price").textContent = `$${(
      price * newQuantity
    ).toFixed(2)}`;
  }
});
