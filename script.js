function verificar() {
    var nota = window.document.querySelector('input#txtnota')
    var res = window.document.querySelector('div#resposta')
    var nota = Number(txtnota.value)
    res.innerHTML = `<p> Com a nota <strong>${nota}</strong></p>`
    
    if (nota >= 6 && nota <= 10) 
    {
        resposta.innerHTML += `<p> O aluno foi aprovado! </p>`
    }
    else if (nota >= 0 && nota < 6)
    {
        resposta.innerHTML += `<p> O aluno foi reprovado! </p>`
    } 
    else
    {
        window.alert(`[ERRO] Digite as notas de 0 a 10!`)
    }
}