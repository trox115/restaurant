import {removeContent} from './remove';
function loadContact(){
  removeContent();
  const content = document.querySelector("#content");

  let img = document.createElement("div");
  img.classList.add("contact");
  content.appendChild(img);

  let text = document.createElement("div");
  text.classList.add("text");
  let nav = document.createElement("nav");
  let ul = document.createElement("ul");

  let liHome = document.createElement("li");
  let aHome = document.createElement("a");
  aHome.id = "home";
  aHome.textContent = "Home";
  liHome.appendChild(aHome);
  ul.appendChild(liHome);


  let liMenu = document.createElement("li");
  let aMenu = document.createElement("a");
  aMenu.id = "menu";
  aMenu.textContent = "Menu";
  liMenu.appendChild(aMenu);
  ul.appendChild(liMenu);

  let liContact = document.createElement("li");
  let aContact = document.createElement("a");
  aContact.id = "contact";
  aContact.textContent = "Contact";
  liContact.appendChild(aContact);
  ul.appendChild(liContact);

    nav.appendChild(ul);


  let title = document.createElement("h1");
  title.textContent = 'This is the Contact Page page';


      let subtitle = document.createElement("p");
      subtitle.textContent = 'You can Contact Us through this form';
  text.appendChild(nav);
  text.appendChild(title);
  text.appendChild(subtitle);
  let f = document.createElement("form");
  let name = document.createElement("input");
  name.type = "text";
  name.name = "user_name";
  name.placeholder = 'Name:'
  f.appendChild(name);

  let i = document.createElement("input");
  i.type = "email";
  i.name = "email";
  i.placeholder = 'Email:'
  f.appendChild(i);

  let textarea =document.createElement("TEXTAREA");
  textarea.placeholder='Your Message';
  textarea.name= 'message'
  f.appendChild(textarea);

  let s = document.createElement("input");
  s.type = "submit";
  s.value = "Submit";
  f.appendChild(s);



  text.appendChild(f);




  content.appendChild(text);
}
export { loadContact };
