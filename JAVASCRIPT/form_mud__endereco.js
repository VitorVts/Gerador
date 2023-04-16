const os = document.getElementById("botao");


os.addEventListener('click', (event) => {
    event.preventDefault();
    const printElements = [
        { printElementId: 'mud__valortaxa__print', inputElementId: 'mud__valortaxa' },
        { printElementId: 'mud__ssid__print', inputElementId: 'mud__ssid' },
        { printElementId: 'mud__senha__print', inputElementId: 'mud__senha' },
        { printElementId: 'mud__cto__print', inputElementId: 'mud__cto' },
        { printElementId: 'mud__porta__print', inputElementId: 'mud__porta' },
        { printElementId: 'contato__print', inputElementId: 'contato' },
        { printElementId: 'contato2__print', inputElementId: 'contato2' },
        { printElementId: 'agendamento__print', inputElementId: 'agendamento' },
        { printElementId: 'mud__endereco__antigo__print', inputElementId: 'mud__endereco__antigo' },
        { printElementId: 'ref__antigo__print', inputElementId: 'ref__antigo' },
        { printElementId: 'mud__endereco__novo__print', inputElementId: 'mud__endereco__novo' },
        { printElementId: 'ref__novo__print', inputElementId: 'ref__novo' },
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
    const datacorreta = datalida.replace(/-2023/g, "");
    const dataconvert = datacorreta.split('-').reverse().join(' / ');
    document.getElementById("agendamento__print").innerHTML = dataconvert;
});

function setInnerHtmlValue(printElementId, inputElementId) {
    const printElement = document.getElementById(printElementId);
    const inputElement = document.getElementById(inputElementId);
    printElement.innerHTML = inputElement.value;
}


var botao = document.getElementById("botao")

//Adicionando eventlsitener(pegar evento no caso aqui o de clique )
botao.addEventListener("click", inserirTexto);

function inserirTexto() {
    var texto = "";
    texto += "SSID: " + document.getElementById("mud__ssid__print").innerText + "\n";
    texto += "SENHA: " + document.getElementById("mud__senha__print").innerText + "\n";
    texto += "CTO:" + document.getElementById("mud__cto__print").innerText + "\n";
    texto += "PORTA: " + document.getElementById("mud__porta__print").innerText + "\n";
    texto += "ENDEREÇO ANTIGO: " + document.getElementById("mud__endereco__antigo__print").innerText + "\n";
    texto += "PONTOS DE REFERÊNCIA:" + document.getElementById("ref__antigo__print").innerText + "\n";
    texto += "NOVO ENDEREÇO: " + document.getElementById("mud__endereco__novo__print").innerText + "\n";
    texto += "PONTOS DE REFERÊNCIA:" + document.getElementById("ref__novo__print").innerText + "\n";
    texto += "VALOR TAXA:R$" + document.getElementById("mud__valortaxa__print").innerText + "\n";
    texto += "CONTATO DO CLIENTE " + document.getElementById("contato__print").innerText + "\n";
    texto += "CONTATO(2) DO CLIENTE:" + document.getElementById("contato2__print").innerText + "\n";
    texto += "DATA DE AGENDAMENTO:" + document.getElementById("agendamento__print").innerText + "\n";
    document.getElementById("mud__preview").value = texto;
}



var copiar = document.getElementById("copiador")
//Pegando evento 
copiar.addEventListener("click", copiarTexto);

function copiarTexto() {
    let textoCopiado = document.getElementById("mud__preview").value;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        alert("Texto copiado com sucesso: \n" + textoCopiado);
    }).catch((error) => {
        console.error("Falha ao copiar o texto: ", error);
    });
}

