/* //  
const os = document.querySelector("#botao");
const btn = document.querySelector("#botao");
os.addEventListener('click', function() {
    event.preventDefault();

    setInnerHtmlValue('plano_print', 'plano');
    setInnerHtmlValue('vencimento_print', 'vencimento');
    setInnerHtmlValue('valortaxa_print', 'valortaxa');
    setInnerHtmlValue('modopagamento_print', 'modopagamento');
    setInnerHtmlValue('endereco_print', 'endereco');
    setInnerHtmlValue('contato_print', 'contato');
    setInnerHtmlValue('contato2_print', 'contato2');
    setInnerHtmlValue('antecipar_print','antecipar');
});

btn.addEventListener('click', function() {
    const data = document.querySelector("#agendamento");
    const datalida = data.value;
    const datacorreta = datalida.replace(/2023/g, "");
    const dataconvert = datacorreta.split('-').reverse().join(' / ');
    document.getElementById("agendamento_print").innerHTML = dataconvert;
});

function setInnerHtmlValue(printElementId, inputElementId) {
    const printElement = document.getElementById(printElementId);
    const inputElement = document.getElementById(inputElementId);
    printElement.innerHTML = inputElement.value;
}

*/
const os = document.querySelector("#botao");
const btn = document.querySelector("#botao");


os.addEventListener('click', function () {
    event.preventDefault();
    const printElements = [
        { printElementId: 'plano_print', inputElementId: 'plano' },
        { printElementId: 'vencimento_print', inputElementId: 'vencimento' },
        { printElementId: 'valortaxa_print', inputElementId: 'valortaxa' },
        { printElementId: 'modopagamento_print', inputElementId: 'modopagamento' },
        { printElementId: 'endereco_print', inputElementId: 'endereco' },
        { printElementId: 'contato_print', inputElementId: 'contato' },
        { printElementId: 'contato2_print', inputElementId: 'contato2' },
        { printElementId: 'antecipar_print', inputElementId: 'antecipar' }
    ];
    for (let i = 0; i < printElements.length; i++) {
        const printElement = document.getElementById(printElements[i].printElementId);
        const inputElement = document.getElementById(printElements[i].inputElementId);
        printElement.innerHTML = inputElement.value;
    }

});

btn.addEventListener('click', function () {
    const data = document.querySelector("#agendamento");
    const datalida = data.value;
    const datacorreta = datalida.replace(/2023/g, "");
    const dataconvert = datacorreta.split('-').reverse().join(' / ');
    document.getElementById("agendamento_print").innerHTML = dataconvert;
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
    texto += "PLANO: " + document.getElementById("plano_print").innerText + "\n";
    texto += "VENCIMENTO: " + document.getElementById("vencimento_print").innerText + "\n";
    texto += "VALOR TAXA: R$" + document.getElementById("valortaxa_print").innerText + "\n";
    texto += "MODO DE PAGAMENTO: " + document.getElementById("modopagamento_print").innerText + "\n";
    texto += "PONTOS DE REFERÊNCIA: " + document.getElementById("endereco_print").innerText + "\n";
    texto += "CONTATOS DO CLIENTE: " + document.getElementById("contato_print").innerText + "\n";
    texto += "CONTATOS(2) DO CLIENTE: " + document.getElementById("contato2_print").innerText + "\n";
    texto += "DATA DO AGENDAMENTO: " + document.getElementById("agendamento_print").innerText + "\n";
    texto += "DESEJA OU NÃO ANTECIPAR: " + document.getElementById("antecipar_print").innerText;

    document.getElementById("texto_area").value = texto;
}

//BOTÃO DE COPIA DECLARAÇÃO 
var copiar = document.getElementById("copiador")
//Pegando evento 
copiar.addEventListener("click", copiarTexto);

function copiarTexto() {
    let textoCopiado = document.getElementById("texto_area");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Control + V Efetuado : \n" + textoCopiado.value);
}
