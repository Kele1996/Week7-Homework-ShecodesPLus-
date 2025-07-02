function handleSearchSubmit (event){
event.preventDefault();
let searchInput = document.querySelector("#search-form-input");
let cityElement = document.querySelector(#city);
cityElement.innerHtml = searchInput.value
}


let searchFormElement = document.querySelector(#search-form);
SearchFormElement.addEventListener("Submit",handleSearchSubmit);