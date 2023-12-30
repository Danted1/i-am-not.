alert('first things first')
alert('do you remember last night?')
alert('yeh i slept on ya')
alert('and im not angry, okay. iam just very sleepy')
alert('and iam sorry for it bebiii')
alert('my EYEE are so very SLEPPPYYYYY')
alert('so bebi........')

const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question"); 
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "YAY! thank you bebi! :3"
    gif.src = 
    "https://media4.giphy.com/media/y52k9qaauF4lgk9wjh/giphy.gif?cid=ecf05e47fj3j1l0ysb6ow7v2g611hqi1zrf26p7gol3fy0se&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    alert('are you sure? do you really forgive me?')
    alert('REALLYYYYY BEBIIII?!?!')
})

noBtn.addEventListener('mouseover', () => {
     const noBtnRect = noBtn.getBoundingClientRect();
     const maxX = window.innerWidth - noBtnRect.width;
     const maxY = window.innerHeight - noBtnRect.height;

     const randomX = Math.floor(Math.random() * maxY);
     const randomY = Math.floor(Math.random() * maxX);

     noBtn.style.left = randomX + 'px';
     noBtn.style.top = randomY + 'px';

    })