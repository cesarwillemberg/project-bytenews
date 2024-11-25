class ModalComponentSearch extends HTMLElement {
    constructor() {
        super();
        this.build();
    }

    build() {
        const shadow = this.attachShadow({mode: 'open'});
        const modal = this.createModal();
        const styles = this.styles();
        
        const modalContent = this.createModalContent();
        const closeButton = this.createCloseButton();
        const title = this.createTitle();
        const inputSearch = this.createInputSearch();
        const resultSearch = this.createResultSearch();

        modalContent.appendChild(closeButton);
        modalContent.appendChild(title);
        modalContent.appendChild(inputSearch);
        modalContent.appendChild(resultSearch);

        modal.appendChild(modalContent);



        shadow.appendChild(styles);
        shadow.appendChild(modal);

        this.setupModalEvents(modal, closeButton);


    }

    createModal() {
        const modal = document.createElement('div');
        modal.setAttribute('class', 'modal close');
        modal.setAttribute('id', 'modalSearch');
        return modal;
    }

    openModal() {
        const modal = this.shadowRoot.querySelector('#modalSearch');
        modal.classList.remove('close');
        modal.classList.add('open');
        modal.style.display = 'flex';
    }

    closeModal() {
        const modal = this.shadowRoot.querySelector('#modalSearch');
        modal.classList.remove('open');
        modal.classList.add('close');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500);
    }

    setupModalEvents(modal, closeButton) {
        const openModalButton = document.getElementById("searchIcon");
        if (openModalButton) {
            openModalButton.addEventListener("click", () => {
                modal.classList.remove("close");
                modal.classList.add("open");
                modal.style.display = "flex";
            });
        }

        closeButton.addEventListener("click", () => {
            modal.classList.remove("open");
            modal.classList.add("close");
            setTimeout(() => {
                modal.style.display = "none";
            }, 500);
        });

        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.classList.remove("open");
                modal.classList.add("close");
                setTimeout(() => {
                    modal.style.display = "none";
                }, 500);
            }
        });
    }

    createModalContent() {
        const modalContent = document.createElement('div');
        modalContent.setAttribute('class', 'modal-content');
        return modalContent;
    }

    createCloseButton() {
        const closeButton = document.createElement('span');
        closeButton.setAttribute('class', 'close-button-search');
        closeButton.innerHTML = '&times;';
        return closeButton;
    }

    createTitle() {
        const title = document.createElement('h1');
        title.textContent = this.getAttribute('title') || 'Pesquisar Noticias';
        return title;
    }

    createInputSearch() {
        const divContainer = document.createElement('div');
        divContainer.setAttribute('class', 'container');

        const divInputGroup = document.createElement('div');
        divInputGroup.setAttribute('class', 'input-group');

        const divInputIcon = document.createElement('input-icon');
        divInputIcon.setAttribute('class', 'input-icon');
        divInputIcon.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`;

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
        image.setAttribute('src', '/Assets/imgs/h1.png');

        const itemContent = document.createElement('div');
        itemContent.setAttribute('class', 'item-content');

        const title = document.createElement('h2');
        title.setAttribute('class', 'item-title');
        title.textContent = `O fogo parece estar dentro de casa, é difícil respirar': o impacto da fumaça das queimadas na saúde`;

        const subtitle = document.createElement('p');
        subtitle.setAttribute('class', 'item-subtitle');
        subtitle.innerHTML = '<i class="fa-regular fa-newspaper"></i>';

        const description = document.createElement('p');
        description.setAttribute('class', 'item-description');
        description.textContent = 'Descrição';



        itemImage.appendChild(image)
        item.appendChild(itemImage);
        itemContent.appendChild(title);
        itemContent.appendChild(subtitle);
        itemContent.appendChild(description);
        item.appendChild(itemContent);
        items.appendChild(item);

        divResultSearch.appendChild(items);



        return divResultSearch;
    }

    searchNews() {
        const searchInput = this.shadowRoot.querySelector('#search');

        searchInput.addEventListener('input', (event) => {
            const searchValue = event.target.value;
            const items = this.shadowRoot.querySelectorAll('.items .item');

            items.forEach((item) => {
                item.textContent.indexOf(searchValue)
            })

            // this.fetchNews(searchValue);


        })

        function formatString(value) {
            return value.toLowerCase().trim();
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

customElements.define('modal-component-search', ModalComponentSearch);