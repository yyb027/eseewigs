document.addEventListener("DOMContentLoaded", function() {
    // 获取父容器
    var container = document.querySelector('.parent-container');

    // 获取要交换的两个元素
    var listCategoryDescription = document.querySelector('.list_category_description');
    var themesPlistRight = document.querySelector('.themes_plist_right');

    // 把`.themes_plist_right`移动到`.list_category_description`之前
    container.insertBefore(themesPlistRight, listCategoryDescription);

    // 或者，如果你想交换它们的位置，可以这样做
    // container.insertBefore(listCategoryDescription, themesPlistRight.nextSibling);
});