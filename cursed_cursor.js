// console.log("CURSED WEBSITE INCOMING");
let ghostModeActive = false;

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
  // create new ghost image
  // set its attributes
  //

  const css = ":root{ filter: invert(100%); }";
  let style = document.createElement("style");

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  document.getElementsByTagName("head")[0].appendChild(style);

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
      transition: all 2s;
      transform: scale(${Math.floor(Math.random() * (1 + 3 - 0.2)) + 0.2});
    `;
      link.href = "https://www.youtube.com/watch?v=GKbB9n5p-qg";
    });
  });
}

document.body.append(button);
