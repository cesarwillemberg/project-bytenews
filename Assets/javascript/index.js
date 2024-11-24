

// document.addEventListener("DOMContentLoaded", (event) => {
//     // checkComponents();
//     const hamburger = document.querySelector('.hamburger');
//     const navLinks = document.querySelector('.nav-links');

//     hamburger.addEventListener('click', () => {
//         navLinks.classList.toggle('show');
//     });
// });

// function checkComponents() {
//     var headers = document.getElementsByClassName('header-container');
//     var footers = document.getElementsByClassName('footer-container-2');
//     var navbars = document.getElementsByClassName('navbar-container');

//     if (headers) {
//         createHeader(headers);
//     }

//     if (navbars) {
//         createNavbar(navbars)
//     }


//     if (footers) {
//         createFooter(footers);
//     }
// }

// function createHeader(headers) {
//     for (const h of headers) {
//         var header = document.createElement('header');
//         var divTitle = document.createElement('div');
//         var h1 = document.createElement('h1');
//         var divIcons = document.createElement('div');
//         var icons = [
//             { src: '/Assets/imgs/search.png', alt: 'Buscar' },
//             { src: '/Assets/imgs/barra.png', alt: 'Buscar' },
//             { src: '/Assets/imgs/user.png', alt: 'Perfil' }
//         ];
    
//         header.className = 'header';
//         divTitle.className = 'title';
//         divIcons.className = 'icons';
    
//         h1.innerHTML = `<strong>ByteNews.com</strong>`
//         divTitle.appendChild(h1);
    
//         icons.forEach(function(icon) {
//             var img = document.createElement('img');
//             img.src = icon.src;
//             img.alt = icon.alt;
//             img.className = 'icon';
//             divIcons.appendChild(img);
//         });
    
//         header.appendChild(divTitle);
//         header.appendChild(divIcons);

//         h.appendChild(header);
//     }
// }

// function createNavbar(navbars) {
//     const currentUrl = window.location.pathname;

//     for (const n of navbars) {
//         const nav = document.createElement('nav');
//         nav.className = 'navbar';
    
//         // Botão hamburger
//         const hamburger = document.createElement('button');
//         hamburger.className = 'hamburger';
//         hamburger.setAttribute('aria-label', 'Menu');
//         hamburger.textContent = '☰';
    
//         // Lista de links
//         const ul = document.createElement('ul');
//         ul.className = 'nav-links';
    
//         const navItems = [
//             { text: 'Home', href: '/index.html', className: 'blue' },
//             { text: 'Brasil', href: '/pages/brasil.html' },
//             { text: 'Internacional', href: '/pages/internacional.html' },
//             { text: 'Tecnologia', href: '/pages/tecnologia.html' },
//             { text: 'Saúde', href: '/pages/saude.html' },
//             { text: 'Ciência', href: '/pages/ciencia.html' },
//             { text: 'Economia', href: '/pages/economia.html' },
//             { text: 'Cadastrar E-mail', href: '#', className: 'hidden' },
//             { text: 'Pesquisar', href: '#', className: 'hidden' }
//         ];

//         navItems.forEach(item => {
//             const li = document.createElement('li');
//             if (item.className) {
//                 li.className = item.className;
//             }
    
//             const a = document.createElement('a');
//             a.href = item.href;
//             a.textContent = item.text;
//             if (currentUrl.includes(item.href)) {
//                 a.classList.add('blue');
//             }

//             // if (item.className === 'blue') {
//             //     a.className = 'blue';
//             // }
    
//             li.appendChild(a);
//             ul.appendChild(li);
//         });
    
//         nav.appendChild(hamburger);
//         nav.appendChild(ul);
    

//         n.appendChild(nav);  
//     }
// }

// function createFooter(footers) {
//     for (const f of footers) {
//         const footer = document.createElement('footer');
//         footer.className = 'footer-container';

//         const containerFooter = document.createElement('div');
//         containerFooter.className = 'container-footer';

//         const textTrust = document.createElement('p');
//         textTrust.className = 'text-trust';
//         textTrust.textContent = 'Por que você pode confiar na ByteNews.com';

//         const hr1 = document.createElement('hr');

//         const insideHr = document.createElement('div');
//         insideHr.className = 'inside-hr';

//         // Criação da lista de links
//         const footerContentLinks = document.createElement('div');
//         footerContentLinks.className = 'footer-content-links';

//         const ulLinks = document.createElement('ul');
//         const links = [
//             { text: 'Termos de uso', href: '#' },
//             { text: 'Sobre a ByteNews.com', href: '#' },
//             { text: 'Política de privacidade', href: '#' },
//             { text: 'Cookies', href: '#' }
//         ];

//         links.forEach(link => {
//             const li = document.createElement('li');
//             const a = document.createElement('a');
//             a.href = link.href;
//             a.textContent = link.text;
//             li.appendChild(a);
//             ulLinks.appendChild(li);
//         });

//         footerContentLinks.appendChild(ulLinks);

//         // Criação dos ícones sociais
//         const socialIcons = document.createElement('div');
//         socialIcons.className = 'social-icons';

//         const ulIcons = document.createElement('ul');
//         const icons = [
//             { src: '/Assets/imgs/iconeFACE.png', alt: 'Facebook', href: '#' },
//             { src: '/Assets/imgs/iconeX.png', alt: 'Twitter', href: '#' },
//             { src: '/Assets/imgs/iconeGIT.png', alt: 'Instagram', href: '#' },
//             { src: '/Assets/imgs/iconeGOOGLE.png', alt: 'Google', href: '#' }
//         ];

//         icons.forEach(icon => {
//             const li = document.createElement('li');
//             const a = document.createElement('a');
//             a.href = icon.href;

//             const img = document.createElement('img');
//             img.src = icon.src;
//             img.alt = icon.alt;

//             a.appendChild(img);
//             li.appendChild(a);
//             ulIcons.appendChild(li);
//         });

//         socialIcons.appendChild(ulIcons);

//         insideHr.appendChild(footerContentLinks);
//         insideHr.appendChild(socialIcons);

//         const hr2 = document.createElement('hr');

//         const footerNote = document.createElement('div');
//         footerNote.className = 'footer-note';

//         const noteText = document.createElement('p');
//         noteText.innerHTML = `
//             © 2024 ByteNews.com. A ByteNews.com não se responsabiliza pelo conteúdo de
//             sites externos. Leia sobre nossa política em relação a <strong class="external-links">links externos</strong>.
//         `;

//         footerNote.appendChild(noteText);

//         containerFooter.appendChild(textTrust);
//         containerFooter.appendChild(hr1);
//         containerFooter.appendChild(insideHr);
//         containerFooter.appendChild(hr2);
//         containerFooter.appendChild(footerNote);
//         footer.appendChild(containerFooter);

//         f.appendChild(footer);  
//     }
// }


