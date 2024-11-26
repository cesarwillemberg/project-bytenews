class InputSearch extends HTMLElement {
    constructor() {
        super();
        this.build();
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' });

        const container = this.createContainer();
        const styles = this.styles();

        shadow.appendChild(styles);
        shadow.appendChild(container);
    }

    createContainer() {
        // Criando o contêiner principal
        const divContainer = document.createElement('div');
        divContainer.setAttribute('class', 'container');

        // Criando o grupo de input
        const divInputGroup = document.createElement('div');
        divInputGroup.setAttribute('class', 'input-group');

        // Adicionando ícone
        const divInputIcon = document.createElement('input-icon');
        divInputIcon.setAttribute('class', 'input-icon');
        divInputIcon.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`;

        // Criando o input
        const inputSearch = document.createElement('input');
        inputSearch.setAttribute('type', 'text');
        inputSearch.setAttribute('id', 'search');
        inputSearch.setAttribute('class', 'input-field');
        inputSearch.setAttribute('placeholder', 'Pesquisar');

        divInputGroup.appendChild(divInputIcon);
        divInputGroup.appendChild(inputSearch);
        divContainer.appendChild(divInputGroup);

        return divContainer;
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
customElements.define('input-search', InputSearch);
