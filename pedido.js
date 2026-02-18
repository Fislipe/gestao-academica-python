//-------------Variaveis globais------------//

var pedido = document.getElementById("pedidores");
var pedidos = 0;

//variaveis de produtos, que serao usadas para o calculo do valor final
var pizzas = 0;
var refris = 0;
var sucos = 0;
var cervejas = 0;
var doces = 0;

//-------------Funcoes----------------------//

function maispizza(){ //função que ira adcionar uma pizza no pedido
    pedidos++; //assim que for chamada, adcionara 1 no numero de itens do pedido
    pizzas++; //tambem adcionara nas pizzas, pois é uma pizza a mais :v
    pedido.innerHTML +=`\ 
    <div class="pedidodiv" id="pedido${pedidos}">\
        <div class="excluir">\
            <input type="button" onclick="excluirdiv(${pedidos},'pizza')" class="excluirbt">\
        </div>\
        <h2>Pizza</h2>\
        <label for="pizza">Escolha o recheio:</label>\
        <select name="pizza">\
            <option value="4 Queijos">4 Queijos</option>\
            <option value="5 Queijos">5 Queijos</option>\
            <option value="Moda da Casa">Moda da Casa</option>\
            <option value="Calabresa">Calabresa</option>\
            <option value="Bacon">Bacon</option>\
            <option value="Italiana">Italiana</option>\
            <option value="Mexicana">Mexicana</option>\
            <option value="Portuguesa">Portuguesa</option>\
        </select>\
    </div>`
}//adcionara no documento html uma caixa de seleção para o usuario escolher o recheio da pizza, tambem nesta caixa adcionado um botao para exclui-la

function maisbebida(){ //função para adcionar uma bebida no pedido
    pedidos++;
    pedido.innerHTML += `<div class="pedidodiv" id="pedido${pedidos}">\
        <div class="excluir">\
            <input type="button" onclick="excluirdiv(${pedidos},'bebida')" class="excluirbt">\
        </div>\
        <h2>Bebida</h2>\
        <div class="buttons">\
            <input type="button" onclick="maisrefri(${pedidos})" value="Refri" class="buttonb">\
            <input type="button" onclick="maissuco(${pedidos})" value="Suco" class="buttonb">\
            <input type="button" onclick="maiscerveja(${pedidos})" value="Cerveja" class="buttonb">\
        </div>\
    `
} //adcionara mais um processo de botoes em que o usuario podera escolher o tipo de bebida

function maisrefri(bebida){ //função que ira adcionar um refri no pedido
        refris++;
        var bebidadiv = document.getElementById(`pedido${bebida}`);
        bebidadiv.innerHTML = `\
        <div class="excluir">\
            <input type="button" onclick="excluirdiv(${pedidos},'refri')" class="excluirbt">\
        </div>\
        <h2>Bebida</h2>\
        <label for="refri">Escolha o refri:</label>\
        <select name="refri">\
            <option value="Coca-Cola">Coca-Cola</option>\
            <option value="Pepsi">Pepsi</option>\
            <option value="Sprite">Sprite</option>\
            <option value="Guaraná">Guaraná</option>\
            <option value="Fanta">Fanta</option>\
        </select>\
        `
} //adcionara no documento html uma caixa de seleção para o usuario escolher a marca do refri, e o botao de excluir

function maissuco(bebida){ //função que ira adcionar um suco no pedido
    sucos++;
    var bebidadiv = document.getElementById(`pedido${bebida}`);
    bebidadiv.innerHTML = `\
    <div class="excluir">\
        <input type="button" onclick="excluirdiv(${pedidos},'suco')" class="excluirbt">\
    </div>\
    <h2>Bebida</h2>\
    <label for="suco">Escolha o suco:</label>\
    <select name="suco">\
        <option value="Abacaxi">Abacaxi</option>\
        <option value="Abacaxi com hortelã">Abacaxi com hortelã</option>\
        <option value="Morango">Morango</option>\
        <option value="Uva">Uva</option>\
        <option value="Laranja">Laranja</option>\
    </select>\
    `
} //adcionara no documento html uma caixa de seleção para o usuario escolher o sabor do suco, e o botao de excluir

function maiscerveja(bebida){ //função que ira adcionar uma cerveja no pedido
    cervejas++;
    var bebidadiv = document.getElementById(`pedido${bebida}`);
    bebidadiv.innerHTML = `\
    <div class="excluir">\
        <input type="button" onclick="excluirdiv(${pedidos},'cerveja')" class="excluirbt">\
    </div>\
    <h2>Bebida</h2>\
    <label for="suco">Escolha a cerveja:</label>\
    <select name="cerveja">\
        <option value="Antártica Original">Antártica Original</option>\
        <option value="Subzero">Subzero</option>\
        <option value="Kaiser">Kaiser</option>\
        <option value="Skol">Skol</option>\
    </select>\
    `
} //adcionara no documento html uma caixa de seleção para o usuario escolher a marca da cerveja, e o botao de excluir

function maisdoce(){ //função que ira adcionar um doce no pedido
    doces++;
    pedido.innerHTML += `\
    <div class="pedidodiv" id="pedido${pedidos}">\
        <div class="excluir">\
            <input type="button" onclick="excluirdiv(${pedidos},'doce')" class="excluirbt">\
        </div>\
        <h2>Doce</h2>\
        <label for="doce">Escolha o doce:</label>\
        <select name="doce">\
            <option value="Bolo de pote">Bolo de pote</option>\
            <option value="Brownie">Brownie</option>\
            <option value="Pacote de cookies">Pacote de cookies</option>\
        </select>\
    </div>\
    `
}

function excluirdiv(pedido, produto){ //função que ira remover um item do pedido
    document.getElementById(`pedido${pedido}`).remove(); //pegando o numero deste item e o removendo
    //checara qual tipo de produto foi removido para subtrair no numero total deste
    if (produto == 'pizza'){pizzas--};
    if (produto == 'refri'){refris--};
    if (produto == 'suco'){sucos--};
    if (produto == 'cerveja'){cervejas--};
    if (produto == 'doce'){doces--};
}

function fim(){ //função que irá completar o pedido e mostra o valor total
    let total = (pizzas * 40)+(refris * 10)+(sucos * 7)+(cervejas * 11)+(doces * 12)
    pedido.innerHTML += `\
    <div class="pedidodiv" id="pedido${pedidos}">\
        <h2>Total</h2>\
        <h2>R$${total},00</h2>\
    `
    let final = document.getElementById("finish");
    let bot = document.getElementById("buttons");
    final.remove();
    bot.remove();

}