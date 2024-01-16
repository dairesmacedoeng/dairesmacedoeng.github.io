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

function obterOpcaoSelecionada() {

    var elemAcionamento = document.getElementById("acionamento");
    var selecionadaAcionamento = elemAcionamento.options[elemAcionamento.selectedIndex].text;

    var elemVenda = document.getElementById("venda");
    var selecionadaVenda = elemVenda.options[elemVenda.selectedIndex].text;

    var elemEntrega = document.getElementById("entrega");
    var selecionadaEntrega = elemEntrega.options[elemEntrega.selectedIndex].text;

    var elemProcesso = document.getElementById("processo");
    var selecionadaProcesso = elemProcesso.options[elemProcesso.selectedIndex].text;

    var elemObs = document.getElementById("obs");
    var selecionadaObs = elemObs.options[elemObs.selectedIndex].text;

    var resultado = "ASSUNTO DO ACIONAMENTO: " + selecionadaAcionamento +
        "\n\n\nRESPONSÁVEL PELA VENDA: " + selecionadaVenda +
        "\n\n\nRESPONSÁVEL PELA ENTREGA: " + selecionadaEntrega +
        "\n\n\nRESPONSÁVEL PELO PROCESSO: " + selecionadaProcesso +
        "\n\n\nOBS: " + selecionadaObs;

        var botaoCopiarModelo = document.getElementById("botaoCopiarModelo");
        botaoCopiarModelo.style.display = "block";

    document.getElementById("resultadoTexto").innerText = resultado;
}