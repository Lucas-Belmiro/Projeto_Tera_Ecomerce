let productArray = [

    {
        name: "Tênis Nike Extend",
        price: "499.00",
        color: "Preto",
        img: "./images/3.png",
        id: "product1",
        size: "",
        quantity: "",
        numberSales: 0
    },

    {
        name: "Tênis Fila Sport",
        price: "299.00",
        color: "Preto",
        img: "./images/2.png",
        id: "product2",
        size: "",
        quantity: "",
        numberSales: 0
    },

    {
        name: "Tênis Nike Galaxy",
        price: "529.00",
        color: "Preto",
        img: "./images/1.png",
        id: "product3",
        size: "",
        quantity: "",
        numberSales: 0
    },

    {
        name: "Tênis Nike WL",
        price: "422.00",
        color: "Branco",
        img: "./images/4.png",
        id: "product4",
        size: "",
        quantity: "",
        numberSales: 0
    },

    {
        name: "Tênis Nike XP",
        price: "358.00",
        color: "Rosa",
        img: "./images/5.jpg",
        id: "product5",
        size: "",
        quantity: "",
        numberSales: 0
    },

    {
        name: "Tênis Nike Future",
        price: "522.00",
        color: "Pink",
        img: "./images/6.jpg",
        id: "product6",
        size: "",
        quantity: "",
        numberSales: 0
    },

    {
        name: "Tênis Nike World",
        price: "415.00",
        color: "Preto",
        img: "./images/7.jpg",
        id: "product7",
        size: "",
        quantity: "",
        numberSales: 0
    },

    {
        name: "Tênis Addidas Racer",
        price: "299.00",
        color: "Preto",
        img: "./images/8.jpg",
        id: "product8",
        size: "",
        quantity: "",
        numberSales: 0

    },

    {
        name: "Tênis adiddas Dark",
        price: "359.00",
        color: "Preto",
        img: "./images/9.jpg",
        id: "product9",
        size: "",
        quantity: "",
        numberSales: 0
    }
]



let index = localStorage.getItem('valueCart');

console.log(index);

let BoxValueSize = localStorage.getItem('valueSize');
let BoxValueQuantity = localStorage.getItem('valueQuantity');
console.log(BoxValueQuantity);

let itens = JSON.parse(localStorage.getItem('itens')) || [];

let array = itens;

// remove error on update

if (index != [] && index != null) {
    array.push(index);
}




localStorage.setItem('itens', JSON.stringify(array));
localStorage.setItem('valueCart', []);


productArray.map((element2) => {

    for (let i = 0; i < array.length; i++) {
        if (element2.id == array[i]) {
            array[i] = element2;
        }
    }

});


for (let i = 0; i < array.length; i++) {
    if (index == array[i].id) {
        array[i].size = BoxValueSize;
    }
}

for (let i = 0; i < array.length; i++) {
    if (index == array[i].id) {
        array[i].quantity = BoxValueQuantity;
    }
}

// removing duplicates

const arraynovo = new Map();

array.forEach((introArray) => {
    if (!arraynovo.has(introArray.name)){
        arraynovo.set(introArray.name, introArray);
    }
});

array = [...arraynovo.values()];


console.log(array);




localStorage.setItem('itens', JSON.stringify(array));

// insert DOM

array.map((element3) => {

    const novoItem = document.createElement("div");
    novoItem.innerHTML = `<div class="row"> <div> <button id = ${element3.id} class="button-delete" href="">Excluir produto</button> </div> <div class="col d-flex justify-content-center"> <img class="image-highlight" src=${element3.img} alt=""> </div> <div class="col d-flex flex-column justify-content-center"> <p class="product-cart-details">${element3.name}</p> <p>Tam. ${element3.size}</p> <p>Quant. ${element3.quantity}</p> <p>Cor: preto</p> </div>  </div>`;
    document.getElementsByClassName('expand-cart')[0].appendChild(novoItem);

})


// delete product

document.querySelectorAll("button").forEach(function (button) {

    button.addEventListener("click", function (event) {

        const el = event.target;
        var ident = el.id;

        let newArray = array.filter((item) => item.id !== ident);


        document.getElementsByClassName('expand-cart')[0].innerHTML = "";

        newArray.map((element4) => {

            const novoItem = document.createElement("div");
            novoItem.innerHTML = `<div class="row"> <div> <button id = ${element4.id} class="button-delete" href="">Excluir produto</button> </div> <div class="col d-flex justify-content-center"> <img class="image-highlight" src=${element4.img} alt=""> </div> <div class="col d-flex flex-column justify-content-center"> <p class="product-cart-details">${element4.name}</p> <p>Tam. ${element4.size}</p> <p>Quant. ${element4.quantity}</p> <p>Cor: preto</p> </div>  </div>`;
            document.getElementsByClassName('expand-cart')[0].appendChild(novoItem);

        });


        localStorage.setItem('itens', JSON.stringify(newArray));
  
        location.reload();


    });

});

// update price


// resume dom

let arrayPrice = [];
let sum = 0;

function refreshCart (){

    array.map((arrays) => {

        let adjustPrice = parseFloat(arrays.price);
        let adjustQuantity = parseFloat(arrays.quantity);

        let multiply = adjustPrice*adjustQuantity;

        arrayPrice.push(multiply);

    });

    for (let amount = 0; amount < arrayPrice.length; amount++) {
        
        sum += arrayPrice[amount];

    }

    console.log(sum)


    //insert DOM
    
    document.getElementsByClassName(`quantity-products`)[0].textContent = `${array.length} produto(s) (${arrayPrice})`;
    document.getElementsByClassName(`price-resume-sum`)[0].textContent = `R$ ${sum}`;

    sum = sum + 25;

    document.getElementsByClassName(`total-price`)[0].textContent = `R$ ${sum}`;

    // Colocar o preço ao lado do tamanho com uma vírgula 


} 

refreshCart();


document.getElementsByClassName("cart-lenght")[0].textContent = itens.length;

window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#carregar';
        window.location.reload();
    }
} 

console.log(array);

/* console.log(array);
console.log(sum);
console.log(array.length)
console.log(arrayPrice); */