function rNav(){
  const body = document.querySelector('#content');
  let nav = document.createElement('nav');


  let ul = document.createElement('ul');

  let liHome = document.createElement('li');
  let aHome = document.createElement('a');
  aHome.id = 'home';
  aHome.textContent = 'Home';
  liHome.appendChild(aHome);
  ul.appendChild(liHome);


  let liMenu = document.createElement('li');
  let aMenu = document.createElement('a');
  aMenu.id = 'menu';
  aMenu.textContent = 'Menu';
  liMenu.appendChild(aMenu);
  ul.appendChild(liMenu);

  let liContact = document.createElement('li');
  let aContact = document.createElement('a');
  aContact.id = 'contact';
  aContact.textContent = 'Contact';
  liContact.appendChild(aContact);
  ul.appendChild(liContact);

    nav.appendChild(ul);


  body.appendChild(nav);

}
export { rNav };
