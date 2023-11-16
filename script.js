const btnAdicionar = document.querySelector("#btnAdicionar");
//seleciona o botão adicionar

btnAdicionar.addEventListener("click",adicionar);
//fica prestando a atenção na tela, caso o botão seja clicado.
//se botão for clicado, irá chamar a função adicionar...

function adicionar(){
    const item = document.createElement("li");
    //cria o elemento "li" e o coloca na variável item
    const caixaValor = document.querySelector("#minhaCaixa").value;
    //pega o texto ou valor que será digitado na caixa input
    const novoNome = document.createTextNode(caixaValor);
    //insire o texto capturado na variável e o insere nesta nova variavel
    item.appendChild(novoNome);
    //adiciona o elemento li no elemento ul
    if (caixaValor === ""){ //verifica se a caixa está vázia
        alert("É necessário digitar algum texto para adicionar")
        //dá aviso caso estej vazio
    } else { //senão
        document.querySelector("#itens").appendChild(item);
        //insere o texto na nova li
    }
    document.querySelector("#minhaCaixa").value = "";
    //zera o texto dentro do imput.
    const span = document.createElement("span");
    //crie o elemento span, e o insira dentro da variavel span.
    const icon = document.createTextNode("\u00D7");
    //insere o simbolo "+" dentro da variavel icon
    span.className = "fechar"; //adiciona o nome e uma classe
    span.appendChild(icon); //insere o icone dentro do span
    item.appendChild(span); //insere a span na li criada

    const close = document.querySelectorAll(".fechar");
    //captura toas as spans que tem classe com nome "fechar"
    for(let i=0; i < close.length; i++) {
        //vare a lista da spans e verifica uma por uma, para verificar qual dela foi clicado
        close[i].addEventListener("click",apagar)
        //o item clicado, chama a função apagar
    }
}

function apagar(){
    const item = this.parentElement;
    //captura a lista inteira
    item.style.display = "none";
    //se o nome do item que eu cliquei na lista foi"li"
function checar(ev){
    if(ev.target.nodeName == "li"){
    //verifica se o item clicado é uma li
    ev.target.classList.toggle("checado");
    //adiciona nesse elemento clicado a classe "chegado"
    }

    }
    
}