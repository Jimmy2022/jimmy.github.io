// this must after search-content
// https://www.tutorialspoint.com/adding-default-search-text-to-search-box-in-html-with-javascript
var defaultSearch = "日历";
var textBoxSearch = document.getElementById("search-content");
textBoxSearch.value = defaultSearch;
textBoxSearch.onfocus = function () {
    if (this.value == defaultSearch) {
        this.value = ''
        console.log("focuse on search box")
    }
}