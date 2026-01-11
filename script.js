let selectedCategory = "Mathematics";
alert("SCRIPT.JS LOADED");
let selectedLevel = "all";

const subjectSelect = document.getElementById("subjectSelect");
const content = document.getElementById("content");
const searchInput = document.getElementById("search");

// Load subjects into dropdown
function loadSubjects() {
  subjectSelect.innerHTML = "";

  Object.keys(flashcardData[selectedCategory]).forEach(subject => {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    subjectSelect.appendChild(option);
  });

  renderCards();
}

// Render cards
function renderCards() {
  const subject = subjectSelect.value;
  const data = flashcardData[selectedCategory][subject];
  const searchText = searchInput.value.toLowerCase();

  content.innerHTML = "";

  for (let chapter in data) {

    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = chapter;
    content.appendChild(sectionTitle);

    const cardsDiv = document.createElement("div");
    cardsDiv.className = "cards";

    data[chapter].forEach(card => {

      const matchesSearch =
        card.q.toLowerCase().includes(searchText) ||
        card.a.toLowerCase().includes(searchText);

      const matchesLevel =
        selectedLevel === "all" || card.level === selectedLevel;

      if (matchesSearch && matchesLevel) {

        const cardDiv = document.createElement("div");
        cardDiv.className = `card ${card.level}`;

        cardDiv.innerHTML = `
          <div class="inner">
            <div class="face front ${card.level}">
              ${card.q}
            </div>
            <div class="face back">
              ${card.a}
            </div>
          </div>
        `;

        cardDiv.onclick = () => cardDiv.classList.toggle("flip");
        cardsDiv.appendChild(cardDiv);
      }
    });

    if (cardsDiv.children.length > 0) {
      content.appendChild(cardsDiv);
      if (window.MathJax) {
  MathJax.typesetPromise();
}

    }
  }
}


// Events
subjectSelect.addEventListener("change", renderCards);
searchInput.addEventListener("keyup", renderCards);

// Initial load
renderCards();

function filterLevel(level) {
  console.log("Filter clicked:", level);
  selectedLevel = level;
  renderCards();
}

function selectCategory(category) {
  selectedCategory = category;
  loadSubjects();
}

loadSubjects();

