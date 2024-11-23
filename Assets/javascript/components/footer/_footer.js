function createFooter() {
    for (const f of footers) {
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

        // Criação da lista de links
        const footerContentLinks = document.createElement('div');
        footerContentLinks.className = 'footer-content-links';

        const ulLinks = document.createElement('ul');
        const links = [
            { text: 'Termos de uso', href: '#' },
            { text: 'Sobre a ByteNews.com', href: '#' },
            { text: 'Política de privacidade', href: '#' },
            { text: 'Cookies', href: '#' }
        ];

        links.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.text;
            li.appendChild(a);
            ulLinks.appendChild(li);
        });

        footerContentLinks.appendChild(ulLinks);

        // Criação dos ícones sociais
        const socialIcons = document.createElement('div');
        socialIcons.className = 'social-icons';

        const ulIcons = document.createElement('ul');
        const icons = [
            { src: '/Assets/imgs/iconeFACE.png', alt: 'Facebook', href: '#' },
            { src: '/Assets/imgs/iconeX.png', alt: 'Twitter', href: '#' },
            { src: '/Assets/imgs/iconeGIT.png', alt: 'Instagram', href: '#' },
            { src: '/Assets/imgs/iconeGOOGLE.png', alt: 'Google', href: '#' }
        ];

        icons.forEach(icon => {
            const li = document.createElement('li');
            const a = document.createElement('a');
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

        // Criação da nota no rodapé
        const footerNote = document.createElement('div');
        footerNote.className = 'footer-note';

        const noteText = document.createElement('p');
        noteText.innerHTML = `
            © 2024 ByteNews.com. A ByteNews.com não se responsabiliza pelo conteúdo de
            sites externos. Leia sobre nossa política em relação a <strong class="external-links">links externos</strong>.
        `;

        footerNote.appendChild(noteText);

        // Montagem do footer
        containerFooter.appendChild(textTrust);
        containerFooter.appendChild(hr1);
        containerFooter.appendChild(insideHr);
        containerFooter.appendChild(hr2);
        containerFooter.appendChild(footerNote);
        footer.appendChild(containerFooter);

        f.appendChild(footer);  
    }
}


function checkComponents() {
    var footer = document.getElementsByClassName('footer-container');
    if (footer) {
        createFooter(footer);
    }
} 