const chapterTitle = document.getElementById("chapter-title");
const reader = document.getElementById("reader");
const prevChapterBtn = document.getElementById("prevChapter");
const nextChapterBtn = document.getElementById("nextChapter");

// Datos de prueba
const mangaData = {
  title: "Manga 1",
  chapter: 1,
  totalChapters: 3,
  pages: [
    "images/manga1/capitulo-1/001.jpg",
    "images/manga1/capitulo-1/002.jpg",
    "images/manga1/capitulo-1/003.jpg",
    "images/manga1/capitulo-1/004.jpg"
  ]
};

function renderChapter() {
  chapterTitle.textContent = `${mangaData.title} - Capítulo ${mangaData.chapter}`;
  reader.innerHTML = "";

  mangaData.pages.forEach((pageSrc, index) => {
    const img = document.createElement("img");
    img.src = pageSrc;
    img.alt = `Página ${index + 1}`;
    img.className = "page-image";
    loading = "lazy";
    reader.appendChild(img);
  });

  prevChapterBtn.disabled = mangaData.chapter <= 1;
  nextChapterBtn.disabled = mangaData.chapter >= mangaData.totalChapters;
}

prevChapterBtn.addEventListener("click", () => {
  alert("Aquí luego cargarás el capítulo anterior");
});

nextChapterBtn.addEventListener("click", () => {
  alert("Aquí luego cargarás el capítulo siguiente");
});

renderChapter();
