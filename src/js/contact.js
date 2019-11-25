import { removeContent } from './remove';
function loadContact() {
  const body = document.querySelector('#content');

  const content = document.createElement('div');
  content.id = 'content2';
  body.appendChild(content);
  let img = document.createElement('div');
  img.classList.add('contact');
  content.appendChild(img);

  let text = document.createElement('div');
  text.classList.add('text');

  let title = document.createElement('h1');
  title.textContent = 'This is the Contact Page page';

  let subtitle = document.createElement('p');
  subtitle.textContent = 'You can Contact Us through this form';
  text.appendChild(title);
  text.appendChild(subtitle);
  let f = document.createElement('form');
  let name = document.createElement('input');
  name.type = 'text';
  name.name = 'user_name';
  name.placeholder = 'Name:';
  f.appendChild(name);

  let i = document.createElement('input');
  i.type = 'email';
  i.name = 'email';
  i.placeholder = 'Email:';
  f.appendChild(i);

  let textarea = document.createElement('TEXTAREA');
  textarea.placeholder = 'Your Message';
  textarea.name = 'message';
  f.appendChild(textarea);

  let s = document.createElement('input');
  s.type = 'submit';
  s.value = 'Submit';
  f.appendChild(s);

  text.appendChild(f);

  content.appendChild(text);
  body.appendChild(content);
}
export { loadContact };
