const listItem = document.querySelector("#list-item");

let foods = [];

function getData() {
    axios
        .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res) => {
            foods = res.data.meals;
            console.log(foods);
            render()
        });
}

function render() {
    const foodElement = foods.map(function(food) {
        return `
        <div class="item d-flex">
            <div class="p-2 bd-highlight">
                <a href=#><img src= ${food.strMealThumb} alt="" style="width: 12rem;"></a>
            </div>
            <div class="p-2 bd-highlight">
                <h5>${food.strMeal}</h5>
            </div>
        </div>
        `
    });
    listItem.innerHTML = foodElement.join("");
        
}

getData();