import data from "../data.json" with { type: "json" };

const cardWrapper = document.getElementById("card-wrapper");
const allBtn = document.querySelector(".all");
const activeBtn = document.querySelector(".active");
const inActiveBtn = document.querySelector(".inactive");
const toggleBtn = document.querySelector(".toggle-icon");
const html = document.documentElement;

let tab;

const renderCard = (data) => {
  cardWrapper.innerHTML = data
    .map((item) => {
      return `<div class="card bg-white dark:bg-neutral-900 dark:text-white p-3 rounded-xl">
          <div class="flex space-x-3">
            <img src=${item.logo} alt="logo" />
            <div class="flex flex-col">
              <h3 class="text-sm sm:text-base md:text-lg font-semibold">
                ${item.name}
              </h3>
              <p class="text-sm sm:text-base font-light">
                ${item.description}
              </p>
            </div>
          </div>
          <div class="mt-5 flex justify-between">
            <button class="border px-3 py-1 rounded-3xl remove" data-name="${
              item.name
            }">Remove</button>
            <label
              class="cursor-pointer w-12 h-6 border rounded-3xl flex items-center justify-center relative peer-checked:bg-red-600"
              >
              <input type="checkbox" name="toggle" class="sr-only peer toggle" data-toggle="${
                item.name
              }" ${item.isActive ? "checked" : ""} />
              <span
                class="absolute left-1 top-1 w-4 h-4 rounded-full bg-[#D1D5DB] peer-checked:translate-x-full peer-checked:bg-red-600 peer-checked:left-2 transition-all duration-300 ease-in-out"
              ></span
            ></label>
          </div>
        </div> `;
    })
    .join("");
};

// Initial render
renderCard(data);

allBtn.addEventListener("click", () => {
  tab = "all";
  renderCard(data);
});

activeBtn.addEventListener("click", () => {
  tab = "active";
  renderCard(data.filter((item) => item.isActive));
});

inActiveBtn.addEventListener("click", () => {
  tab = "inactive";
  renderCard(data.filter((item) => !item.isActive));
});

cardWrapper.addEventListener("click", (e) => {
  if (!e.target.classList.contains("remove")) return;
  const name = e.target.dataset.name;
  const updated = data.filter((item) => item.name !== name);
  console.log({ updated });

  data.length = 0;
  data.push(...updated);

  preserveTab();
});

cardWrapper.addEventListener("change", (e) => {
  if (!e.target.classList.contains("toggle")) return;

  const item = e.target.dataset.toggle;
  let checked = e.target.checked;
  const updated = data.find((i) => i.name === item);

  updated.isActive = checked;

  preserveTab();
});


const preserveTab = () => {
  switch (tab) {
    case "all":
      renderCard(data);
      break;

    case "active":
      renderCard(data.filter((item) => item.isActive));
      break;

    case "inactive":
      renderCard(data.filter((item) => !item.isActive));
      break;

    default:
      renderCard(data);
  }
};


if (localStorage.theme === 'dark') {
  html.classList.add('dark')
}

toggleBtn.addEventListener('click', () => {
  html.classList.toggle("dark")
  if (html.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }
})
