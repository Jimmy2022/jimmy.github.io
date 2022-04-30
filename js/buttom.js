<script>
    // this must after search-content
    // https://www.tutorialspoint.com/adding-default-search-text-to-search-box-in-html-with-javascript
    var defaultSearchText = "??";
    var textBoxSearch = document.getElementById("search-content");
    textBoxSearch.value = defaultText;
    textBoxSearch.onfocus = function () {
        if (this.value == defaultSearchText) {
        this.value = ''
            console.log("focuse on search box")
        }
    }
</script>