console.log('CURSED WEBSITE INCOMING');

let images = document.getElementsByTagName('img');
for(let i = 0; i < images.length; i++){
  chrome.runtime.sendMessage({msg: 'image', index: i}, function({data, index}){
    images[index].src = data.link;
  });
  console.log('Looping through images')
  // images[i].src = 'https://cdn.vox-cdn.com/thumbor/pr3jD5sfTRKpPinnYym_4A0gJaQ=/0x27:4415x3338/1400x1400/filters:focal(0x27:4415x3338):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/43170476/ghosts.0.0.jpg';

}

const css = 'a:hover{ transform: rotate(.5turn) translate(100%); }';
let style = document.createElement('style');

if (style.styleSheet) {
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

document.getElementsByTagName('head')[0].appendChild(style)

const targetArr = document.querySelectorAll('a');
targetArr.forEach((target) => {
  target.addEventListener('mouseover', mOver);
})

function mOver() {
  target.setAttribute('style', 'color: red')
}