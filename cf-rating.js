var o=document.getElementById("hh")

async function fetchCF()
{
    res=await fetch('https://rating-wiz.herokuapp.com/codeforces/gntapprthn11');
    u=await res.text();
    u=JSON.parse(u);
    console.log(u);
  
    console.log(u.name+'  '+u.rating);
    o.innerHTML=u.rating;
}
fetchCF();