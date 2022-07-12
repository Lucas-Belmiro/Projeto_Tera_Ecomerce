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


/* Function increase e decrease */

function aumenta() {
    let armazena = document.getElementById("quantidadeProduto").textContent;
    armazena++;

    document.getElementById("quantidadeProduto").textContent = armazena;

}

function diminui() {
    let armazena = document.getElementById("quantidadeProduto").textContent;

    if (armazena > 1) {
        armazena--;
        document.getElementById("quantidadeProduto").textContent = armazena;
  
    }
}
 


let countClick = 0;
let index =  localStorage.getItem('valueNumber');


document.getElementsByClassName("name-product-detail")[0].textContent = productArray[index-1].name;
document.getElementsByClassName("price-product-detail")[0].textContent = `R$ ${productArray[index-1].price}`;
document.getElementsByClassName("image-emphasis")[0].src = productArray[index-1].img; 
document.getElementsByClassName("button-product-detail")[0].id = productArray[index-1].id; 


let itens = JSON.parse(localStorage.getItem('itens')) || [];


document.querySelectorAll("button2").forEach( function(add) {
    
    add.addEventListener("click", function(event) {
    var el = event.target;
    let ident2 = el.id;

// Setar o value cart como um numero para alocar o array como vazio depois

            localStorage.setItem('valueCart', ident2);
            let getQuantity = document.getElementById("quantidadeProduto").textContent;
            console.log("Da pagina de produto"+getQuantity);
            localStorage.setItem('valueQuantity', getQuantity);
    
  });
  
});



     document.querySelectorAll("input").forEach(function (input) {

        input.addEventListener("click", function (event2) {

            countClick = 1;
            const el2 = event2.target;
            let ident2 = el2.value;

             localStorage.setItem('valueSize', ident2); 

             if (countClick != 0){
                document.getElementsByClassName("button3")[0].removeAttribute("style", `background-color: rgb(211, 211, 211); border: none;`);
                document.getElementsByClassName("button3")[0].setAttribute("href", "./carrinho.html");
            }
      

            });

            
        }); 

       

        document.getElementsByClassName("button3")[0].setAttribute("style", `background-color: rgb(211, 211, 211); border: none;`);

        document.getElementsByClassName("cart-lenght")[0].textContent = itens.length;
        


/* 
testeArray = [8, 7, 2, 5, 3, 1]
let soma = 10;

for (let index = 0; index < testeArray.length; index++) {
    
    if (index= 0){

        for (let index2 = 0; index2 < array.length-1; index2++) {

            let somando = testeArray[index] + testeArray[index+1] 
        }
        
    }
    
}
 */
