const timerId = setInterval(() => {
  const primary = document.getElementById("primary");

  if (primary) {
    clearInterval(timerId);
  }

  const element = document.createElement("div");

  element.style.width = "100%";
  element.style.height = "100%";
  element.style.position = "fixed";
  element.style.top = 0;
  element.style.left = 0;
  element.style.background = "#212121";

  element.style.display = "flex";
  element.style.justifyContent = "center";
  element.style.alignItems = "center";

  const button = document.createElement("div");
  button.style.width = "180px";
  button.style.height = "54px";
  button.style.color = "#fff";
  button.style.background = "#383838";
  button.style.display = "flex";
  button.style.justifyContent = "center";
  button.style.alignItems = "center";
  button.style.borderRadius = "36px";
  button.style.cursor = "pointer";
  button.style.fontSize = "16px";
  button.innerText = "I want to surf :)";

  element.append(button);

  const result = primary.querySelector("ytd-rich-grid-renderer");
  result.style.visibility = "hidden";

  primary.append(element);

  button.onclick = function () {
    element.style.display = "none";
    result.style.visibility = "visible";
  };
}, 100);
