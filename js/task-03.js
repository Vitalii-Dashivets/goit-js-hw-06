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

const list=document.querySelector('.gallery');
list.style.listStyle = 'none';
list.style.display = 'flex';
list.style.justifyContent = 'space-between';
list.style.paddingRight = '40px';

const elements = images.map(elem =>
  `<li class='item-image'><img  class='image'  src=${elem.url}  alt=${elem.alt} width=300></li>`).join("");
  
list.insertAdjacentHTML("beforeend", elements);
  
const itemImage = document.querySelectorAll('.image');
console.log(itemImage)
itemImage.forEach(elem => {
  
  
  elem.width = '400';
  elem.height = '300';
  elem.style.objectFit = 'cover';

  const textImage=document.createElement('p');
  textImage.textContent=' ';
  textImage.style.fontSize='24px';
  textImage.style.color='red';
  textImage.style.textAlign = 'center';
  
  list.children[0].lastChild.textContent='Very funny cats';
  list.children[1].lastChild.textContent='Nice colorful fishes';
  list.children[2].lastChild.textContent='Horses in the forest';


  elem.after(textImage);
});



