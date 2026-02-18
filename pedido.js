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

function maispizza(){ 
    pedidos++; 
    pizzas++; 
    pedido.innerHTML +=`
    <div class="pedidodiv" id="pedido${pedidos}">
        <div class="excluir">
            <input type="button" onclick="excluirdiv(${pedidos},'pizza')" class="excluirbt">
        </div>
        <h2>Pizza</h2>
        <label for="pizza">Escolha o recheio:</label>
        <select name="pizza">
            <option value="4 Queijos">4 Queijos</option>
            <option value="5 Queijos">5 Queijos</option>
            <option value="Moda da Casa">Moda da Casa</option>
            <option value="Calabresa">Calabresa</option>
            <option value="Bacon">Bacon</option>
            <option value="Italiana">Italiana</option>
            <option value="Mexicana">Mexicana</option>
            <option value="Portuguesa">Portuguesa</option>
        </select>
    </div>`
}

function maisbebida(){ 
    pedidos++;
    pedido.innerHTML += `<div class="pedidodiv" id="pedido${pedidos}">
        <div class="excluir">
            <input type="button" onclick="excluirdiv(${pedidos},'bebida')" class="excluirbt">
        </div>
        <h2>Bebida</h2>
        <div class="buttons">
            <input type="button" onclick="maisrefri(${pedidos})" value="Refri" class="buttonb">
            <input type="button" onclick="maissuco(${pedidos})" value="Suco" class="buttonb">
            <input type="button" onclick="maiscerveja(${pedidos})" value="Cerveja" class="buttonb">
        </div>
    </div>`
}

function maisrefri(idBebida){ 
        refris++;
        var bebidadiv = document.getElementById(`pedido${idBebida}`);
        bebidadiv.innerHTML = `
        <div class="excluir">
            <input type="button" onclick="excluirdiv(${idBebida},'refri')" class="excluirbt">
        </div>
        <h2>Bebida</h2>
        <label for="refri">Escolha o refri:</label>
        <select name="refri">
            <option value="Coca-Cola">Coca-Cola</option>
            <option value="Pepsi">Pepsi</option>
            <option value="Sprite">Sprite</option>
            <option value="Guaraná">Guaraná</option>
            <option value="Fanta">Fanta</option>
        </select>
        `
}

function maissuco(idBebida){ 
    sucos++;
    var bebidadiv = document.getElementById(`pedido${idBebida}`);
    bebidadiv.innerHTML = `
    <div class="excluir">
        <input type="button" onclick="excluirdiv(${idBebida},'suco')" class="excluirbt">
    </div>
    <h2>Bebida</h2>
    <label for="suco">Escolha o suco:</label>
    <select name="suco">
        <option value="Abacaxi">Abacaxi</option>
        <option value="Abacaxi com hortelã">Abacaxi com hortelã</option>
        <option value="Morango">Morango</option>
        <option value="Uva">Uva</option>
        <option value="Laranja">Laranja</option>
    </select>
    `
}

function maiscerveja(idBebida){ 
    cervejas++;
    var bebidadiv = document.getElementById(`pedido${idBebida}`);
    bebidadiv.innerHTML = `
    <div class="excluir">
        <input type="button" onclick="excluirdiv(${idBebida},'cerveja')" class="excluirbt">
    </div>
    <h2>Bebida</h2>
    <label for="suco">Escolha a cerveja:</label>
    <select name="cerveja">
        <option value="Antártica Original">Antártica Original</option>
        <option value="Subzero">Subzero</option>
        <option value="Kaiser">Kaiser</option>
        <option value="Skol">Skol</option>
    </select>
    `
}

function maisdoce(){ 
    pedidos++; 
    doces++;
    pedido.innerHTML += `
    <div class="pedidodiv" id="pedido${pedidos}">
        <div class="excluir">
            <input type="button" onclick="excluirdiv(${pedidos},'doce')" class="excluirbt">
        </div>
        <h2>Doce</h2>
        <label for="doce">Escolha o doce:</label>
        <select name="doce">
            <option value="Bolo de pote">Bolo de pote</option>
            <option value="Brownie">Brownie</option>
            <option value="Pacote de cookies">Pacote de cookies</option>
        </select>
    </div>
    `
}

function excluirdiv(idPedido, produto){ 
    const elemento = document.getElementById(`pedido${idPedido}`);
    if(elemento) {
        elemento.remove(); 
        if (produto == 'pizza'){pizzas--};
        if (produto == 'refri'){refris--};
        if (produto == 'suco'){sucos--};
        if (produto == 'cerveja'){cervejas--};
        if (produto == 'doce'){doces--};
    }
}

function fim(){ 
    let total = (pizzas * 40)+(refris * 10)+(sucos * 7)+(cervejas * 11)+(doces * 12)
    pedido.innerHTML += `
    <div class="pedidodiv">
        <h2>Total</h2>
        <h2>R$${total},00</h2>
    </div>`
    
    let final = document.getElementById("finish");
    let bot = document.getElementById("buttons");
    if(final) final.remove();
    if(bot) bot.remove();
}