const button = document.querySelector(".button");
const box = document.querySelector(".box");
const meme = document.querySelector(".meme");

const API = "https://meme-api.com/gimme/50"
const random_meme = Math.floor(Math.random() * 50)

button.addEventListener("click", () => {
    fetch(API).then(res => res.json()).then(data => {
        console.log(data.memes[random_meme].url)
        meme.src = data.memes[random_meme].url
    }).catch(() => alert("Error fetching meme!"))
})
