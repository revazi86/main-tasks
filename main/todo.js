let dataRows = [];
const NUM_ELEMENTS_PER_PAGE = 20;

let pageIndexesWrapperRef = document.getElementById("pageIndexesWrapper");
let pageIndexesRef = pageIndexesWrapperRef.getElementsByClassName("page-indexes")[0];
let prevPageButtonRef = pageIndexesWrapperRef.getElementsByClassName("prev")[0];
let nextPageButtonRef = pageIndexesWrapperRef.getElementsByClassName("next")[0];
let currentPage = -1;
let dataWrapperRef = document.getElementById("data");


const fetchData = fetch("https://jsonplaceholder.typicode.com/todos").then(res => {
  res.json().then(data => {
    populateDataRows(data);
    showElements(0);
    updateButtons()
    setupPageingButtons(data.length)
  })
})


function populateDataRows(data) {
  data.forEach(item => {
    let row = '';
    row += "<tr>";
    row += "<td>" + item.title + "</td>";
    row += "<td>" + item.completed + "</td>";
    row += "<td>" + item.id + "</td>";
    row += "<td>" + "10/11/2021" + "</td>";
    row += "<td>" + "12/11/2021" + "</td>";
    row += "<td>" + "<button>" + "Delete" + "</button>" + "</td></tr>"
    dataRows.push(row);
  })
}


function showElements(pageIndex) {
  currentPage = pageIndex;

  let startIndex = pageIndex * NUM_ELEMENTS_PER_PAGE;
  let endIndex = startIndex + NUM_ELEMENTS_PER_PAGE;
  let dataWrapperRef = document.getElementById('data');

  dataWrapperRef.innerHTML = '';
  for (let i = startIndex; i < endIndex; i++) {
    dataWrapperRef.innerHTML += dataRows[i];
  }
}

function setupPageingButtons(dataLength) {
  let numPages = Math.floor(dataLength / NUM_ELEMENTS_PER_PAGE);
  for (let i = 0; i < numPages; i++) {
    let button = document.createElement('button');
    button.innerHTML = i + 1;
    button.addEventListener("click", onPagingButtonClick)
    pageIndexesRef.appendChild(button);
  }

  currentPage = 0;

  prevPageButtonRef.addEventListener("click", onPrevPageButtonClick);
  nextPageButtonRef.addEventListener("click", onNextPageButtonClick);

  updateButtons();

}

function onPagingButtonClick(event) {
  let pageIndex = parseInt(event.target.innerHTML) - 1;
  showElements(pageIndex)
  updateButtons()
}

function onPrevPageButtonClick(event) {
  showElements(--currentPage)
  updateButtons()
}

function onNextPageButtonClick(event) {
  showElements(++currentPage)
  updateButtons()
}

function updateButtons() {

  //Disables PREV button if first page is active and NEXT if last page is active
  prevPageButtonRef.removeAttribute("disabled");
  nextPageButtonRef.removeAttribute("disabled");

  if (currentPage == 0) {
    prevPageButtonRef.disabled = true;
  }

  if (currentPage == pageIndexesRef.children.length - 1) {
    nextPageButtonRef.disabled = true;
  }

  //Shows only five buttons at a time

  numPages = pageIndexesRef.children.length;
  let firstPageButtonToShow
  if (numPages <= 5) return;

  if (currentPage == 0) {
    firstPageButtonToShow = 0
  } else if (currentPage > 0 && currentPage < numPages - 4) {
    firstPageButtonToShow = currentPage - 1;
  } else {
    firstPageButtonToShow = numPages - 5;
  }

  for (let i = 0; i < numPages; i++) {
    if (i >= firstPageButtonToShow && i < firstPageButtonToShow + 5) {
      pageIndexesRef.children[i].classList.remove("hide")
    } else {
      pageIndexesRef.children[i].classList.add("hide")

    }
    pageIndexesRef.children[i].classList.remove("activeBtn")
  }
  pageIndexesRef.children[currentPage].classList.add("activeBtn")
}


// Opens Modal
const modalBtn = document.querySelector(".modal-btn")
const modalBg = document.querySelector(".modal-bg")

modalBtn.addEventListener("click" , function() {
  modalBg.classList.add("bg-active");
})


// When the user clicks on close button of the modal , close it
const closeBtn = document.getElementById("close")
closeBtn.addEventListener("click", function(){
  modalBg.classList.remove("bg-active");
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalBg) {
    modalBg.classList.remove("bg-active")
  }
}

// Toggle menu
const menuBtn = document.getElementById("menu")
const closeButton = document.getElementById("sidebar-close")
const menuImg = document.getElementById("sidebar-icon")
var sideBar  = document.getElementById("side-bar")
  function openMenu(){
    sideBar.style.display="block";
    sideBar.style.width = "100%";
    menuImg.style.display="none";
    closeButton.style.display = "block";
  }
  function closeMenu(){
    sideBar.style.width = "0%";
  }

menuBtn.addEventListener('click', openMenu)
closeButton.addEventListener('click', closeMenu)


