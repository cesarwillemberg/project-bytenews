class NavbarTag extends HTMLElement {
    constructor() {
        super();
        this.build();
    }

    build() {
        const shadow = this.attachShadow({mode: 'open'});
        const navbar = this.createNavbar();
        const styles = this.styles();

        shadow.appendChild(styles);
        shadow.appendChild(navbar);
        this.handleButtonClick();
    }

    createNavbar() {
        const currentUrl = window.location.pathname;
        const nav = document.createElement('nav');
        nav.className = 'navbar';

        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger';
        hamburger.setAttribute('aria-label', 'Menu');
        hamburger.textContent = '☰';

        const ul = document.createElement('ul');
        ul.className = 'nav-links';

        const navItems = [];
        let i = 1;
        while (this.hasAttribute(`data-item${i}`)) {
            const itemText = this.getAttribute(`data-item${i}`);
            const itemLink = this.getAttribute(`data-link${i}`);
            const isHidden = this.hasAttribute(`data-hidden${i}`)
            navItems.push({ text: itemText, href: itemLink, hidden: isHidden });
            i++;
        }

        navItems.forEach(item => {
            const li = document.createElement('li');
            if (item.hidden) {
                li.classList.add('hidden');
            }

            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.text;
            if (currentUrl.includes(item.href)) {
                a.classList.add('blue');
            }
            li.appendChild(a);
            ul.appendChild(li);
        });

        nav.appendChild(hamburger);
        nav.appendChild(ul);

        return nav;
    }

    styles() {
        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = '/Assets/styles/css/style.css';
        return style;
    }

    handleButtonClick() {
        const shadowRoot = this.shadowRoot;
        const hamburger = shadowRoot.querySelector('.hamburger');
        const navLinks = shadowRoot.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

}


customElements.define('navbar-tag', NavbarTag);