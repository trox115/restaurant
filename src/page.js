function PageContent() {
    const content = document.querySelector("#content");

    let img = document.createElement("div");
    img.classList.add("image");
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
    title.textContent = 'This is the restaurant page';


        let subtitle = document.createElement("p");
        subtitle.textContent = 'Here you find the best food. We are passionate about what we do. And we will prepare you the best food that ever entered in your mouth ';
    text.appendChild(nav);
    text.appendChild(title);
    text.appendChild(subtitle);




    content.appendChild(text);
}
export { PageContent };
