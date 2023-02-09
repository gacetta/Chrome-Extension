// console.log("CURSED WEBSITE INCOMING");
let ghostModeActive = false;
const ghostLinks = [
  "https://y.yarn.co/7b228cf8-e86f-4421-a741-5d6442b70ffb_text.gif",
  "https://giphy.com/clips/christinaxingfilm-hoBxuTrmBcbu32CFHW",
  "https://giphy.com/gifs/cartoon-halloween-ghost-aTf4PONtSYB1e/fullscreen",
  "https://giphy.com/gifs/ghost-spirit-guide-very-scary-l0K4cAq6pn1jdbboI/fullscreen",
  "https://youtu.be/GKbB9n5p-qg?t=7",
  "https://youtu.be/9gArvGIQHdU",
  "https://ghost.org/",
  "https://www.youtube.com/watch?v=d-MxKd1WY2k",
  "https://giphy.com/gifs/ghostbustersmovies-ghostbusters-original-3o72FiLG37hUSMqW4M/fullscreen",
  "https://www.logodesignlove.com/wp-content/uploads/2009/12/ghostbusters-logo-on-black.jpg",
  "https://en.wikipedia.org/wiki/Ghost",
  "https://www.youtube.com/watch?v=fuZTcOyGCRY",
];
const randomGhostLinkNumber = (arr) =>
  Math.floor(Math.random() * (1 + (arr.length - 1)));

const ghostImages = [
  "https://www.elmers.com/on/demandware.static/-/Library-Sites-Library-elmersinternational/default/dw26a91148/Elmer%27s/01%20JAN/Featured%20Content/201669775-elmers_cheesecloth_ghosts_inline_01.jpeg",
  "https://media.npr.org/assets/img/2017/10/18/ghost-story.jpg-7a2986c062f0a3d65ca25aed5dae223eed999602-s1100-c50.jpeg",
  "https://media.npr.org/assets/img/2017/10/18/ghost-story.jpg-7a2986c062f0a3d65ca25aed5dae223eed999602-s1100-c50.jpeg",
  "https://i.pinimg.com/736x/7a/1a/36/7a1a3699f8687e05494a928946fe8447.jpg",
  "https://pbs.twimg.com/media/CwFeYD7VUAAa8Qp.jpg",
  "https://www.logodesignlove.com/wp-content/uploads/2009/12/ghostbusters-logo-on-black.jpg",
];

const button = document.createElement("button");
button.addEventListener("click", () => {
  if (!ghostModeActive) {
    ghostMode();
    ghostModeActive = true;
  } else {
    document.location.reload();
  }
});
// set position attributes
button.style.cssText = `
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  z-index: 999;
`;
button.textContent = "ACTIVATE GHOST MODE";

function ghostMode() {
  const css = ":root{ filter: invert(100%); }";
  let style = document.createElement("style");

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  document.getElementsByTagName("head")[0].appendChild(style);

  const css2 =
    "#ghost {animation: slideRight 10s;} @keyframes slideRight {from {left: -1000px;}to {left: 200vw;}}";
  let style2 = document.createElement("style");

  if (style2.styleSheet) {
    style2.styleSheet.cssText = css2;
  } else {
    style2.appendChild(document.createTextNode(css2));
  }
  document.getElementsByTagName("head")[0].appendChild(style2);

  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    chrome.runtime.sendMessage(
      { msg: "image", index: i },
      function ({ data, index }) {
        images[index].src = data.link;
      }
    );
    console.log("Looping through images");
  }

  // create new ghost image
  const pacmanEl = document.createElement("img");
  pacmanEl.id = "ghost";
  // set its attributes
  pacmanEl.src = chrome.runtime.getURL("pacman.png");
  pacmanEl.style.cssText = `
    position: absolute;
    height: 50vh;
    left: -1000px;
    top: 25vh;
    transition: all 13s;
    filter: invert(100%);
  `;
  // append pacman to dom
  document.body.append(pacmanEl);

  // change button background to black, text to white, text to GHOST MODE ACTIVATED
  button.textContent = "GHOST MODE ACTIVATED";
  // array of links

  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("mouseover", (e) => {
      // link.setAttribute("style", "transform: scale(.5) !important");
      // link.style.transition = "all 2s";
      // link.style.color = "transparent";
      link.style.cssText = `
      color: transparent;
      background-color: transparent;
      transition: all 2s;
      transform: scale(10);
      // transform: scale(${Math.floor(Math.random() * (1 + 10 - 0.1)) + 0.1});
    `;
      link.href = ghostLinks[randomGhostLinkNumber(ghostLinks)];
    });
  });
}

document.body.append(button);
