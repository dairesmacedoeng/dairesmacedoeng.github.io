function limparFormularios() {
    for (var i = 0; i <= 10; i++) {
        document.getElementById('form' + i).reset();
    }
    document.getElementById('resultadoTexto').innerText = '';
}

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

function condicionalTipo() {
    var selectedOption = document.getElementById("tipo").value;
    var form1 = document.getElementById("form1");
    var form2 = document.getElementById("form2");

    if (selectedOption === "1") {
        form2.style.display = "none"; // Se opção 1, oculta form2
        form1.style.display = "block"; // Mostra form1
    } else if (selectedOption === "2") {
        form1.style.display = "none"; // Se opção 2, oculta form1
        form2.style.display = "block"; // Mostra form2
    } else {
        form1.style.display = "none"; // Oculta form1 se nenhuma opção válida for selecionada
        form2.style.display = "none"; // Oculta form2 se nenhuma opção válida for selecionada
    }
}

function obterOpcaoSelecionada() {
    var selectedOption = document.getElementById("tipo").value;
    var valorData = "";

    if (selectedOption === "1") {
        valorData = "DATA DO TRÂNSITO EM JULGADO: " + formatarData(document.getElementById("data").value);
    } else if (selectedOption === "2") {
        valorData = "DATA DO ACORDO: " + formatarData(document.getElementById("acordo").value);
    }
    
    var elemTipo = document.getElementById("tipo");
    var selecionadaTipo = elemTipo.options[elemTipo.selectedIndex].text;
    var elemResponsavel = document.getElementById("responsável");
    var selecionadaResponsavel = elemResponsavel.options[elemResponsavel.selectedIndex].text;
    var elemFase = document.getElementById("fase");
    var selecionadaFase = elemFase.options[elemFase.selectedIndex].text;
    var elemRecorreu = document.getElementById("recorreu");
    var selecionadaRecorreu = elemRecorreu.options[elemRecorreu.selectedIndex].text;
    var valorCondenacao = document.getElementById("condenação").value;
    valorCondenacao = (document.getElementById("condenação-select").value === "3") ? "R$ " + valorCondenacao : "NÃO HOUVE";
    var elemObrigacao = document.getElementById("obrigação");
    var selecionadaObrigacao = elemObrigacao.options[elemObrigacao.selectedIndex].text;
    var elemStatus = document.getElementById("status");
    var selecionadaStatus = elemStatus.options[elemStatus.selectedIndex].text;
    var elemCustas = document.getElementById("custas");
    var selecionadaCustas = elemCustas.options[elemCustas.selectedIndex].text;
    var elemReativacao = document.getElementById("reativação");
    var selecionadaReativacao = elemReativacao.options[elemReativacao.selectedIndex].text;

    var resultado = "\n\n\nTIPO DE ENCERRAMENTO: " + selecionadaTipo +
        valorData +
        "\n\n\nRESPONSÁVEL DO PROCESSO: " + selecionadaResponsavel +
        "\n\n\nFASE: " + selecionadaFase +
        "\n\n\nQUEM RECORREU: " + selecionadaRecorreu +
        "\n\n\nCONDENAÇÃO/CUMPRIMENTO EM PAGAMENTO: " + valorCondenacao +
        "\n\n\nOBRIGAÇÃO DE FAZER: " + selecionadaObrigacao +
        "\n\n\nSTATUS: " + selecionadaStatus +
        "\n\n\nHOUVE PAGAMENTO DE CUSTAS FINAIS? " + selecionadaCustas +
        "\n\n\nHOUVE REATIVAÇÃO? " + selecionadaReativacao;

    var botaoCopiarModelo = document.getElementById("botaoCopiarModelo");
    botaoCopiarModelo.style.display = "block";

    document.getElementById("resultadoTexto").innerText = resultado;
}

function formatarData(data) {
    var dataSplit = data.split("-");
    return dataSplit[2] + "/" + dataSplit[1] + "/" + dataSplit[0];
}

function condicional3() {
    var selectedOption = document.getElementById("condenação-select").value;
    var textBox = document.getElementById("condenação");
    if (selectedOption === "4") {
        textBox.style.display = "none";
    } else {
        textBox.style.display = "block";
    }
}
