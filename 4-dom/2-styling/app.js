const title = document.querySelector('#main-heading');
title.style.color = 'red';

const listItems = document.querySelectorAll('.list-items'); 

for(i = 0; i < listItems.length; i++){
    listItems[i].style.fontSize = '2rem';
}