const langArr = {
  title: {
    en: 'AMP interactive becomes e’motion',
    fr: 'AMP interactive devient e’motion',
  },
  descr: {
    en: 'The show will continue right here on this new web platform. Stay tuned!',
    fr: 'Le show va bientôt se poursuivre sur cette nouvelle plateforme web! Restez connectés.',
  },
  footer: {
    en: '<span>&copy;</span> All rights reserved, 2022',
    fr: '<span>&copy;</span> Tous les droits réservés, 2022',
  },
};

// --------------------------Select Section --------------------------

const select = document.querySelector('select');
const allLang = ['en', 'fr'];
select.addEventListener('change', changeURLLanguage);

function changeURLLanguage(e) {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  // console.log(hash);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#fr';
    location.reload();
  }
  select.value = hash;

  for (let key in langArr) {
    let elem = document.querySelector('.about_' + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}

changeLanguage();
const currentLanguage = window.location.hash.substr(1);
// console.log(currentLanguage);
localStorage.setItem('language', JSON.stringify(currentLanguage));
