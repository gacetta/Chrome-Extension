// console.log('CURSED WEBSITE INCOMING');

function ghostMode() {
let images = document.getElementsByTagName('img');
for(let i = 0; i < images.length; i++){
  chrome.runtime.sendMessage({msg: 'image', index: i}, function({data, index}){
    images[index].src = data.link;
  });


}
console.log('ghost mode is on!')
// const css = 'a:hover{ transform: rotate(.5turn) translate(100%); }';
// let style = document.createElement('style');

// if (style.styleSheet) {
//   style.styleSheet.cssText = css;
// } else {
//   style.appendChild(document.createTextNode(css));
// }

// document.getElementsByTagName('head')[0].appendChild(style)


}