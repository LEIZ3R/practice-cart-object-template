const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const fragment = document.createDocumentFragment();
const allBtns = document.querySelectorAll('.card .btn');

const cartItems = {};

const addItem = (e) => {
    console.log(e.target.dataset.fruta);
    const product = {
        title: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        amount: 1
    }

    if(cartItems.hasOwnProperty(product.title)){
        product.amount = cartItems[product.title].amount + 1
    }
    
    cartItems[product.title] = product;
    showCart(cartItems);
};

const showCart = (product) => {
    carrito.textContent = "";
    Object.values(cartItems).forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true)
        clone.querySelector('.lead').textContent = item.title
        clone.querySelector('.badge').textContent = item.amount

        fragment.appendChild(clone)
    })

    carrito.appendChild(fragment)
    
}

allBtns.forEach((btn) => btn.addEventListener("click", addItem))
