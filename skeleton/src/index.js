addEventListener('DOMContentLoaded', main);

function main() {
  const $root = document.querySelector('#root');
  const $app = null; // <== Your dynamically generated DOM element goes here
  $root.appendChild($app);
}





//Dynamic Menu Section
let menuData=[{food:'Royale with Cheese', price:8.99, image:'img/burger.jpg', id:'burger'},
{food:'Argula Pie', price:11.99, image:'img/pizza.jpg', id:'pizza'},
{food:'Smoked Swine', price:14.99, image:'img/ribs.jpg', id:'ribs'},
{food:'Ice Cream Biscut', price:7.99, image:'img/ice_cream.jpg', id:'icecream'}
];

let menuDiv=document.getElementById('menu');

for (let i=0;i<menuData.length;i++){


  let colDiv=document.createElement('div');
  colDiv.setAttribute('class', 'col s12 m6');
  let cardColorDiv=document.createElement('div');
  cardColorDiv.setAttribute('class', 'card white');

  //image section
  let cardImageDiv=document.createElement('div');
  cardImageDiv.setAttribute('class', 'card-image');
  let imageDiv=document.createElement('img');
  imageDiv.setAttribute('src', menuData[i].image);
  cardImageDiv.appendChild(imageDiv);
  cardColorDiv.appendChild(cardImageDiv);

  //info section
  let cardContentDiv=document.createElement('div');
  cardContentDiv.setAttribute('class', 'card-content black-text');
  let h5Div=document.createElement('h5');
  h5Div.setAttribute('class', 'black-text');
  h5Div.innerText=menuData[i].food;
  let pDiv=document.createElement('p');
  pDiv.innerText=`$${menuData[i].price}`;
  cardContentDiv.appendChild(h5Div);
  cardContentDiv.appendChild(pDiv);
  cardColorDiv.appendChild(cardContentDiv);


  colDiv.appendChild(cardColorDiv);
  menuDiv.appendChild(colDiv);

}
