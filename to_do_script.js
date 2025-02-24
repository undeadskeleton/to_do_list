let userIn = document.querySelector(".userIn");
let userInbtn = document.querySelector(".userIn-btn");
let listcont = document.querySelector(".list_container");

userInbtn.addEventListener("click", handleEvent);
userIn.addEventListener("keypress", handleEvent);

async function addlist() {
  let itemcont = document.createElement("div");
  let editTask = document.createElement("input");

  itemcont.classList.add("item_container");
  listcont.append(itemcont);

  let check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  itemcont.append(check);

  check.addEventListener("change", () => {
    if (check.checked) {
      textar.style.textDecoration = "line-through";
    } else {
      textar.style.textDecoration = "none";
    }
  });

  let textar = document.createElement("span");
  textar.classList.add("text_area");
  textar.textContent = userIn.value;
  userIn.value = "";
  itemcont.append(textar);

  textar.addEventListener("click", () => {
    textar.style.display = "none";
    editTask.style.display = "inline-block";
    editTask.focus();
    itemcont.insertBefore(editTask, itemcont.lastElementChild);
  });

  let del = document.createElement("button");
  del.textContent = "DEL";
  del.classList.add("delbtn");
  itemcont.append(del);

  del.addEventListener("click", () => {
    del.parentElement.remove();
  });

  editTask.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      console.log(e.key);
      textar.textContent = editTask.value;
      textar.style.display = "inline";
      editTask.style.display = "none";
    }
  });
}

async function handleEvent(event) {
  if (
    event.type === "click" ||
    (event.type === "keypress" && event.key === "Enter")
  ) {
    if (userIn.value.length > 0) {
      await addlist();
    }
  }
}
