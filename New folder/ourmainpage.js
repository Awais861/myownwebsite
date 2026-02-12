 function searchForm() {
     form = document.getElementById("form-head");
     form.addEventListener("submit", function(event) {
         event.preventDefault();
         var searchQuery = form.querySelector("input[type='text']").value;
         alert("You searched for: " + searchQuery);
     });
 }