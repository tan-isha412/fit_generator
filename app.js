const addons = [];
const tops = [];
const bottoms = [];
const shoes = [];

const state = {
  addon: 0,
  top: 0,
  bottom: 0,
  shoe: 0,
};

function getImg(category) {
  switch (category) {
    case "addon": return document.querySelector(".addonimg");
    case "top":   return document.querySelector(".topsimg");
    case "bottom": return document.querySelector(".bottomimg");
    case "shoe":  return document.querySelector(".shoesimg");
  }
}

function getArr(category) {
  switch (category) {
    case "addon":  return addons;
    case "top":    return tops;
    case "bottom": return bottoms;
    case "shoe":   return shoes;
  }
}

function updateImage(category) {
  const arr = getArr(category);
  const img = getImg(category);
  img.src = arr[state[category]];
}
function navigate(category, direction) {
  const arr = getArr(category);
  state[category] = (state[category] + direction + arr.length) % arr.length;
  updateImage(category);
}
function randomize() {
  state.addon  = Math.floor(Math.random() * addons.length);
  state.top    = Math.floor(Math.random() * tops.length);
  state.bottom = Math.floor(Math.random() * bottoms.length);
  state.shoe   = Math.floor(Math.random() * shoes.length);

  updateImage("addon");
  updateImage("top");
  updateImage("bottom");
  updateImage("shoe");
}

document.addEventListener("DOMContentLoaded", () => {
  
  updateImage("addon");
  updateImage("top");
  updateImage("bottom");
  updateImage("shoe");

  document.getElementById("left0").addEventListener("click", () => navigate("addon", -1));
  document.getElementById("right0").addEventListener("click", () => navigate("addon", 1));

  document.getElementById("left1").addEventListener("click", () => navigate("top", -1));
  document.getElementById("right1").addEventListener("click", () => navigate("top", 1));

  document.getElementById("left2").addEventListener("click", () => navigate("bottom", -1));
  document.getElementById("right2").addEventListener("click", () => navigate("bottom", 1));

  document.getElementById("left3").addEventListener("click", () => navigate("shoe", -1));
  document.getElementById("right3").addEventListener("click", () => navigate("shoe", 1));

  document.getElementById("randm").addEventListener("click", randomize);
});
