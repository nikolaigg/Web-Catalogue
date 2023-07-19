const modals = document.querySelectorAll(".modal");
const buttons = document.querySelectorAll(".btn");
const spans = document.querySelectorAll(".close_modal");

buttons.forEach((button,i)=>{
  button.onclick = function() {
    modals[i].style.display = "block";
  }
})
spans.forEach((span,i)=>{
  span.onclick = function() {
    modals[i].style.display = "none";
    const iframe = modals[i].querySelector("iframe");
    iframe.src = iframe.src;
  }
})
window.onclick = function(event) {
  modals.forEach((modal, i)=>{
    if (event.target === modal) {
      modal.style.display = "none";
      const iframe = modals[i].querySelector("iframe");
      iframe.src = iframe.src;
    }
  });
}
