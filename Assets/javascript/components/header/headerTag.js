class HeaderTag extends HTMLElement {
    constructor() {
        super();
        this.build();
    }

    build() {
        const shadow = this.attachShadow({mode: 'open'});
        const header = this.createHeader();
        const styles = this.styles();
        shadow.appendChild(styles);
        shadow.appendChild(header);
    }

    createHeader() {
        const header = document.createElement('header');
        const divTitle = document.createElement('div');
        const h1 = document.createElement('h1');
        const divIcons = document.createElement('div');
        const icons = [
            { src: '/Assets/imgs/search.png', alt: 'Buscar' },
            { src: '/Assets/imgs/barra.png', alt: 'Buscar' },
            { src: '/Assets/imgs/user.png', alt: 'Perfil' }
        ];

        header.className = 'header';
        divTitle.className = 'title';
        divIcons.className = 'icons';

        h1.innerHTML = `<strong>ByteNews.com</strong>`;
        divTitle.appendChild(h1);

        icons.forEach(icon => {
            const img = document.createElement('img');
            img.src = icon.src;
            img.alt = icon.alt;
            img.className = 'icon';
            divIcons.appendChild(img);
        });

        header.appendChild(divTitle);
        header.appendChild(divIcons);

        return header;
    }

    // styles() {
    //     const style = document.createElement('style');
    //     style.textContent = `
    //         .header {
    //             display: flex; 
    //             justify-content: space-between; 
    //             align-items: center;         
    //             width: 100%;
    //             padding: 10px 20px;
    //             box-sizing: border-box;  
    //             background-color: #205BA9; 
    //             color: white;
    //             height: 6rem;
    //         }

    //         .title {
    //             flex-grow: 1;                  
    //             text-align: center;         
    //         }

    //         h1 {
    //             margin: 0;
    //         }

    //         .icons {
    //             display: flex;                 
    //             gap: 15px;
    //         }

    //         .icon {
    //             width: 30px;
    //             height: 30px;
    //             object-fit: contain;
    //         }
    //     `;

    //     return style;
    // }
    styles() {
        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = '/Assets/styles/css/style.css';
        return style;
    }
}


customElements.define('header-tag', HeaderTag);