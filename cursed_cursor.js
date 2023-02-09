// console.log("CURSED WEBSITE INCOMING");
let ghostModeActive = false;
const ghostLinks = [
  "https://y.yarn.co/7b228cf8-e86f-4421-a741-5d6442b70ffb_text.gif",
  "https://giphy.com/clips/christinaxingfilm-hoBxuTrmBcbu32CFHW",
  "https://giphy.com/clips/halloween-happy-happyhalloween-k4Rymbn4WLkgKMtE2u",
  "https://giphy.com/gifs/cartoon-halloween-ghost-aTf4PONtSYB1e/fullscreen",
  "https://giphy.com/gifs/ghost-spirit-guide-very-scary-l0K4cAq6pn1jdbboI/fullscreen",
  "https://youtu.be/GKbB9n5p-qg?t=7",
  "https://youtu.be/31j4DIpgY9U?t=47",
  "https://youtu.be/9gArvGIQHdU",
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
  pacmanEl.src =
    "https://banner2.cleanpng.com/20180203/bqq/kisspng-pac-man-world-3-ghosts-clip-art-pac-man-ghost-png-transparent-image-5a7561ae2a7482.6496024615176421581739.jpg";
  pacmanEl.style.cssText = `
    position: absolute;
    left: -1000px;
    top: 100px;
    transition: all 10s;
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
      transform: scale(${Math.floor(Math.random() * (1 + 10 - 0.1)) + 0.1});
    `;
      link.href = "https://youtu.be/GKbB9n5p-qg?t=7";
    });
  });
}

document.body.append(button);
