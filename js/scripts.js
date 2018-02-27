$(document).ready(function(){
    
    var navButton = document.querySelector(".menu-toggle");
    var verticalNav = document.querySelector("nav #nav-vertical");
    var searchButton = document.querySelector("header nav #nav-header-bottom .icons .search");
    var searchBox = document.querySelector("header #search-box");
    
    
    /*
     $("#welcome").waypoint(function(direction){
        $("#welcome-box").addClass("animated fadeIn");
    }, {
        offset: "50%"
            });
            */
    
    
    
    
    
    navButton.addEventListener("click", function(){
        
        verticalNav.classList.toggle("move");
        
        if (searchBox.classList.contains("display") === true) {
            //code
            searchBox.classList.toggle("display");
            }
        
        });
    
    
    
    
    
    
    
    searchButton.addEventListener("click", function(){
        
        searchBox.classList.toggle("display");
        
        if (verticalNav.classList.contains("move") === true) {
            //code
            verticalNav.classList.toggle("move");
        }
        
        
        });
    
    
    
    
   
  
    
    
});  
  