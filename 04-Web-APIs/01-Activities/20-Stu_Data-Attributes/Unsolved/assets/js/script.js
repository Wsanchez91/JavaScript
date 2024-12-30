const container = document.querySelector('.container');

container.addEventListener('click', function (event) {
  const element = event.target;

  // TODO: Complete function
  if(element.matches('.box')) {
    const state = element.getAttribute('data-state');
    
    if (state === "hidden"){
      element.dataset.state = "visible";
      element.textContent = element.getAttribute('data-number');
      element.setAttributez('src',)
    }else {
      element.setAttributez("data-state", "hidden")
      element.textContent = '';
    }
  }
});
