
const { div, img, h5, ul, li } = require('elementx')
const CraigslistPageScraper = require('./scrapers/CraigslistPageScraper');

addEventListener('DOMContentLoaded', main);


function main(){
let input = document.getElementById("url");
document.getElementById("submit-button").addEventListener("click", () =>{
const scraper = new CraigslistPageScraper();
  scraper.scrape(input.value).then(data => {
    buildWidget(data);
    //console.log(data);
  });
});
}



function buildWidget(widgetData) {

  // const $root = document.querySelector('#root');
  const $root = document.querySelector('#widgets');
  const $app = div(
    //div({ class: 'row' },
      div({ class: 'col s8 m4' },
        div({ class: 'card white' },
          div({ class: 'card-image' }),
          img({ src: widgetData.image,
              height: '100%',
              width: '100%' }),
          div({ class: 'card-content black-text' },
            h5({class:'black-text center'},widgetData.price),
            ul(
              li({class:'center'},widgetData.location),
              li({class:'center'},widgetData.timeline)
            )
          )
        )
      )
    //)
  );

  $root.appendChild($app);

}





// //Dynamic Section - old school way before I learned about elementx
//
// document.getElementById("submit-button").addEventListener("click", function () {

  // let colDiv = document.createElement('div');
  // colDiv.setAttribute('class', 'col s6 m6 l6');
  // let cardColorDiv = document.createElement('div');
  // cardColorDiv.setAttribute('class', 'card white');

  //image section
  // let cardImageDiv = document.createElement('div');
  // cardImageDiv.setAttribute('class', 'card-image');
  // let imageDiv = document.createElement('img');
  // imageDiv.setAttribute('src', widgetData.image);
  // cardImageDiv.appendChild(imageDiv);
  // cardColorDiv.appendChild(cardImageDiv);

  // //info section
  // let cardContentDiv = document.createElement('div');
  // cardContentDiv.setAttribute('class', 'card-content black-text');
  // let h5Div = document.createElement('h5');
  // h5Div.setAttribute('class', 'black-text');
  // h5Div.innerText = widgetData.price;
  // let pDiv = document.createElement('p');
  // pDiv.innerText = widgetData.location;
  // pDiv.innerText = widgetData.timeline;
  // cardContentDiv.appendChild(h5Div);
  // cardContentDiv.appendChild(pDiv);
  // cardContentDiv.appendChild(pDiv);
  // cardColorDiv.appendChild(cardContentDiv);

  // colDiv.appendChild(cardColorDiv);
  // rootDiv.appendChild(colDiv);

// });
