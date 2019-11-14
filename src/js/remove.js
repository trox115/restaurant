function removeContent(){

  document.getElementById("content").remove();
  const body = document.querySelector('body');
  let div = document.createElement("div");
  div.id= 'content';
  body.appendChild(div);
}
export { removeContent };
