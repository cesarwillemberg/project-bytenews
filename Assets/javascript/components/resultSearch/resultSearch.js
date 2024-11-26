class ResultSearch extends HTMLElement {
    constructor() {
        super();
        this.build();
    }

    build() {
        const shadow = this.attachShadow({mode: 'open'});
        const resultSearch = this.createResultSearch();
        const styles = this.styles();

        const noResults = this.createNoResults();

        shadow.appendChild(styles);
        shadow.appendChild(resultSearch);

        shadow.appendChild(noResults);

    }

    createResultSearch() {
        const divResultSearch = document.createElement('div');
        divResultSearch.setAttribute('class', 'result-search');

        const items = document.createElement('ul');
        items.setAttribute('class', 'items');

        const item = document.createElement('li');
        item.setAttribute('class', 'item');

        const itemImage = document.createElement('div');
        itemImage.setAttribute('class', 'item-image');

        const image = document.createElement('img');
        itemImage.appendChild(image);

        const itemContent = document.createElement('div');
        itemContent.setAttribute('class', 'item-content');

        const title = document.createElement('h2');
        title.setAttribute('class', 'item-title');

        const divContentSubtitle = document.createElement('div');
        divContentSubtitle.setAttribute('class', 'divContentSubtitle');

        const subtitle = document.createElement('p');
        subtitle.setAttribute('class', 'item-subtitle');

        const subtitleTextSpan = document.createElement('span');
        subtitleTextSpan.setAttribute('class', 'item-subtitle-text');

        const description = document.createElement('p');
        description.setAttribute('class', 'item-description');

        if (!this.shadowRoot.querySelector('#no_results')) {
            const noResults = this.createNoResults();
            items.appendChild(noResults);
        }

        

        
        itemImage.appendChild(image)

        item.appendChild(itemImage);

        itemContent.appendChild(title);
        divContentSubtitle.appendChild(subtitleTextSpan);
        divContentSubtitle.appendChild(subtitle);
        itemContent.appendChild(divContentSubtitle);
        itemContent.appendChild(description);
        item.appendChild(itemContent);
        items.appendChild(item);

        divResultSearch.appendChild(items);

        return divResultSearch;
    }

    createNoResults() {
        const item_noresults = document.createElement('li');
        item_noresults.setAttribute('id', 'no_results');

        const no_results = document.createElement('p');
        no_results.textContent = 'Nenhum resultado encontrado';

        item_noresults.appendChild(no_results);

        return item_noresults;
    }

    static get observedAttributes() {
        return ['data-title', 'data-img', 'data-subtitle', 'data-item-subtitle-text', 'data-description'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        const shadow = this.shadowRoot;

        if (name === 'data-title') {
            shadow.querySelector('.item-title').textContent = newValue;
        } else if (name === 'data-img') {
            shadow.querySelector('.item-image img').setAttribute('src', newValue);
        } else if (name === 'data-subtitle') {
            shadow.querySelector('.item-subtitle').textContent = newValue;
        } else if( name === 'data-item-subtitle-text') {
            shadow.querySelector('.item-subtitle-text').innerHTML = newValue
        } else if (name === 'data-description') {
            shadow.querySelector('.item-description').textContent = newValue;
        }
    }


    styles() {
        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = '/Assets/styles/css/style.css';

        const fontAwesomeLink = document.createElement('link');
        fontAwesomeLink.rel = 'stylesheet';
        fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css';

        const shadow = this.shadowRoot;
        shadow.appendChild(fontAwesomeLink);
        return style;
    }

}

customElements.define('result-search', ResultSearch);