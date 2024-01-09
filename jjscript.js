document.addEventListener("DOMContentLoaded", function() {
    // Get the parent container of the elements
    var container = document.querySelector('.default_products_list');

    // Get the two elements you want to swap
    var firstElement = container.querySelector('.list_category_description');
    var secondElement = container.querySelector('.themes_plist_right'); // or '.list_category'

    // Swap the elements
    container.insertBefore(secondElement, firstElement);
});