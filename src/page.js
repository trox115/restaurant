function PageContent() {
  const body = document.querySelector("#content");

  const content = document.createElement("div");
  content.id = "content2";
  body.appendChild(content);
  let img = document.createElement("div");
  img.classList.add("image");
  content.appendChild(img);

  let text = document.createElement("div");
  text.classList.add("text");
  let nav = document.createElement("nav");

  let title = document.createElement("h1");
  title.textContent = "This is the restaurant page";

  let subtitle = document.createElement("p");
  subtitle.textContent =
    "Here you find the best food. We are passionate about what we do. And we will prepare you the best food that ever entered in your mouth ";
  text.appendChild(nav);
  text.appendChild(title);
  text.appendChild(subtitle);

  content.appendChild(text);
}
export { PageContent };
