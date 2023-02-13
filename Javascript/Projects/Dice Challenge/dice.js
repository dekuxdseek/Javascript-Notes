let dice1 = Math.floor(Math.random() * 6) + 1;  //getting random values for dice1
let dice2 = Math.floor(Math.random() * 6) + 1;  //getting random values for dice2

let link1 =`${dice1}.png`;  //getting corresponding image to our random value, for eg. for num = 1, link ='1'+'.png', link = '1.png'
let link2 =`${dice2}.png`;


document.querySelector('.dice1 .img1').setAttribute('src', link1);   // setting src attribute of img to their respective link
document.querySelector('.dice2 .img2').setAttribute('src', link2);

// changing h1, to tell who won(greated number on dice)
if(dice1>dice2){
    document.querySelector('h1').textContent = '🚩Player 1 Won!';
}
else if(dice2>dice1){
    document.querySelector('h1').textContent = '🚩Player 2 Won!';
}
else{
    document.querySelector('h1').textContent = "😐It's a draw!";
}