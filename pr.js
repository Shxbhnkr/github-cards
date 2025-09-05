const urlInput=document.querySelector('#url')



const gobut=document.querySelector('#gobut')

const cardcont= document.querySelector('.cardcontainer')

function makeCard(username,imgsrc,follwrs,folwg){
    const div=document.createElement("div")
    div.className="card"
    const img=document.createElement("img")
    img.src= imgsrc
    const user=document.createElement("h3")
    user.textContent=username
    const fwrs=document.createElement("h3")
    fwrs.textContent=`followers:${follwrs}`
    const fwng=document.createElement("h3")
    fwng.textContent=`following:${folwg}`

    div.appendChild(img)
    div.appendChild(user)
    div.appendChild(fwrs)
    div.appendChild(fwng)
    return div
}



gobut.addEventListener('click',function(event){
    event.preventDefault()
    cardcont.innerHTML="";
    const xhr= new XMLHttpRequest();
    const  Urlinput2="https://api.github.com/users/"+urlInput.value
    xhr.open('GET',Urlinput2)
    xhr.send()
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4){
            const data= JSON.parse(this.responseText);
            const username=data.login;
            const imgsrc=data.avatar_url;
            const follwrs=data.followers;
            const folwg=data.following;
            const card=makeCard(username,imgsrc,follwrs,folwg)
            cardcont.appendChild(card);
        }
    }
})
console.log(Urlinput2);
