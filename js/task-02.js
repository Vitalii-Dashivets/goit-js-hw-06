const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const title = document.createElement('h2');
title.textContent = '-Main menu-';

const list=document.querySelector("#ingredients");
list.style.listStyle = 'none';

const elements=ingredients.map(elem=>{
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent='-- '+elem;
  return listItem;
});

const article = document.createElement('p');
article.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!';

list.append(...elements);

// додаткові фічі для виtвчення функціоналу
list.before(title);
list.after(article);

article.classList.add('text');
article.style.width = '500px';

list.firstChild.style.color = 'red';
list.children[1].style.color = 'yellow';
list.children[2].style.color = 'green';
list.children[3].style.color = 'pink';
list.lastChild.style.color = 'blue';