export  function createHeader(headers) {
    for (const h of headers) {
        var header = document.createElement('header');
        var divTitle = document.createElement('div');
        var h1 = document.createElement('h1');
        var divIcons = document.createElement('div');
        var icons = [
            { src: '/Assets/imgs/search.png', alt: 'Buscar' },
            { src: '/Assets/imgs/barra.png', alt: 'Buscar' },
            { src: '/Assets/imgs/user.png', alt: 'Perfil' }
        ];
    
        header.className = 'header';
        divTitle.className = 'title';
        divIcons.className = 'icons';
    
        h1.innerHTML = `<strong>ByteNews.com</strong>`
        divTitle.appendChild(h1);
    
        icons.forEach(function(icon) {
            var img = document.createElement('img');
            img.src = icon.src;
            img.alt = icon.alt;
            img.className = 'icon';
            divIcons.appendChild(img);
        });
    
        header.appendChild(divTitle);
        header.appendChild(divIcons);

        h.appendChild(header);
    }
}

export function checkComponents() {
    var headers = document.getElementsByClassName('header-container');
    if (headers) {
        createHeader(headers);
    }
}