const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item
function selectItem(e) {
    //Remove the red border
    removeBorder();
    //remove show class
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border')
    //Grab content item from DOM
    tabContentItem = document.querySelector(`#${this.id}-content`);
    //Add show class
    tabContentItem.classList.add('show');
}
//remove border function
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
//remove show class function
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//Nodelist are like an array can loop thrugh them
//Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));