function selecionarTexto() {
    var elemento = document.getElementById("resultadoTexto");

    if (document.body.createTextRange) {
        // Internet Explorer
        var range = document.body.createTextRange();
        range.moveToElementText(elemento);
        range.select();
    } else if (window.getSelection) {
        // Outros navegadores
        var range = document.createRange();
        range.selectNode(elemento);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }

    // Copiar para a área de transferência (opcional)
    document.execCommand("copy");
}

function condicional() {
    var selectedOption = document.getElementById("houve.multa").value;
    var textBox = document.getElementById("multa");
    if (selectedOption === "2") {
        textBox.style.display = "none";
    } else {
        textBox.style.display = "block";
    }
}

function condicionalTipo() {
    var selectedOption2 = document.getElementById("estorno").value;
    var form8 = document.getElementById("form8");

    if (selectedOption2 === "1") {
        form8.style.display = "block"; // Mostra form8
    } else if (selectedOption2 === "2") {
        form8.style.display = "none"; // Se opção 2, oculta form8
    } else {
        form8.style.display = "none"; // Oculta form8 se nenhuma opção válida for selecionada
    }
}

function obterOpcaoSelecionada() {
    var valorDataest = document.getElementById("dataest").value;
    var dataSplit = valorDataest.split("-");
    var dataFormatada = dataSplit[2] + "/" + dataSplit[1] + "/" + dataSplit[0];

    var elemDescricao = document.getElementById("descricao");
    var selecionadaDescricao = elemDescricao.options[elemDescricao.options.selectedIndex].text;

    var elemEndereco = document.getElementById("endereco").value;
    var elemTelefone = document.getElementById("telefone").value;
    var elemProduto = document.getElementById("produto").value;
    var elemPedido = document.getElementById("pedido").value;

    var selecionadaMulta = document.getElementById("houve.multa").options[document.getElementById("houve.multa").selectedIndex].text;
    var valorMulta = document.getElementById("multa").value;
    valorMulta = (document.getElementById("houve.multa").value === "5") ? "R$ " + valorMulta : "NÃO HOUVE";

    var selecionadaEstorno = document.getElementById("estorno").options[document.getElementById("estorno").selectedIndex].text;

    var resultado = "DESCRIÇÃO EXATA DA OBRIGAÇÃO DE FAZER: " + selecionadaDescricao +
        "\n\n\nENDEREÇO DE ENTREGA: " + elemEndereco +
        "\n\n\nTELEFONE DO AUTOR: " + elemTelefone +
        "\n\n\nPRODUTO: " + elemProduto +
        "\n\n\nNÚMERO DO PEDIDO: " + elemPedido +
        "\n\n\nMULTA POR DESCUMPRIMENTO: " + valorMulta +
        "\n\n\nHÁ O ESTORNO DA COMPRA? " + selecionadaEstorno +
        "\n\n\nDATA DO ESTORNO: " + dataFormatada;
        
    var botaoCopiarModelo = document.getElementById("botaoCopiarModelo");
    botaoCopiarModelo.style.display = "block";

    document.getElementById("resultadoTexto").innerText = resultado;
}
