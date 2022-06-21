/* --------------------------------- Navbar --------------------------------- */
let list = document.getElementById("list"),
  listItems = [...list.children],
  listBtn = document.getElementById("list-btn");

listBtn.addEventListener("click", () => {
  listBtn.classList.toggle("clicked");

  list.classList.toggle("opened");
});

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    listBtn.classList.remove("clicked");
    list.classList.remove("opened");
  });
});

/* --------------------------------- Slider --------------------------------- */

let slider = document.getElementById("slider"),
  bullets = document.querySelectorAll("#bullets span"),
  slit = slider.querySelector(".slit"),
  feedback = slit.children[0];

bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    for (let i = 0; i < bullets.length; i++) {
      bullets[i].classList.remove("active");

      bullet.classList.add("active");

      slit.children[i].classList.remove("active");

      slit.children[index].classList.add("active");
    }
  });
});

slider.addEventListener("click", (e) => {
  let scrollValue = feedback.offsetWidth;

  if (e.target.classList.contains("left")) {
    slit.scrollBy({
      left: -scrollValue,
      top: 0,
      behavior: "smooth",
    });
  }

  if (e.target.classList.contains("right")) {
    slit.scrollBy({
      left: scrollValue,
      top: 0,
      behavior: "smooth",
    });
  }
});

/* ---------------------------------- Form ---------------------------------- */
let newsletter = document.forms[0],
  inputField = newsletter[0],
  SubmitError = newsletter.querySelector(".error");

newsletter.addEventListener("submit", (e) => {
  e.preventDefault();

  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputField.value)) {
    newsletter.submit();
  } else {
    SubmitError.classList.remove("hidden");
    inputField.classList.add("warning");
  }
});
