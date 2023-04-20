function openPublications(evt, cityName) {
  // Declare all variables
  var i, tabbody, tablink;

  // Get all elements with class="tabs-publications-page__tab" and hide them
  tabbody = document.getElementsByClassName("tabs-publications-page__tab");
  for (i = 0; i < tabbody.length; i++) {
    tabbody[i].style.display = "none";
  }

  // Get all elements with class="tabs-publications-page__item" and remove the class "active"
  tablink = document.getElementsByClassName("tabs-publications-page__item");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].className = tablink[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
