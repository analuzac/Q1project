
const { div, img, h5, ul, li, form, i, input, label, a, nav } = require('elementx')
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

const $root = document.querySelector('#root');
const $app = div(
  // // Navigation Section
  // nav(
  //   div({ class: 'nav-wrapper indigo'},
  //     a({ href: '#',
  //         class: 'brand-logo'
  //         style: 'padding-left:10px'},
  //         Craigslist Widget Generator
  //     )
  //   )
  // ),
  // URL Input Section
  form({ class: 'col s12 m12',
         id: 'form' },
    div({ class: 'row' },
      div({ class: 'input-field col s12 m12' },
        i({ class: 'material-icons prefix indigo-text'},insert_link),
        input({ id: 'url',
                type: 'text',
                class: 'validate',
                required }),
        label({ for: 'url'},CRAIGSLIST HOUSING URL)
      )
    )
    div({ class: 'row center' },
      a({ id: 'submit-button',
          type: 'submit',
          name: 'action'
          class: 'btn-large waves-effect waves-light indigo lighten-1'},
          SUBMIT)
    )
  ),
  // Container for the widgets
  div({ id: 'widgets',
        class: 'row' })
);

$root.appendChild($app);


function buildWidget(widgetData) {

  const $widgets = document.querySelector('#widgets');
  const $pieces = div(
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

  $widgets.appendChild($pieces);

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
