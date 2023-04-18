let quot = document.getElementById("quot");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

// const btns = document.querySelector('li');
let copy = document.getElementById("execopy");

const url = "https://api.quotable.io/random";
let getQuote = () => {
    fetch(url)
    .then(data => data.json())
    .then((item) => {
     quot.innerText= item.content;
     author.innerText=("Author :- " +item.author)
    })
};
window.addEventListener("load",getQuote);
btn.addEventListener("click",getQuote);
document.getElementById("execCopy").addEventListener("click",execCopy)
function execCopy(){
    document.querySelector("#input").select();
    // document.querySelector("#quote").select();
    document.execCommand('copy')
    // var copyText = document.getElementById("author");
    // copyText.select();
    copyText.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copyText.value);
    alert("copy" +copyText)
}
