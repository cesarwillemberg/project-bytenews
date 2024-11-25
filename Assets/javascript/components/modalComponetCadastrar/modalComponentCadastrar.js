class ModalComponent extends HTMLElement {
    constructor() {
        super();
        this.build();
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' });
        const modal = this.createModal();
        const modalContent = this.createModalContent();
        const closeButton = this.createCloseButton();
        const title = this.createTitle();
        const formContainer = this.createFormContainer();

        modalContent.appendChild(closeButton);
        modalContent.appendChild(title);
        modalContent.appendChild(formContainer);
        modal.appendChild(modalContent);
        shadow.appendChild(modal);

        const style = this.styles();
        shadow.appendChild(style);

        this.setupModalEvents(modal, closeButton);
    }

    createModal() {
        const modal = document.createElement('div');
        modal.setAttribute('class', 'modal close');
        modal.setAttribute('id', 'modal');
        return modal;
    }

    openModal() {
        const modal = this.shadowRoot.querySelector('.modal');
        modal.classList.remove('close');
        modal.classList.add('open');
        modal.style.display = 'flex';
    }

    closeModal() {
        const modal = this.shadowRoot.querySelector('.modal');
        modal.classList.remove('open');
        modal.classList.add('close');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500);
    }

    setupModalEvents(modal, closeButton) {
        const openModalButton = document.getElementById("userIcon");
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
        closeButton.setAttribute('class', 'close-button');
        closeButton.innerHTML = '&times;';
        return closeButton;
    }

    createTitle() {
        const title = document.createElement('h1');
        title.textContent = this.getAttribute('title') || 'ByteNews.com';
        return title;
    }

    createFormContainer() {
        const formContainer = document.createElement('div');
        formContainer.setAttribute('class', 'form-container');
        const container = this.createFormElements();
        formContainer.appendChild(container);
        return formContainer;
    }

    createFormElements() {
        const container = document.createElement('div');
        container.setAttribute('class', 'conteinr');

        const iconContainer = this.createIconContainer();
        const heading = this.createHeading();
        const form = this.createForm();

        container.appendChild(iconContainer);
        container.appendChild(heading);
        container.appendChild(form);

        return container;
    }

    createIconContainer() {
        const iconContainer = document.createElement('div');
        iconContainer.setAttribute('class', 'icon-container');
        const iconImg = document.createElement('img');
        iconImg.src = this.getAttribute('iconSrc') || 'https://via.placeholder.com/120';
        iconImg.alt = this.getAttribute('iconAlt') || 'Ícone de usuário';
        iconContainer.appendChild(iconImg);
        return iconContainer;
    }

    createHeading() {
        const heading = document.createElement('h2');
        heading.textContent = this.getAttribute('heading') || 'Registrar-se para receber notificações';
        return heading;
    }

    createForm() {
        const form = document.createElement('form');
        form.appendChild(this.createFormInput('nome', 'Nome Completo', 'text', 'Nome completo'));
        form.appendChild(this.createFormInput('email', 'Email', 'email', 'Email'));
        form.appendChild(this.createSubmitButton());
        return form;
    }

    createFormInput(id, label, type, placeholder) {
        const labelElement = document.createElement('label');
        labelElement.setAttribute('for', id);
        labelElement.innerHTML = `${label} <span style="color: red;">*</span>`;

        const input = document.createElement('input');
        input.setAttribute('type', type);
        input.setAttribute('id', id);
        input.setAttribute('placeholder', placeholder);
        input.setAttribute('required', '');

        const container = document.createElement('div');
        container.className = 'input-container';
        container.appendChild(labelElement);
        container.appendChild(input);

        return container;
    }

    createSubmitButton() {
        const buttonContainer = document.createElement('div');
        buttonContainer.setAttribute('class', 'div-bnt_submit');

        const submitButton = document.createElement('button');
        submitButton.setAttribute('type', 'submit');
        submitButton.setAttribute('id', 'bnt_submit');
        submitButton.textContent = 'Registrar';

        buttonContainer.appendChild(submitButton);
        return buttonContainer;
    }

    styles() {
        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = '/Assets/styles/css/style.css';
        return style;
    }
}

customElements.define('modal-component', ModalComponent);
