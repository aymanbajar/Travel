document.querySelector(".fa-solid.fa-bars").addEventListener("click", () => {
  const nav = document.querySelector(".navigation");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});
