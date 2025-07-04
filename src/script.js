const data = [
  {
    logo: "./assets/images/logo-devlens.svg",
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-json-wizard.svg",
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-markup-notes.svg",
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-grid-guides.svg",
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-console-plus.svg",
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];

const cardWrapper = document.getElementById("card-wrapper");
const toggleTheme = document.querySelector(".toggle-icon");
const allBtn = document.querySelector(".all");
const activeBtn = document.querySelector(".active");
const inActiveBtn = document.querySelector(".inactive");

cardWrapper.innerHTML = data
  .map((item) => {
    console.log({
      logo: item.logo,
      name: item.name,
      isActive: item.isActive,
    });
    return `<div class="card bg-white p-3 rounded-xl">
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
            <button class="border px-3 py-1 rounded-3xl">Remove</button>
            <label
              class="cursor-pointer w-12 h-6 border rounded-3xl flex items-center justify-center relative peer-checked:bg-red-600"
              ><input type="checkbox" name="toggle" class="sr-only peer" ${
                item.isActive ? "checked" : ""
              } />
              <span
                class="absolute left-1 top-1 w-4 h-4 rounded-full bg-[#D1D5DB] peer-checked:translate-x-full peer-checked:bg-red-600 peer-checked:left-2 transition-all duration-300 ease-in-out"
              ></span
            ></label>
          </div>
        </div> `;
  })
  .join("");

allBtn.addEventListener("click", () => {
  cardWrapper.innerHTML = data
    .filter((item) => item.isActive)
    .map((item) => {
      console.log({
        logo: item.logo,
        name: item.name,
        isActive: item.isActive,
      });
      return `<div class="card bg-white p-3 rounded-xl">
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
            <button class="border px-3 py-1 rounded-3xl">Remove</button>
            <label
              class="cursor-pointer w-12 h-6 border rounded-3xl flex items-center justify-center relative peer-checked:bg-red-600"
              ><input type="checkbox" name="toggle" class="sr-only peer" ${
                item.isActive ? "checked" : ""
              } />
              <span
                class="absolute left-1 top-1 w-4 h-4 rounded-full bg-[#D1D5DB] peer-checked:translate-x-full peer-checked:bg-red-600 peer-checked:left-2 transition-all duration-300 ease-in-out"
              ></span
            ></label>
          </div>
        </div> `;
    })
    .join("");
});

activeBtn.addEventListener("click", () => {
  cardWrapper.innerHTML = data
    .filter((item) => item.isActive)
    .map((item) => {
      console.log({
        logo: item.logo,
        name: item.name,
        isActive: item.isActive,
      });
      return `<div class="card bg-white p-3 rounded-xl">
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
            <button class="border px-3 py-1 rounded-3xl">Remove</button>
            <label
              class="cursor-pointer w-12 h-6 border rounded-3xl flex items-center justify-center relative peer-checked:bg-red-600"
              ><input type="checkbox" name="toggle" class="sr-only peer" ${
                item.isActive ? "checked" : ""
              } />
              <span
                class="absolute left-1 top-1 w-4 h-4 rounded-full bg-[#D1D5DB] peer-checked:translate-x-full peer-checked:bg-red-600 peer-checked:left-2 transition-all duration-300 ease-in-out"
              ></span
            ></label>
          </div>
        </div> `;
    })
    .join("");
});

inActiveBtn.addEventListener("click", () => {
  cardWrapper.innerHTML = data
    .filter((item) => !item.isActive)
    .map((item) => {
      console.log({
        logo: item.logo,
        name: item.name,
        isActive: item.isActive,
      });
      return `<div class="card bg-white p-3 rounded-xl">
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
            <button class="border px-3 py-1 rounded-3xl">Remove</button>
            <label
              class="cursor-pointer w-12 h-6 border rounded-3xl flex items-center justify-center relative peer-checked:bg-red-600"
              ><input type="checkbox" name="toggle" class="sr-only peer" ${
                item.isActive ? "checked" : ""
              } />
              <span
                class="absolute left-1 top-1 w-4 h-4 rounded-full bg-[#D1D5DB] peer-checked:translate-x-full peer-checked:bg-red-600 peer-checked:left-2 transition-all duration-300 ease-in-out"
              ></span
            ></label>
          </div>
        </div> `;
    })
    .join("");
});

// theme toggle
// Check for saved theme in localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Save preference
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
