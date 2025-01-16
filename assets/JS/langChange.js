const selects = document.querySelectorAll(".changeLangContainer");
const allLang = [
    "ru",
    "en"
];

selects.forEach((select) => {
    select.addEventListener('change', changeURLLanguage);
});

function changeURLLanguage() {
    let lang = this.value;

    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;

    hash = hash.substring(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ru';
        location.reload();
    }
    selects.forEach((select) => {
        select.value = hash;
    });

    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        } else {
            console.warn(`Element with selector 'lng-${key}' not found.`);
        }
    }
}

changeLanguage();