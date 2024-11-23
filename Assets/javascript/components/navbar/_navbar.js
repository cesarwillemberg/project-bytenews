function checkComponents() {
    var navbars = document.getElementsByClassName('navbar-container');

    if (navbars) {
        createNavbar(navbars);
    }
}

function createNavbar(navbars) {
    const currentUrl = window.location.pathname;
    for (const n of navbars) {
        const nav = document.createElement('nav');
        nav.className = 'navbar';
    
        // Botão hamburger
        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger';
        hamburger.setAttribute('aria-label', 'Menu');
        hamburger.textContent = '☰';
    
        // Lista de links
        const ul = document.createElement('ul');
        ul.className = 'nav-links';
    
        const navItems = [
            { text: 'Home', href: '#', className: 'blue' },
            { text: 'Brasil', href: '#' },
            { text: 'Internacional', href: '#' },
            { text: 'Tecnologia', href: '#' },
            { text: 'Saúde', href: '#' },
            { text: 'Ciência', href: '#' },
            { text: 'Economia', href: '#' },
            { text: 'Cadastrar E-mail', href: '#', className: 'hidden' },
            { text: 'Pesquisar', href: '#', className: 'hidden' }
        ];

        navItems.forEach(item => {
            const li = document.createElement('li');
            if (item.className) {
                li.className = item.className;
            }
    
            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.text;

            if (currentUrl.includes(item.href)) {
                a.classList.add('blue');
            }

            // if (item.className === 'blue') {
            //     a.className = 'blue';
            // }
    
            li.appendChild(a);
            ul.appendChild(li);
        });
    
        nav.appendChild(hamburger);
        nav.appendChild(ul);
    

        n.appendChild(nav);  
    }
}