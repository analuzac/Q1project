const { div, img, h5, ul, li } = require('elementx')

// Function that builds widgets given scraped data
function buildWidget(widgetData) {

  const $widgets = document.querySelector('#widgets');
  const $pieces = div(
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
  );

  $widgets.appendChild($pieces);

}

module.exports = buildWidget;
