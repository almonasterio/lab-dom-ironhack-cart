// ITERATION 1

function updateSubtotal(product) {
  for (product of product) {
    const price = +product.querySelector('.price span').innerHTML;
    const quantity = +product.querySelector('.quantity input').value;
    let subtotal = price * quantity
    product.querySelector('.subtotal span').innerHTML = subtotal

  }


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const productArr = document.getElementsByClassName("product")
  updateSubtotal(productArr)
  // ITERATION 3
  const pricesArr = document.querySelectorAll(".subtotal span")
  let totalPrice = 0
  for (price of pricesArr) {
    totalPrice += +price.innerHTML
  };
  console.log(totalPrice)
  let totalEl = document.querySelector("#total-value span")
  totalEl.innerText = totalPrice
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  targetProductRow = target.parentNode.parentNode
  targetProductRow.parentElement.removeChild(targetProductRow)
  console.log('The target in remove is:', targetProductRow);
  calculateAll()


  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productParent = document.querySelector('.product').parentElement
  const newProductName = document.querySelector(".create-product .new-name").value;
  const newProductPrice = document.querySelector(".create-product .new-price").value;
  const newProductRow = productParent.insertRow(document.querySelectorAll('.product').length);
  newProductRow.classList.add("product")

  newProductRow.innerHTML = `<td class="name"><span>${newProductName}</span></td><td class="price">$<span>${newProductPrice}</span></td><td class="quantity"><input type="number" value="10" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>1</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>`;
  newProductRow.lastChild.lastChild.addEventListener('click', removeProduct)

  console.log(newProductRow.lastChild)

  calculateAll()
}

window.addEventListener('load', () => {
  calculateAll()
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const deleteButtonsArr = document.querySelectorAll('.btn-remove');
  deleteButtonsArr.forEach(deleteBtn => deleteBtn.addEventListener('click', removeProduct))

  const createButton = document.getElementById("create")
  createButton.addEventListener('click', createProduct)

});