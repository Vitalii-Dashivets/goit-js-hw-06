const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const titles = ['Very funny cats', 'Nice colorful fishes', 'Horses in the forest'];

for (let k = 0; k < images.length; k += 1){
  images[k].about = titles[k];
}


const list=document.querySelector('.gallery');
list.style.listStyle = 'none';
list.style.display = 'flex';
list.style.justifyContent = 'space-between';
list.style.paddingRight = '40px';

const elements = images.map(elem =>
  `<li class='item-image'><img  class='image'  src=${elem.url}  alt=${elem.alt} width=300><p>${elem.about}</p></li>
  `).join("");
  

list.insertAdjacentHTML("beforeend", elements);
 
const itemList = document.querySelectorAll(".item-image");
itemList.forEach(elem =>
{
  const text = elem.lastChild;
  const image = elem.firstChild;

  image.width = '400';
  image.height = '300';
  image.style.objectFit = 'cover';

  text.style.color = 'red';
  text.style.fontSize = '24px';
  text.style.textAlign = 'center';
  
  })



