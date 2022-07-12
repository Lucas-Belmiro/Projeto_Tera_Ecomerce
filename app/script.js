

/* Dinamic data */

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



let count = 1;


productArray.map((element) => {



    document.getElementsByClassName(`best-sellers${count}-text`)[0].textContent = element.name;
    document.getElementsByClassName(`best-sellers${count}-price`)[0].textContent = `R$ ${element.price}`;
    document.getElementsByClassName(`best-sellers${count}-button`)[0].id = element.id;
    document.getElementsByClassName(`best-sellers${count}-img`)[0].src = element.img;

    count++;

});

document.querySelectorAll("a").forEach(function (a) {

    a.addEventListener("click", function (event) {
        let count2 = 1;
        const el = event.target;
        var ident = el.id;


        productArray.map((element2) => {

            if (ident == element2.id) {
                console.log(count2);

                localStorage.setItem('valueNumber', count2);

            }

            count2++;

        });

    });

});

let count3 = 1;

productArray.map((element3) => {

    document.getElementsByClassName(`best-sellers${count3}-text2`)[0].textContent = element3.name;
    document.getElementsByClassName(`best-sellers${count3}-price2`)[0].textContent = `R$ ${element3.price}`;
    document.getElementsByClassName(`best-sellers${count3}-button2`)[0].id = element3.id;
    document.getElementsByClassName(`best-sellers${count3}-img2`)[0].src = element3.img;

    count3++;

});

let itens= JSON.parse(localStorage.getItem('itens')) || [];

document.getElementsByClassName("cart-lenght")[0].textContent = itens.length;


