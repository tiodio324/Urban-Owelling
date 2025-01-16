"use strict";

var selects = document.querySelectorAll(".changeLangContainer");
var allLang = ["ru", "en"];
selects.forEach(function (select) {
  select.addEventListener('change', changeURLLanguage);
});

function changeURLLanguage() {
  var lang = this.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  var hash = window.location.hash;
  hash = hash.substring(1);

  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#ru';
    location.reload();
  }

  selects.forEach(function (select) {
    select.value = hash;
  });

  for (var key in langArr) {
    var elem = document.querySelector('.lng-' + key);

    if (elem) {
      elem.innerHTML = langArr[key][hash];
    } else {
      console.warn("Element with selector 'lng-".concat(key, "' not found."));
    }
  }
}

changeLanguage();