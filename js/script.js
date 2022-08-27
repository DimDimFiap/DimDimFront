const links = document.querySelectorAll(".header-menu a");
const activeLink = (link) => {
    if(location.href.includes(link.href)){
        link.classList.add("active");
    };
    console.log("ola")
};

links.forEach(activeLink);

if(window.SimpleAnime){
    new SimpleAnime()
} 