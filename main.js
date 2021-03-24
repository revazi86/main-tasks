var inputProduct = document.getElementById('input_product')
var inputPrice = document.getElementById('input_price')
var addButton = document.getElementById('btn_add')
var totalButton = document.getElementById('btn_total')
var productList = document.getElementById('product_list')
var totalResult = document.getElementById('total_result')

var allProducts = []

var renderAllProducts = function() {
    productList.innerHTML = ' '
    allProducts.forEach(function(product) {
        var productLi = document.createElement('li')
        productLi.innerText = 'Product: ' + product.title + '  ' + 'Price: ' + product.price
        productList.appendChild(productLi)
    })
    inputProduct.value = ' '
    inputPrice.value = ' '
}

function addProduct() {
    var inputValueProduct = inputProduct.value
    var inputValuePrice = inputPrice.value
    var inputValueAll = { title: inputValueProduct, price: inputValuePrice }
    allProducts.push(inputValueAll)
    renderAllProducts()
}

addButton.addEventListener('click', addProduct)

function renderTotalPrice() {
    var totalPrice = 0;

    allProducts.forEach(function(product) {
        totalPrice += parseInt(product.price)
    })
    totalResult.innerText = 'Total Price: ' + totalPrice
}

totalButton.addEventListener('click', renderTotalPrice)
