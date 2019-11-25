function menu() {
  const body = document.querySelector('#content');
  const content = document.createElement('div');
  content.id = 'content2';
  body.appendChild(content);
  let img = document.createElement('div');
  img.classList.add('salmon');
  content.appendChild(img);

  let text = document.createElement('div');
  text.classList.add('text2');

  let title = document.createElement('h1');
  title.textContent = 'Fish';

  let subtitle = document.createElement('p');
  subtitle.textContent =
    'This is the best salmon that you will ever eat. It tastes realy good';
  text.appendChild(title);
  text.appendChild(subtitle);

  content.appendChild(text);

  text = document.createElement('div');
  text.classList.add('text2');

  title = document.createElement('h1');
  title.textContent = 'Meat';

  subtitle = document.createElement('p');
  subtitle.textContent =
    'This is the best Meat that you will ever eat. It tastes realy good';
  text.appendChild(title);
  text.appendChild(subtitle);

  content.appendChild(text);
  img = document.createElement('div');
  img.classList.add('meat');
  content.appendChild(img);

  img = document.createElement('div');
  img.classList.add('shakes');
  content.appendChild(img);

  text = document.createElement('div');
  text.classList.add('text2');

  title = document.createElement('h1');
  title.textContent = 'Shakes';

  subtitle = document.createElement('p');
  subtitle.textContent =
    'This are the best shakes that you will ever eat. It tastes realy good';
  text.appendChild(title);
  text.appendChild(subtitle);

  content.appendChild(text);

  body.appendChild(content);
}
export { menu };
