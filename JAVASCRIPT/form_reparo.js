const os = document.getElementById("botao");


os.addEventListener('click', (event) => {
    event.preventDefault();
    const printElements = [
        { printElementId: 'problema_print', inputElementId: 'problema' },
        { printElementId: 'acesso_print', inputElementId: 'acesso' },
        { printElementId: 'resetOnu_print', inputElementId: 'resetOnu' },
        { printElementId: 'alarme_print', inputElementId: 'alarme' },
        { printElementId: 'sinalOtico_print', inputElementId: 'sinalOtico' },
        { printElementId: 'cto_print', inputElementId: 'cto' },
        { printElementId: 'porta_print', inputElementId: 'porta' },
        { printElementId: 'ssid_print', inputElementId: 'ssid' },
        { printElementId: 'senha_print', inputElementId: 'senha' },
        { printElementId: 'dbmsinal_print', inputElementId: 'dbmsinal' },
        { printElementId: 'trocaFrequencia_print', inputElementId: 'trocaFrequencia' },
        { printElementId: 'testesRealizados_print', inputElementId: 'testesRealizados' },
        { printElementId: 'ping-core1_print', inputElementId: 'ping-core1' },
        { printElementId: 'ping-core2_print', inputElementId: 'ping-core2' },
        { printElementId: 'ping-amazon_print', inputElementId: 'ping-amazon' },
        { printElementId: 'ping-facebook_print', inputElementId: 'ping-facebook' },
        { printElementId: 'ping-local_print', inputElementId: 'ping-local' },
        { printElementId: 'outroDispositivo_print', inputElementId: 'outroDispositivo' },
        { printElementId: 'conclusao_print', inputElementId: 'conclusao' },
        { printElementId: 'endereco_print', inputElementId: 'endereco' },
        { printElementId: 'contato_print', inputElementId: 'contato' },
        { printElementId: 'contato2_print', inputElementId: 'contato2' }
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
    document.getElementById("agendamento_print").innerHTML = dataconvert;
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
    texto += "PROBLEMA: " + document.getElementById("problema_print").innerText + "\n";
    texto += "ACESSO: " + document.getElementById("acesso_print").innerText + "\n";
    texto += "RESET DE ONU:" + document.getElementById("resetOnu_print").innerText + "\n";
    texto += "VERIFICADO ALARME DO U2000: " + document.getElementById("alarme_print").innerText + "\n";
    texto += "SINAL OTICO'" + document.getElementById("sinalOtico_print").innerText + "\n";
    texto += "CTO" + document.getElementById("cto_print").innerText + "\n";
    texto += "PORTA" + document.getElementById("porta_print").innerText + "\n";
    texto += "SSID" + document.getElementById("ssid_print").innerText + "\n";
    texto += "SENHA" + document.getElementById("senha_print").innerText + "\n";
    texto += "WIFI SIGNAL DBm: " + document.getElementById("dbmsinal_print").innerText + "\n";
    texto += "TROCA DE FREQUÊNCIA:" + document.getElementById("trocaFrequencia_print").innerText + "\n";
    texto += "TESTE REALIZADOS:" + document.getElementById("testesRealizados_print").innerText + "\n";
    texto += "PING CORE 1  - " + document.getElementById("ping-core1_print").innerText + "\n";
    texto += "PING CORE 2  - " + document.getElementById("ping-core2_print").innerText + "\n";
    texto += "PING AMAZON -	 " + document.getElementById("ping-amazon_print").innerText + "\n";
    texto += "PPING FACEBOOK - " + document.getElementById("ping-facebook_print").innerText + "\n";
    texto += "PING LOCAL -   " + document.getElementById("ping-local_print").innerText + "\n";
    texto += "QUAL DISPOSITIVO : " + document.getElementById("outroDispositivo_print").innerText + "\n";
    texto += "CONCLUSAO :" + document.getElementById("conclusao_print").innerText + "\n";
    texto += "PONTOS DE REFERÊNCIA:" + document.getElementById("endereco_print").innerText + "\n";
    texto += "CONTATOS DO CLIENTE:" + document.getElementById("contato_print").innerText + "\n";
    texto += "CONTATOS(2) DO CLIENTE: " + document.getElementById("contato2_print").innerText + "\n";
    texto += "DATA DO AGENDAMENTO: " + document.getElementById("agendamento_print").innerText + "\n";
    texto += "DESEJA OU NÃO ANTECIPAR: " + document.getElementById("antecipar_print").innerText;

    document.getElementById("reparo__preview").value = texto;
}



var copiar = document.getElementById("copiador")
//Pegando evento 
copiar.addEventListener("click", copiarTexto);

function copiarTexto() {
    let textoCopiado = document.getElementById("reparo__preview");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Control + c Efetuado : \n" + textoCopiado.value);
}

