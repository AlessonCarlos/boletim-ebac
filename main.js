const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="celebrar" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="triste" />';
const atividades = [];
const notas = [];
const notaMinima = parseFloat(prompt("Digite a nota mínima"));

let linhas = '';
const spanAprovado = '<span class="resultado aprovado"></span>';
const spanReprovado = '<span class="resultado Reprovado"></span>';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
    atualizaMediaFinal();
}); 

function adicionarLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)) {
        alert(`Atividade: ${inputNomeAtividade.value} já foi inserida`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? 'Aprovado' : 'Reprovado'}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2); // Arredonda para 2 casas decimais
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado;
}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return media = somaDasNotas / notas.length;
}

