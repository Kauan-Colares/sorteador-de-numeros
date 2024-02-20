function sortear(){
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const de = parseInt(document.getElementById('de').value);
    const ate = parseInt(document.getElementById('ate').value);

    const sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate); 

        if(quantidade > (ate - de + 1)){
            alert('A quantidade de números desejada é menor que o intervalo entre os números escolhidos, aumente o intervalo, por favor.');
            return;
        }

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        if (de >= ate) {
            alert('O campo "Do número" deve ser inferior ao campo "Até o número". Verifique por favor.');
            return;
        }

        sorteados.push(numero);
        alterarStatusBtn();
    }

    

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:${sorteados}</label>`;
};

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function alterarStatusBtn(){
    let btnReiniciar = document.getElementById('btn-reiniciar');
    
    if (btnReiniciar.classList.contains('container__botao-desabilitado')) {
        btnReiniciar.classList.remove('container__botao-desabilitado');
        btnReiniciar.classList.add('container__botao');
    } else {
        btnReiniciar.classList.remove('container__botao');
        btnReiniciar.classList.add('container__botao-desabilitado')
    }
};

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    alterarStatusBtn();
}
