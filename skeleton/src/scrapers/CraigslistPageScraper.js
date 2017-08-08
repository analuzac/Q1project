const url='https://sfbay.craigslist.org/sfc/roo/d/great-room-available-in/6247349633.html';


class CraigslistPageScraper {
  constructor(url) {
    this.url = url;
  }

  scrape(url){
    //const url='https://sfbay.craigslist.org/sfc/roo/d/great-room-available-in/6247349633.html';
    fetch(`http://cors-bypass-proxy.axiomlogic.com/${url}`).then(response => {
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
      let info = [];
      for (i=0;i<attrs.length;i++){
        if (i%2===0){
          info.push(attrs[i].innerText);
        }
      }
      let image = doc.getElementsByClassName("thumb")[0].href;
      //console.log(image);

      return doc;
    })


  })

}
