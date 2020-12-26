// Crawl links from a website and display specific links having a searchstring

let resultSet = document.links;

Array.from(resultSet).forEach(function(element){
    if(!element.href.includes('google')){
        console.log(element.href);
    }
})