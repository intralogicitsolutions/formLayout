function openTab(evt, cityName) {
    console.log("card", cityName, evt);
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openTab1(evt, cityName) {
      console.log("card", cityName, evt);
    // Declare all variables
    var i, tab1content, tab1links ,addActive;

    // Get all elements with class="tab1content" and hide them
    tab1content = document.getElementsByClassName("tab1content");
    for (i = 0; i < tab1content.length; i++) {
        tab1content[i].style.display = "none";
    }

    // Get all elements with class="tab1links" and remove the class "active"
    tab1links = document.getElementsByClassName("tab1links");
    for (i = 0; i < tab1links.length; i++) {
        tab1links[i].className = tab1links[i].className.replace(" active", "");
    }

    // Show the current tab1, and add an "active" class to the button that opened the tab1
    document.getElementById(cityName).style.display = "block";
    addActive =  document.getElementById(cityName+"tab")
      addActive.classList.add("active");
    //  $(cityName).addClass(" active");
    console.log(addActive, addActive.classList);
//    addActive.className += " active";
//    / evt.currentTarget.className += " active";

}
document.getElementById("London1tab").click();

function changeTab(event, tabId){
    console.log("change tab",event,tabId);
// document.getElementById(tabId).click();
openTab1(event, tabId);
}

function openTab2(evt, cityName) {
    console.log("card", cityName, evt);
    // Declare all variables
    var i, tab2content, tab2links, addActive;

    // Get all elements with class="tab2content" and hide them
    tab2content = document.getElementsByClassName("tab2content");
    for (i = 0; i < tab2content.length; i++) {
        tab2content[i].style.display = "none";
    }

    // Get all elements with class="tab2links" and remove the class "active"
    tab2links = document.getElementsByClassName("tab2links");
    for (i = 0; i < tab2links.length; i++) {
        tab2links[i].className = tab2links[i].className.replace(" active", "");
    }

    // Show the current tab2, and add an "active" class to the button that opened the tab2
    document.getElementById(cityName).style.display = "block";
    addActive = document.getElementById(cityName + "tab");
    addActive.classList.add("active");
    //  $(cityName).addClass(" active");
    console.log(addActive, addActive.classList);
    //    addActive.className += " active";
    //    / evt.currentTarget.className += " active";
}
document.getElementById("London2tab").click();

function openTab3(evt, cityName) {
    console.log("card", cityName, evt);
    // Declare all variables
    var i, tab3content, tab3links, addActive;

    // Get all elements with class="tab3content" and hide them
    tab3content = document.getElementsByClassName("tab3content");
    for (i = 0; i < tab3content.length; i++) {
        tab3content[i].style.display = "none";
    }

    // Get all elements with class="tab3links" and remove the class "active"
    tab3links = document.getElementsByClassName("tab3links");
    for (i = 0; i < tab3links.length; i++) {
        tab3links[i].className = tab3links[i].className.replace(" active", "");
    }

    // Show the current tab3, and add an "active" class to the button that opened the tab3
    document.getElementById(cityName).style.display = "block";
    addActive = document.getElementById(cityName + "tab");
    addActive.classList.add("active");
    //  $(cityName).addClass(" active");
    console.log(addActive, addActive.classList);
    //    addActive.className += " active";
    //    / evt.currentTarget.className += " active";
}
document.getElementById("London3tab").click();