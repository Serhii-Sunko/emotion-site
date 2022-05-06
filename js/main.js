const english = {
  title: "english",
  guaranteeItems: {
    maintitle: "AMP interactive becomes e’motion",
    paragraph:
      "The show will continue right here on this new web platform. Stay turned!",
  },
};
const français = {
  title: "français",
  guaranteeItems: {
    maintitle: "AMP interactive devient e’motion",
    paragraph:
      "Le show va bientôt se poursuivre sur cette nouvelle plateforme web! Restez connectés.",
  },
};

const languages = {
  english,
  français,
};

const currentLanguage = "english";
localStorage.setItem("language", JSON.stringify(currentLanguage));
const links = [
  {
    name: languages[currentLanguage].guaranteeItems["maintitle"],
    class: "about_title",
  },
  {
    name: languages[currentLanguage].guaranteeItems["paragraph"],
    class: "about_descr",
  },
];

// const murkUp = links.find(item => item.name: languages[currentLanguage].guaranteeItems["maintitle"]);
const murkUp = links.reduce((acc, item) => {
  acc += `<div class="${item.class}">${item.name}</div>`;
  return acc;
}, "");

document.querySelector(".about_info").innerHTML = murkUp;
