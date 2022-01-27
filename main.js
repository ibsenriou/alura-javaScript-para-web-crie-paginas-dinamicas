function tocaSom(seletorDeTagAudio) {
    const element = document.querySelector(seletorDeTagAudio);
    
    if (element && element.localName === 'audio') {
        element.play();
    } else {
        alert('Elemento de aúdio não encontrado ou seletor inválido!');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = () => {
        tocaSom(idAudio);
    };

    tecla.onkeydown = (event) => {
        const teclaEnterOuTeclaEspaco = event.code === 'Enter' || event.code === 'Space';

        if (teclaEnterOuTeclaEspaco) {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = (event) => {
        if (event) {
            tecla.classList.remove('ativa')
        }
    }

}
