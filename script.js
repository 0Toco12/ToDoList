const btnAdicionar = document.querySelector("#btnAdicionar");

btnAdicionar.addEventListener("click", adicionar);

function adicionar () {
    const item = document.createElement("li");
    const caixaValor = document.querySelector("#minhaCaixa").value;
    const novoNome = document.createTextNode(caixaValor);
    item.appendChild(novoNome);
    if(caixaValor === "") {
        alert("É necessário digitar algum texto para adicionar");
    }else {
        document.querySelector("#itens").appendChild(item);
    }
    document.querySelector("#minhaCaixa").value = "";
    const span = document.createElement("span");
    const icon = document.createTextNode("\u00D7");
    span.className = "fechar";
    span.appendChild(icon);
    item.appendChild(span);

    const close = document.querySelectorAll(".fechar");
}