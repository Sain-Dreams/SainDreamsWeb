function changeLang(newLang) {
    let currentPath = window.location.pathname;
    const langs = ['es', 'pt-br'];

    
    langs.forEach(lang => {
        const langPath = `/${lang}/`;
        if (currentPath.includes(langPath)) {
            currentPath = currentPath.replace(langPath, `/`);
        }
    });

    let newUrl;

    if (newLang === 'en') {
        newUrl = currentPath;
    } else {
        const cleanFile = currentPath.startsWith('/') ? currentPath.substring(1) : currentPath;
        newUrl = `/${newLang}/${cleanFile}`;
    }   

    newUrl = newUrl.replace(/\/+/g, '/')

    if (newUrl.endsWith('/' + newLang)) {
        newUrl += '/';
    }
    window.location.href = newUrl;
}