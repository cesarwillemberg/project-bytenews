class NewsCard extends HTMLElement {
    constructor() {
        super();
        this.build();
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = this.createCard();
        const styles = this.styles();

        shadow.appendChild(styles);
        shadow.appendChild(wrapper);
    }

    createCard() {
        const wrapper = document.createElement('div');
        wrapper.className = 'news-category-highlights';

        // Título da categoria
        const tag = document.createElement('h2');
        tag.className = 'tag-highlights';
        tag.textContent = this.getAttribute('category') || 'Categoria >';

        // Conteúdo do card
        const content = document.createElement('div');
        content.className = 'news-content-highlights';

        // Imagem
        const img = document.createElement('img');
        img.src = this.getAttribute('image') || 'Assets/imgs/h1.png';
        img.alt = this.getAttribute('imageAlt') || 'Notícia';
        img.className = 'img-noticia-brasil';

        // Texto do card
        const texts = document.createElement('div');
        texts.className = 'texts-content-highlights';

        // Título
        const title = document.createElement('h3');
        title.className = 'title-highlights';
        title.innerHTML = `<strong>${this.getAttribute('title') || 'Título da notícia'}</strong>`;

        // Subtítulo
        const subtitle = document.createElement('p');
        subtitle.className = 'subtitle-highlights';
        subtitle.textContent = this.getAttribute('subtitle') || 'Descrição da notícia';

        // Data e hora
        const datetimeWrapper = document.createElement('div');
        datetimeWrapper.className = 'data-time-highlights';

        const timeIcon = document.createElement('img');
        timeIcon.src = this.getAttribute('timeIcon') || 'Assets/imgs/h14.png';
        timeIcon.alt = 'Ícone de tempo';
        timeIcon.className = 'time';

        const datetime = document.createElement('span');
        datetime.className = 'data-hora';
        datetime.textContent = this.getAttribute('datetime') || 'Data e hora';

        datetimeWrapper.appendChild(timeIcon);
        datetimeWrapper.appendChild(datetime);

        // Append no texto
        texts.appendChild(title);
        texts.appendChild(subtitle);
        texts.appendChild(datetimeWrapper);

        // Append no conteúdo principal
        content.appendChild(img);
        content.appendChild(texts);

        // Append ao wrapper principal
        wrapper.appendChild(tag);
        wrapper.appendChild(content);

        return wrapper;
    }

    styles() {
        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = '/Assets/styles/css/style.css';
        
        return style;
    }
}

customElements.define('news-card', NewsCard);
