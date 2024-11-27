class FooterTag extends HTMLElement {
    constructor() {
        super();
        this.build();
    }

    build() {
        const shadow = this.attachShadow({mode: 'open'});
        const footer = this.createFooter();
        const styles = this.styles();
        shadow.appendChild(styles);
        shadow.appendChild(footer);
    }

    createFooter() {
        const footer = document.createElement('footer');
        footer.className = 'footer-container';

        const containerFooter = document.createElement('div');
        containerFooter.className = 'container-footer';

        const textTrust = document.createElement('p');
        textTrust.className = 'text-trust';
        textTrust.textContent = 'Por que você pode confiar na ByteNews.com';

        const hr1 = document.createElement('hr');

        const insideHr = document.createElement('div');
        insideHr.className = 'inside-hr';

        const footerContentLinks = document.createElement('div');
        footerContentLinks.className = 'footer-content-links';

        const ulLinks = document.createElement('ul');
        ulLinks.className = 'ul-links';
        const links = [
            { text: 'Termos de uso', href: '#' },
            { text: 'Sobre a ByteNews.com', href: '#' },
            { text: 'Política de privacidade', href: '#' },
            { text: 'Cookies', href: '#' }
        ];

        links.forEach(link => {
            const li = document.createElement('li');
            li.className = 'li-links';
            const a = document.createElement('a');
            a.className = 'a-links';
            a.href = link.href;
            a.textContent = link.text;
            li.appendChild(a);
            ulLinks.appendChild(li);
        });

        footerContentLinks.appendChild(ulLinks);

        const socialIcons = document.createElement('div');
        socialIcons.className = 'social-icons';

        const ulIcons = document.createElement('ul');
        ulIcons.className = 'ul-icons';

        const icons = [
            { src: '/Assets/imgs/iconeFACE.png', alt: 'Facebook', href: '#' },
            { src: '/Assets/imgs/iconeX.png', alt: 'Twitter', href: '#' },
            { src: '/Assets/imgs/iconeGIT.png', alt: 'Instagram', href: '#' },
            { src: '/Assets/imgs/iconeGOOGLE.png', alt: 'Google', href: '#' }
        ];

        icons.forEach(icon => {
            const li = document.createElement('li');
            li.className = 'li-icons';
            const a = document.createElement('a');
            a.className = 'a-icons';
            a.href = icon.href;

            const img = document.createElement('img');
            img.src = icon.src;
            img.alt = icon.alt;

            a.appendChild(img);
            li.appendChild(a);
            ulIcons.appendChild(li);
        });

        socialIcons.appendChild(ulIcons);

        insideHr.appendChild(footerContentLinks);
        insideHr.appendChild(socialIcons);

        const hr2 = document.createElement('hr');

        const footerNote = document.createElement('div');
        footerNote.className = 'footer-note';

        const noteText = document.createElement('p');
        noteText.innerHTML = `
            © 2024 ByteNews.com. A ByteNews.com não se responsabiliza pelo conteúdo de
            sites externos. Leia sobre nossa política em relação a <strong class="external-links">links externos</strong>.
        `;

        footerNote.appendChild(noteText);

        containerFooter.appendChild(textTrust);
        containerFooter.appendChild(hr1);
        containerFooter.appendChild(insideHr);
        containerFooter.appendChild(hr2);
        containerFooter.appendChild(footerNote);
        footer.appendChild(containerFooter);

        return footer;
    }

    styles() {
        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = '/Assets/styles/css/style.css';
        return style;
    }

}

customElements.define('footer-tag', FooterTag);