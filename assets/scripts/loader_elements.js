const langElement = {
    "en": {
        "nav_games":"Games",
        "nav_tools":"Tools",
        "nav_about":"About",
        "footer_rights":"All Rights Reserved."
    },
    "pt-br": {
        "nav_games":"Jogos",
        "nav_tools":"Ferramentas",
        "nav_about":"Sobre",
        "footer_rights":"Todos os Direitos Reservados."
    },
    "es": {
        "nav_games":"Juegos",
        "nav_tools":"Herramientas",
        "nav_about":"Acerca&nbsp;de",
        "footer_rights":"Todos los Derechos Reservados."
    }
}

function getCurrentLang() {
    const path = window.location.pathname

    if (path.includes('/pt-br/')) return 'pt-br';
    if (path.includes('/es/')) return 'es'

    return 'en'
}

function translateElement(element, lang) {
    return element.replace(/{{(.*?)}}/g, (match, key) => {
        const cleanKey = key.trim();
        return (langElement[lang] && langElement[lang][cleanKey]) || cleanKey;
    })
}

function loadElement(containerId, elementPath) {
    const container = document.getElementById(containerId);

    if (container) {
        fetch(elementPath)
            .then(response => {
                if (!response.ok) throw new Error(`Load fail of element ${elementPath}`);
                return response.text()
            })
            .then(html => {
                const elementLang = translateElement(html, getCurrentLang())
                container.innerHTML = elementLang;
                console.log(`${elementPath} element loaded successfully`);
            })
            .catch(error => console.error(error))
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadElement("navbar","/assets/elements/navbar.html")
    loadElement("footerContainer","/assets/elements/footer.html")
})