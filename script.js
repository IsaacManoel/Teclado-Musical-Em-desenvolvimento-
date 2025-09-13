// Espera o documento HTML ser completamente carregado para executar o script
document.addEventListener('DOMContentLoaded', (event) => {

    // 1. Pega os elementos pelo ID que definimos no HTML
    const divAlvo = document.getElementsByClassName('do');
    const audioPlayer = document.getElementById('do1');

    // 2. Adiciona um "ouvinte" para o evento 'mouseenter' (quando o cursor entra na DIV)
    divAlvo.addEventListener('mouseenter', () => {
        // Toca o áudio
        audioPlayer.play();
    });

    // 3. Adiciona um "ouvinte" para o evento 'mouseleave' (quando o cursor sai da DIV)
    divAlvo.addEventListener('mouseleave', () => {
        // Pausa o áudio
        audioPlayer.pause();
        // Opcional: Reinicia o áudio para o começo
        audioPlayer.currentTime = 0;
    });

});