var y=document.getElementById("gg")

async function fetchCF()
{
    res=await fetch('https://cors-anywhere.herokuapp.com/www.codechef.com/users/the_mrx18');
    src=await res.text();
    var dom= new DOMParser;
    srcdom=dom.parseFromString(src,'text/html')
    name=srcdom.querySelector('body > main > div > div > div > div > div > header > h2').innerHTML;
    rating=srcdom.querySelector('.rating-number').innerHTML;
    console.log(name+'  '+rating);
    
    y.innerHTML=rating;

}

fetchCF();



