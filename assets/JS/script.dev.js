"use strict";

var openMenuButton = document.querySelector('.btnOpenMenu');
var closeMenuButton = document.querySelector('.btnCloseMenu');
var menu = document.querySelector('.header_box_mobile');
document.addEventListener('DOMContentLoaded', function () {
  openMenuButton.addEventListener('click', function () {
    menu.classList.add('header_box_mobile_BtnOpenMenu');
    openMenuButton.style.display = 'none';
  });
  closeMenuButton.addEventListener('click', function () {
    menu.classList.remove('header_box_mobile_BtnOpenMenu');
    openMenuButton.style.display = 'block';
  });
});