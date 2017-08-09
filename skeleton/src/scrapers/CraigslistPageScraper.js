//const url='https://sfbay.craigslist.org/sfc/roo/d/great-room-available-in/6247349633.html';


class CraigslistPageScraper {
  scrape(url){
    //const url='https://sfbay.craigslist.org/sfc/roo/d/great-room-available-in/6247349633.html';
    const myInit = { header: { origin: null } };
    return fetch(`http://cors-bypass-proxy.axiomlogic.com/${url}`,myInit).then(response => {
      return response.text();
    })
    .then(html => {
      //console.log(html);
      let parser = new DOMParser();
      let doc = parser.parseFromString(html, "text/html");
      //console.log(">>>>>>>",doc);

      let price = doc.getElementsByClassName("price")[0].innerText;
      let location = doc.getElementsByTagName("small")[0].innerText;
      let timeline = doc.getElementsByClassName("housing_movein_now property_date shared-line-bubble")[0].innerText;
      let attrs = doc.getElementsByClassName("mapAndAttrs")[0].children[2].children;
      //console.log(attrs);
      let details = [];
      for (let i=0;i<attrs.length;i++){
        if (i%2===0){
          details.push(attrs[i].innerText);
        }
      }
      let image = doc.getElementsByClassName("thumb")[0].href;
      //console.log(image);

      let widgetData={};
      widgetData.image = image;
      widgetData.price = price;
      widgetData.location = location;
      widgetData.timeline = timeline;

      return widgetData;
    })


  }

}

module.exports = CraigslistPageScraper;
