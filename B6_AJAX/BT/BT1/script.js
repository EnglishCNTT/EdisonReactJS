const listPoke = document.querySelector(".list-poke");
const info = document.querySelector(".info");
const backBtn = document.querySelector("#back");
const nextBtn = document.querySelector("#next");

let pokemons = [];

let idpoke = "https://pokeapi.co/api/v2/pokemon/";

let limit = 5;

let page = 0;

function getData(params) {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${page}`)
    .then((res) => {
      pokemons = res.data;
    //   console.log(pokemons);
      render();
    });
}

getData({
    limit: limit,
    page: page,
});
  
backBtn.addEventListener("click", function () {
  handleBack();
});

function handleBack() {
  if (page == 0) return;
  page = page - 5;
  getData({
    limit: limit,
    page: page,
  });
  console.log(page);
}

nextBtn.addEventListener("click", function () {
  handleNext();
});

function handleNext() {
  if(page == 20) return;
  page = page + 5;
  getData({
    limit: limit,
    page: page,
  });
  console.log(page);
}

function render() {
  const pokeElement = pokemons.results.map(function (pokemon, index) {
    return `
        <div class="item">
        <h4>${index+ 1}. ${pokemon.name}</h4>
        </div>  
        `;
  });
  listPoke.innerHTML = pokeElement.join("");

  const items = document.querySelectorAll(".item");
  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    item.addEventListener("click", function () {
      showInfo(index);

    });
  }

}

function showInfo(index) {
  let singlePoke = {};
  axios.get(pokemons.results[index].url).then((res) => {
    singlePoke = res.data;
    console.log(singlePoke.types.length);
    console.log(singlePoke);
    const infoPoke = `
            <img src= ${singlePoke.sprites.back_default} alt ="">
            <div class="name">
                <h4>${singlePoke.types[0].type.name}</h4>
            </div>
        `;
    info.innerHTML = infoPoke;
  });
}
