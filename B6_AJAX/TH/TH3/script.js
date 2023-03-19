const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
const apiKey = "4d8fb5b93d4af21d66a2948710284366";

form.addEventListener("submit", function (event) {
  const inputVal = input.value;
  event.preventDefault();
  if (!inputVal) {
    alert("Nhập dữ liệu");
  }
  else {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`).then((res) => {
      const { main, name, sys, weather } = res.data;
      const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]
        }@2x.png`;

      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
              <h2 class="city-name" data-name="${name},${sys.country}">
                <span>${name}</span>
                <sup>${sys.country}</sup>
              </h2>
              <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
              <figure>
                <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
                <figcaption>${weather[0]["description"]}</figcaption>
              </figure>
            `;
      li.innerHTML = markup;
      list.appendChild(li);
    })
  }
  input.value = ""
})