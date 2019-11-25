import { PageContent } from './page.js';
import { loadContact } from './js/contact.js';
import { menu } from './js/loadMenu';
import { removeContent } from './js/remove';
import { rNav } from './js/rendermenu';

function addNavEvents() {
  const homeBtn = document.getElementById('home');
  const menuBtn = document.getElementById('menu');
  const contactBtn = document.getElementById('contact');

  menuBtn.addEventListener('click', () => {
    removeContent();
    menu();
  });

  homeBtn.addEventListener('click', () => {
    removeContent();
    PageContent();
  });
  contactBtn.addEventListener('click', () => {
    removeContent();
    loadContact();
  });
}

rNav();
PageContent();
addNavEvents();
