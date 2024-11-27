class MostRead extends HTMLElement {
    constructor() {
        super();
        this.build();
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' });
        const mostRead = this.createMostRead();
        const styles = this.styles();
        shadow.appendChild(styles);
        shadow.appendChild(mostRead);
    }

    createMostRead() {
        // Criação do elemento principal
        const article = document.createElement('article');
        article.classList.add('article-final');

        // Container principal
        const containerMaisLidas = document.createElement('div');
        containerMaisLidas.classList.add('div-container-maislidas');

        // Título "MAIS LIDAS"
        const textMaisLidas = document.createElement('div');
        textMaisLidas.classList.add('text-mais-lidas');
        const title = document.createElement('h3');
        title.innerHTML = '<strong>MAIS LIDAS</strong>';
        textMaisLidas.appendChild(title);

        // Container de números
        const numbersMaisLidas = document.createElement('div');
        numbersMaisLidas.classList.add('numbers-mais-lidas');

        // Adicionar os itens baseados nos atributos `data-*`
        const articles = this.getArticlesData();
        articles.forEach(({ imgSrc, alt, text, link }) => {
            const containerNumber = document.createElement('div');
            containerNumber.classList.add('container-number');

            const number = document.createElement('div');
            number.classList.add('number');

            const imgLink = document.createElement('a');
            imgLink.href = link;
            imgLink.target = '_blank'; // Abre o link em uma nova aba
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = alt;
            img.classList.add('article-image');
            imgLink.appendChild(img);

            const textLink = document.createElement('a');
            textLink.href = link;
            
            textLink.target = '_blank'; // Abre o link em uma nova aba
            textLink.textContent = text;

            number.appendChild(imgLink);
            containerNumber.appendChild(number);
            containerNumber.appendChild(textLink);
            numbersMaisLidas.appendChild(containerNumber);
        });

        // Montagem dos elementos
        containerMaisLidas.appendChild(textMaisLidas);
        containerMaisLidas.appendChild(numbersMaisLidas);
        article.appendChild(containerMaisLidas);

        return article;
    }

    getArticlesData() {
        // Extrair os dados dos atributos `data-*`
        const articles = [];
        for (let i = 1; i <= 3; i++) {
            const text = this.getAttribute(`data-text${i}`);
            const imgSrc = this.getAttribute(`data-imgSrc${i}`);
            const alt = this.getAttribute(`data-alt${i}`);
            const link = this.getAttribute(`data-link${i}`) || '#'; // Usa '#' se o link não for fornecido

            if (text && imgSrc && alt) {
                articles.push({ text, imgSrc, alt, link });
            }
        }
        return articles;
    }

    styles() {
        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = '/Assets/styles/css/style.css';
        return style;
    }
}

customElements.define('most-read', MostRead);
