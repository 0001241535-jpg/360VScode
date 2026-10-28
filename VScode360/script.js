document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const cenaSelecionada = urlParams.get('cena');
    const tituloElemento = document.getElementById('panorama-title');
    
    let imagem360 = "";
    let tituloEspaco = "";

    switch(cenaSelecionada) {
        case 'intervalo':
            imagem360 = '1000105728 (1).jpg';
            tituloEspaco = 'Área de Intervalo';
            break;
        case 'patio':
            imagem360 = '1000105731 (1).jpg';
            tituloEspaco = 'Estacionamento e Pátio Central';
            break;
        case 'sanitario':
            imagem360 = '1000105735 (2).jpg';
            tituloEspaco = 'Setor Sanitário';
            break;
        default:
            imagem360 = '1000105731 (1).jpg';
            tituloEspaco = 'Área Externa SENAI';
    }

    if(tituloElemento) {
        tituloElemento.textContent = tituloEspaco;
    }

    pannellum.viewer('viewer-360', {
        "type": "equirectangular",
        "panorama": imagem360,
        "autoLoad": true,
        "compass": false,
        "mouseZoom": true
    });
});
