class NewsCategory extends HTMLElement {
    constructor() {
        super();
        this.build();
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' });
        const category = this.getAttribute('category') || '';
        const categoryLink = this.getAttribute('categoryLink') || '#';
        const imageSrc = this.getAttribute('image') || '';
        const imageAlt = this.getAttribute('imageAlt') || 'Imagem da notícia';
        const title = this.getAttribute('title') || 'Título da notícia';
        const link = this.getAttribute('link') || '#';
        const timeIcon = this.getAttribute('timeIcon') || '';
        const datetime = this.getAttribute('datetime') || '';

        const container = document.createElement('div');
        container.className = 'news-category';
        container.innerHTML = `
            <h2><a href="${categoryLink}" class="tag-link" >${category}</a></h2>
            <div class="news-item">
                <img src="${imageSrc}" alt="${imageAlt}" class="img-noticia">
                <div class="news-content">
                    <h3>
                        <a href="${link}" class="title-link">
                            <strong>${title}</strong>
                        </a>
                    </h3>
                    <div class="news-time">
                        <img src="${timeIcon}" alt="Ícone de hora" class="time">
                        <span class="data-hora-grid">${datetime}</span>
                    </div>
                </div>
            </div>
        `;

        shadow.appendChild(this.styles());
        shadow.appendChild(container);
    }

    styles() {
        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = '/Assets/styles/css/style.css';
        return style;
    }
}

customElements.define('news-category', NewsCategory);