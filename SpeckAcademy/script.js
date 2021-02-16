const inputBox = document.querySelector(".unos input");
const addBtn = document.querySelector(".unos button");
const productList = document.querySelector(".productList");
const deleteAll = document.querySelector(".removeProducts");
const productsNumber = document.querySelector(".numberProducts");



addBtn.onclick = () => {
    let newValue = inputBox.value;
    let getLocalStorageData = localStorage.getItem("New Product");
    if (getLocalStorageData == null) {
        listProduct = [];
    } else {
        listProduct = JSON.parse(getLocalStorageData);
    }
    listProduct.push(newValue);
    localStorage.setItem("New Product", JSON.stringify(listProduct));
    showProducts();
}

function showProducts() {
    let getLocalStorageData = localStorage.getItem("New Product");
    if (getLocalStorageData == null) {
        listProduct = [];
    } else {
        listProduct = JSON.parse(getLocalStorageData);
    }

    if (listProduct.length > 0) {
        var numberTag = document.createElement('a');
        numberTag.className = "podaci";
        numberTag.innerText = listProduct.length;
        productsNumber.className = "h7";
        productsNumber.textContent = 'Number of products: ';
        productsNumber.appendChild(numberTag);

        deleteAll.textContent = "Remove all products"

    } else {
        productsNumber.textContent = "";
        deleteAll.textContent = "";
    }


    let newProductTag = "";
    listProduct.forEach((element) => {
        newProductTag += `<li>${element}</li>`;
    });
    productList.innerHTML = newProductTag;
    inputBox.value = "";
}

const clearAll = () => {
    if (confirm("Nisam tuzan")) {
        listProduct = [];
        localStorage.setItem("New Product", JSON.stringify(listProduct));
    }
    showProducts();
}