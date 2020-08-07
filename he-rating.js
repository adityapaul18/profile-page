var k=document.getElementById("ff")

async function fetchHE()
{
    res=await fetch('https://cors-anywhere.herokuapp.com/www.hackerearth.com/@aditya.paul18');
    src=await res.text();
    var dom= new DOMParser;
    srcdom=dom.parseFromString(src,'text/html')
    name=srcdom.getElementsByClassName('name')[0].innerHTML;
    rating=srcdom.querySelector('body > div.page > div.layout-1 > div.left > div.link-section.standard-margin > div:nth-child(5) > span.track-following-num > a').innerHTML;
    console.log(name+'  '+rating);

    k.innerHTML= rating;
    
}

fetchHE();

