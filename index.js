const formTag = document.getElementById("create-task-form");

const ulTag = document.getElementById("tasks");

// const buttonTag = document.querySelector("button");


formTag.addEventListener("submit", function(event) {
  event.preventDefault();
  ulTag.innerHTML +=
    `<li>
        ${event.target['new-task-description'].value}
        <button data-description="h">X</button>
      </li>`

})

ulTag.addEventListener("click", function(event) {

    if (event.target.innerText === "X") {
        event.target.parentElement.remove()
    }
})
