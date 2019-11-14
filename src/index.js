import { PageContent } from "./page.js";
import {loadContact} from './js/contact.js';
import {removeContent} from './js/remove';


function addNavEvents() {
  const homeBtn = document.getElementById('home');
  const menuBtn = document.getElementById('menu');
  const contactBtn = document.getElementById('contact');
  
  menuBtn.addEventListener('click', removeContent);
  homeBtn.addEventListener('click', PageContent)
  contactBtn.addEventListener('click', loadContact);
}

PageContent();
addNavEvents();
