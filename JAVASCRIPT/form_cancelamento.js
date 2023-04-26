const os = document.querySelector("#botao");


os.addEventListener('click', function () {
    event.preventDefault();
    const printElements = [
        //adesão
        { printElementId: 'motivo__print', inputElementId: 'motivo' },
        { printElementId: 'ssid__print', inputElementId: 'ssid' },
        { printElementId: 'senha__print', inputElementId: 'senha' },
        { printElementId: 'cto__print', inputElementId: 'cto' },
        { printElementId: 'porta__print', inputElementId: 'porta' },
        { printElementId: 'fatura_aberto__print', inputElementId: 'fatura_aberto' },
        { printElementId: 'proporcional_print', inputElementId: 'proporcional' },
        { printElementId: 'endereco_print', inputElementId: 'endereco' },
        { printElementId: 'contato_print', inputElementId: 'contato' },
        { printElementId: 'contato2_print', inputElementId: 'contato2' },
        { printElementId: 'agendamento__print', inputElementId: 'agendamento' },
        { printElementId: 'antecipar_print', inputElementId: 'antecipar' },
        
    ];
    for (let i = 0; i < printElements.length; i++) {
        const printElement = document.getElementById(printElements[i].printElementId);
        const inputElement = document.getElementById(printElements[i].inputElementId);
        printElement.innerHTML = inputElement.value;
    }

});

os.addEventListener('click', function () {
    const data = document.querySelector("#agendamento");
    const datalida = data.value;
    const datacorreta = datalida.replace(/2023/g, "");
    const dataconvert = datacorreta.split('-').reverse().join(' / ');
    document.getElementById("agendamento__print").innerHTML = dataconvert;
});

function setInnerHtmlValue(printElementId, inputElementId) {
    const printElement = document.getElementById(printElementId);
    const inputElement = document.getElementById(inputElementId);
    printElement.innerHTML = inputElement.value;
}

//selecionando o id do botao pra pegar o click
var botao = document.getElementById("botao")

//Adicionando eventlsitener(pegar evento no caso aqui o de clique )
botao.addEventListener("click", inserirTexto);

function inserirTexto() {
    var texto = "";
    texto += "MOTIVO DO CONCELAMENTO:" + document.getElementById("motivo__print").innerText + "\n";
    texto += "SENHA:" + document.getElementById("senha__print").innerText + "\n\n";
    texto += "CTO:" + document.getElementById("cto__print").innerText + "\n";
    texto += "PORTA:" + document.getElementById("porta__print").innerText + "\n\n\n";
    texto += "CLIENTE CIENTE DA FATURA EM ABERTO : " + document.getElementById("fatura_aberto__print").innerText + "\n\n";
    texto += "CIENTE QUE EXISTE PROPORCIONAL DE USO, DEVIDO CANCELAMENTO APÓS O VENCIMENTO :" + document.getElementById("proporcional_print").innerText + "\n\n\n";
    texto += "PONTOS DE REFERÊNCIA:" + document.getElementById("endereco_print").innerText + "\n";
    texto += "CONTATOS DO CLIENTE: " + document.getElementById("contato_print").innerText + "\n";
    texto += "CONTATOS(2) DO CLIENTE:" + document.getElementById("contato2_print").innerText + "\n";
    texto += "DATA DO AGENDAMENTO: " + document.getElementById("agendamento__print").innerText + "\n";
    texto += "DESEJA OU NÃO ANTECIPAR: " + document.getElementById("antecipar_print").innerText;

    document.getElementById("canc__preview").value = texto;
}

var copiar = document.getElementById("copiador")
//Pegando evento 
copiar.addEventListener("click", copiarTexto);

function copiarTexto() {
    let textoCopiado = document.getElementById("canc__preview").value;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        alert("Texto copiado com sucesso: \n" + textoCopiado);
    }).catch((error) => {
        console.error("Falha ao copiar o texto: ", error);
    });
}


