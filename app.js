const endGameData = [{
    name: "space-stone", avengers: ["captain-america", "iron-man"]
}, {
    name: "mind-stone", avengers: ["ant-man", "captain-america"]
}, {
    name: "reality-stone", avengers: ["rocket-raccoon", "thor"]
}, {
    name: "power-stone", avengers: ["war-machine", "nebula"]
}, {
    name: "time-stone", avengers: [{name: "hulk"}]
}, {
    name: "soul-stone", avengers: ["black-widow", "hawkeye"]
}];

const stones = document.querySelectorAll('.stone');
const avengers = document.querySelectorAll('.avenger');
const glove = document.querySelector('.infinity_glove');
const selected = "selected";

let selectedData = { name: "", avengers: []};

stones.forEach (stone => {
  stone.addEventListener('click', ({target}) => {
    onStoneClicked(target);
  });
});

avengers.forEach (avenger => {
  avenger.addEventListener('click', ({target}) => {
    onAvengerClicked(target);
  });
});

function onStoneClicked(selectedStone) {
  document.body.style.background = "";
  if (selectedStone.classList.contains(selected)) {
    selectedStone.classList.remove(selected);
    selectedData.name = "";
  } else {
    stones.forEach (stone => {
      stone.classList.remove(selected);
    });
    selectedStone.classList.add(selected);
    selectedData.name = selectedStone.id;
  }
  // console.log(selectedData.name);
}

function onAvengerClicked(avenger) {
  document.body.style.background = "";
  avenger.classList.toggle(selected);
  if (selectedData.avengers.includes(avenger.id)) {
    selectedData.avengers.splice(selectedData.avengers.indexOf(avenger.id), 1);
  } else {
    selectedData.avengers.push(avenger.id);
  }
  // console.log(selectedData.avengers)
}

glove.addEventListener('click', ({target}) => {
  onGloveClicked();
});

function onGloveClicked() {
  if (selectedData.name === "") {
    console.log("stone is not chosen");
  } else {
    let result = true;
    const answer = endGameData.find(object => object.name === selectedData.name);
    console.log(answer);
    console.log(selectedData);
    if (answer.avengers.length === selectedData.avengers.length) {
      answer.avengers.sort();
      selectedData.avengers.sort();
      for (let i = 0; i < answer.avengers.length; i++) {
        if (answer.avengers[i] !== selectedData.avengers[i]) {
          result = false;
        }
      }
    } else {
      result = false;;
    }
    console.log(result);
    if (result) {
      document.body.style.background = "green";
    } else {
      document.body.style.background = "red";
    }
  }
}
