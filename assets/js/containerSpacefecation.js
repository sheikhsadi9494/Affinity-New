// tabbed 
function setUpsTabs () {
    document.querySelectorAll(".tab_button").forEach(button => {
      button.addEventListener("click", () => {
        const sidebar = button.parentElement;
        const tabsContainer = sidebar.parentElement.parentElement.parentElement.parentElement;
        const tabsNumber = button.dataset.forTab;
        const tabsToActivate = tabsContainer.querySelector(`.tabs_content[data-for-tab="${tabsNumber}"]`)

        sidebar.querySelectorAll(".tab_button").forEach(button => {
          button.classList.remove("tab_button_active");
        })

        tabsContainer.querySelectorAll(".tabs_content").forEach(tab => {
          tab.classList.remove("tab_content_active");
        })

        button.classList.add("tab_button_active");
        tabsToActivate.classList.add("tab_content_active");


      })
    })
  }
  document.addEventListener("DOMContentLoaded", () => {
    setUpsTabs();
  })

  
// cross text in table 

  document.getElementById('v-pills-home-tab').addEventListener('click', function() {
    const firstText = 'Standard Container';
    const firstValue = firstText;
    const currentText = document.getElementById('cs-text');
    currentText.innerText = firstValue;
})

  document.getElementById('v-pills-profile-tab').addEventListener('click', function() {
    const secondText = 'Refrigerated Container';
    const secondValue = secondText;
    const currentText = document.getElementById('cs-text');
    currentText.innerText = secondValue;
})

  document.getElementById('v-pills-disabled-tab').addEventListener('click', function() {
    const thirdText = 'Open Top Container';
    const thirdValue = thirdText;
    const currentText = document.getElementById('cs-text');
    currentText.innerText = thirdValue;
})

  document.getElementById('v-pills-messages-tab').addEventListener('click', function() {
    const FourthText = 'Flat Rack Container';
    const FourthValue = FourthText;
    const currentText = document.getElementById('cs-text');
    currentText.innerText = FourthValue;
  })

  document.getElementById('v-pills-settings-tab').addEventListener('click', function() {
    const fifthText = 'Tank Container';
    const fifthValue = fifthText;
    const currentText = document.getElementById('cs-text');
    currentText.innerText = fifthValue;
})