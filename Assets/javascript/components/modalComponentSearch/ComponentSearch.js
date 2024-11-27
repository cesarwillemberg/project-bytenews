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
    
        const inputSearchElement = shadow.querySelector('input-search');
        if (inputSearchElement) {
            customElements.whenDefined('input-search').then(() => {
                const inputField = inputSearchElement.shadowRoot.querySelector('.input-field');                
                if (inputField) {
                    inputField.addEventListener('input', this.searchNews.bind(this));
                }
            });
        }
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

        const resultSearchContainer = this.shadowRoot.querySelector('.result-search-container');
        if (resultSearchContainer) {
            resultSearchContainer.style.display = 'none';
        }
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
                this.createResultSearch([]);
                this.clearInputField();
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

    // createInputSearch() {
    //     const divContainer = document.createElement('div');
    //     divContainer.setAttribute('class', 'container');

    //     const divInputGroup = document.createElement('div');
    //     divInputGroup.setAttribute('class', 'input-group');

    //     const divInputIcon = document.createElement('input-icon');
    //     divInputIcon.setAttribute('class', 'input-icon');
    //     divInputIcon.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`;

    //     const inputSearch = document.createElement('input');
    //     inputSearch.setAttribute('type', 'text');
    //     inputSearch.setAttribute('id', 'search');
    //     inputSearch.setAttribute('class', 'input-field');
    //     inputSearch.setAttribute('placeholder', 'Pesquisar');

    //     divInputGroup.appendChild(divInputIcon);
    //     divInputGroup.appendChild(inputSearch);
    //     divContainer.appendChild(divInputGroup);

    //     return divContainer;

    // }

    createInputSearch() {
        const divContainer = document.createElement('div');
        divContainer.setAttribute('class', 'input-search-container');

        const inputSearch = document.createElement('input-search');
        divContainer.appendChild(inputSearch);

        return divContainer;
    }

    clearInputField() {
        const inputSearchElement = this.shadowRoot.querySelector('input-search');
        if (inputSearchElement) {
            const inputField = inputSearchElement.shadowRoot.querySelector('.input-field');
            if (inputField) {
                inputField.value = '';
            }
        }
    }


    async createFetchNews(searchValue) {
        const apiUrl = `http://localhost:3000/news/${encodeURIComponent(searchValue)}`;
    
        return await fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar notícias');
                }
                return response.json();
            })
            .then(data => {
                console.log('Resultados encontrados:', data);
                this.createResultSearch(data);
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
                this.createResultSearch([]);
            });
    }

    // createResultSearch() {
    //     const divResultSearch = document.createElement('div');
    //     divResultSearch.setAttribute('class', 'result-search');

    //     const items = document.createElement('ul');
    //     items.setAttribute('class', 'items');

    //     const item = document.createElement('li');
    //     item.setAttribute('class', 'item');

    //     const itemImage = document.createElement('div');
    //     itemImage.setAttribute('class', 'item-image');

    //     const image = document.createElement('img');
    //     image.setAttribute('src', '/Assets/imgs/h1.png');

    //     const itemContent = document.createElement('div');
    //     itemContent.setAttribute('class', 'item-content');

    //     const title = document.createElement('h2');
    //     title.setAttribute('class', 'item-title');
    //     title.textContent = `O fogo parece estar dentro de casa, é difícil respirar': o impacto da fumaça das queimadas na saúde`;

    //     const subtitle = document.createElement('p');
    //     subtitle.setAttribute('class', 'item-subtitle');
    //     subtitle.innerHTML = '<i class="fa-regular fa-newspaper"></i> Noticia';

    //     const description = document.createElement('p');
    //     description.setAttribute('class', 'item-description');
    //     description.textContent = 'Descrição';

    //     const item_noresults = document.createElement('li');
    //     item_noresults.setAttribute('id', 'no_results');

    //     const no_results = document.createElement('p');
    //     no_results.textContent = 'Nenhum resultado encontrado';

    //     item_noresults.appendChild(no_results);

        
    //     itemImage.appendChild(image)
    //     item.appendChild(itemImage);
    //     itemContent.appendChild(title);
    //     itemContent.appendChild(subtitle);
    //     itemContent.appendChild(description);
    //     item.appendChild(itemContent);
    //     items.appendChild(item);
    //     items.appendChild(item_noresults);

    //     divResultSearch.appendChild(items);



    //     return divResultSearch;
    // }

    createResultSearch(results = []) {
        const container = this.shadowRoot.querySelector('.result-search-container') || document.createElement('div');
        container.setAttribute('class', 'result-search-container');       

        container.innerHTML = '';
        
        if (results.length == 0) {    
            const items = document.createElement('ul');
            items.setAttribute('class', 'items');

            const item_noresults = document.createElement('li');
            item_noresults.setAttribute('id', 'no_results');

            const no_results = document.createElement('p');
            no_results.textContent = 'Nenhum resultado encontrado';

            item_noresults.appendChild(no_results);
            items.appendChild(item_noresults);
            container.appendChild(items);

            container.style.display = 'flex';
            item_noresults.style.display = 'block';
        } else {
            results.forEach(result => {               
                const resultSearchComponent = document.createElement('result-search');

                resultSearchComponent.setAttribute('data-title', `${result.title}`);
                resultSearchComponent.setAttribute('data-title-link', `${result.linkNews}`);
                resultSearchComponent.setAttribute('data-img', `${result.imgSrc1}`);
                resultSearchComponent.setAttribute('data-subtitle', `${result.tags}`);
                resultSearchComponent.setAttribute('data-item-subtitle-text', `<i class="fa-regular fa-newspaper"></i>`);
                resultSearchComponent.setAttribute('data-description', `${result.description}`);

                container.appendChild(resultSearchComponent);                
            });
        }    

        if (results.length > 0 || container.querySelector('#no_results')) {
            container.style.display = 'block';
        }

        if (!this.shadowRoot.contains(container)) {
            this.shadowRoot.appendChild(container);
        }
        return container;
    }

    // searchNews() {
    //     const searchInput = this.shadowRoot.querySelector('#search');

    //     searchInput.addEventListener('input', (event) => {
    //         const searchValue = formatString(event.target.value);
    //         const items = this.shadowRoot.querySelectorAll('.items .item');
    //         const noResults = this.shadowRoot.getElementById('no_results');
    //         const resultSearch = this.shadowRoot.querySelector('.result-search');             
    //         let hasResults = false;

    //         if(searchValue != '') {
    //             resultSearch.style.display = 'block';
    //             items.forEach((item) => {
    //                 const itemTitle = item.querySelector('.item-title').textContent;
    //                 const itemDescription = item.querySelector('.item-description').textContent;
    //                 if (formatString(itemTitle).indexOf(searchValue) !== -1 
    //                 || formatString(itemDescription).indexOf(searchValue) !== -1) 
    //                 {
    //                     item.style.display = 'flex';
    //                     hasResults = true;
    //                 } else {
    //                     item.style.display = 'none';
    //                 }
    //             })
    //         } else {
    //             items.forEach((item) => item.style.display = 'flex');
    //             resultSearch.style.display = 'none';
    //             noResults.style.display = 'none';
    //         }

    //         if (hasResults) {
    //             noResults.style.display = 'none';
    //         } else {
    //             noResults.style.display = 'block';
    //         }
    //     })

    //     function formatString(value) {
    //         return value.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    //     }

    // }

    async searchNews(event) {
        const searchValue = formatString(event.target.value);
        const resultSearchContainer = this.shadowRoot.querySelector('.result-search-container');

        if (searchValue !== '') {
            await this.createFetchNews(searchValue);
        } else {
            this.createResultSearch([]);
            const resultSearchContainer = this.shadowRoot.querySelector('.result-search-container');
            if (resultSearchContainer) {
                resultSearchContainer.style.display = 'none';
            }
        }
        
        // Lógica de exibição dos resultados na interface
        // const resultSearch = this.shadowRoot.querySelector('result-search'); 
    
        // if (resultSearch) {
        //     const resultSearchShadow = resultSearch.shadowRoot;
        //     const resultSearchClass = resultSearchShadow.querySelector('.result-search'); 
        
        //     const noResults = resultSearchShadow.getElementById('no_results'); 
            
        //     const items = resultSearchShadow.querySelectorAll('.items .item');
        
        //     let hasResults = false;
            
        //     if (searchValue !== '') {
        //         resultSearchClass.style.display = 'block';
        //         items.forEach((item) => {
        //             const itemTitle = item.querySelector('.item-title').textContent;
        //             const itemDescription = item.querySelector('.item-description').textContent;
        //             if (formatString(itemTitle).indexOf(searchValue) !== -1 || formatString(itemDescription).indexOf(searchValue) !== -1) {
        //                 item.style.display = 'flex';
        //                 hasResults = true;
        //             } else {
        //                 item.style.display = 'none';
        //             }
        //         });
        //     } else {
        //         items.forEach((item) => item.style.display = 'flex');
        //         resultSearchClass.style.display = 'none';
        //         noResults.style.display = 'none';
        //     }
            
        //     // Mostrar ou esconder o aviso de "sem resultados"
        //     if (hasResults) {
        //         noResults.style.display = 'none';
        //     } else {
        //         noResults.style.display = 'block';
        //     }
        // }
    
        function formatString(value) {
            return value.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
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