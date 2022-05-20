function aumenta(){
    let armazena = document.getElementById('quantidadeProduto').textContent;
    armazena++;

    document.getElementById('quantidadeProduto').textContent = armazena;
}

function diminui(){
    let armazena = document.getElementById('quantidadeProduto').textContent;

    if (armazena > 1){
        armazena--;
        document.getElementById('quantidadeProduto').textContent = armazena;
    }
}