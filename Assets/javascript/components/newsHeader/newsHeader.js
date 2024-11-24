class NewsHeader extends HTMLElement {
    constructor() {
        super();
        this.build();
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' });
        const newsHeader = this.createNewsHeader();
        const styles = this.styles();
        shadow.appendChild(styles);
        shadow.appendChild(newsHeader);
    }

    createNewsHeader() {
        const container = document.createElement('div');
        container.classList.add('news-header');

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('news-title');
        const titleElement = document.createElement('h2');
        titleElement.innerHTML = `<strong>${this.getAttribute('title')}</strong>`;
        titleDiv.appendChild(titleElement);

        const authorDiv = document.createElement('div');
        authorDiv.classList.add('author-info-container');
        const authorInfoContainer = document.createElement('div');
        authorInfoContainer.classList.add('container-info-author');
        const authorInfo = document.createElement('p');
        authorInfo.classList.add('author-info');
        authorInfo.innerHTML = this.getAttribute('authorInfo');
        authorInfoContainer.appendChild(authorInfo);
        authorDiv.appendChild(authorInfoContainer);
        container.appendChild(titleDiv);
        container.appendChild(authorDiv);

        return container;
    }

    styles() {
        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = '/Assets/styles/css/style.css';
        return style;
    }
}

customElements.define('news-header', NewsHeader);
