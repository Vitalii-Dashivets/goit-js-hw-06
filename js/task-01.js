const category=document.querySelectorAll('.item');
console.log('Number of categories:',category.length);

category.forEach(function (elem) {
    console.log('');
    console.log('Category:', elem.firstElementChild.textContent);
    console.log('Elements:', elem.lastElementChild.children.length);
})



