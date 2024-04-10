document.addEventListener("DOMContentLoaded", (event) => {

    loadHome();

    const home_btn = document.getElementById("home");
    const services_btn = document.getElementById("services");
    const services_btn_1= document.getElementById("services_1");
    const services_btn_2 = document.getElementById("services_2");
    const services_btn_3 = document.getElementById("services_3");
    const order_btn = document.getElementById("order");

    home_btn.addEventListener("click", loadHome);
    services_btn_1.addEventListener("click", function() { 
        loadServices(1);
    });
    services_btn_2.addEventListener("click", function() { 
        loadServices(2);
    });
    services_btn_3.addEventListener("click", function() { 
        loadServices(3);
    });
    order_btn.addEventListener("click", loadOrder);

    function loadHome() {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("page_content").innerHTML = xhr.responseText;
                loadHomeScripts();
                //Slide navigáció kikapcsolás
                if(isNavShowed == true) {
                    toggleSlideNav();
                }
                }
            };
        xhr.open("GET", "home.html", true);
        xhr.send();
    }

    function loadServices(contentToScroll) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("page_content").innerHTML = xhr.responseText;
                toggleSlideNav();
                disableSubmit();
                if(contentToScroll == 1) {
                    const target = document.getElementById("bertermeles");
                    target.scrollIntoView();
                    }
                if(contentToScroll == 2) {
                    const target = document.getElementById("szaktanacsadas");
                    target.scrollIntoView();
                    }
                if(contentToScroll == 3) {
                    const target = document.getElementById("arajanlat");
                    target.scrollIntoView();
                    }
                }
            };
        xhr.open("GET", "services.html", true);
        xhr.send();
    }

    function loadOrder() {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("page_content").innerHTML = xhr.responseText;
                disableSubmit();
                //Slide navigáció kikapcsolás
                    if(isNavShowed == true) {
                        toggleSlideNav();
                    }
                }
            };
        xhr.open("GET", "order.html", true);
        xhr.send();
    }

    function loadHomeScripts() {

        //submit kikapcsolás

        disableSubmit();

        //Kártyák

        const cards = document.querySelectorAll(".card");
        const card_contents = document.querySelectorAll(".card_text");
        const card_labels = document.querySelectorAll(".card_label");
        
        for(let i = 0; i < cards.length; i++) {
            cards[i].onmouseover = function(e) {
                cards[i].style.transform = "scale(1.04)";
                cards[i].style.transitionDuration = "400ms";
                card_contents[i].style.opacity = "1";
                card_contents[i].style.translate = "-380px 0px";
                card_contents[i].style.transitionDuration = "400ms";
                card_labels[i].style.translate = "0px -330px";
                card_labels[i].style.transitionDuration = "400ms";
            };
            cards[i].onmouseout = function(e) {
                cards[i].style.transform = "scale(1)";
                cards[i].style.transitionDuration = "400ms";
                card_contents[i].style.opacity = "0";
                card_contents[i].style.translate = "0px 0px";
                card_contents[i].style.transitionDuration = "400ms";
                card_labels[i].style.translate = "0px 0px";
                card_labels[i].style.transitionDuration = "400ms";
                };
            }
        }

        //navigáció slide

        const slide_nav = document.querySelector(".slide_nav");
        const slide_icon = document.getElementById("slide_icon");

        services_btn.addEventListener("click", toggleSlideNav);

        let isNavShowed = false;

        function toggleSlideNav() { 
            if(isNavShowed == false) {
                slide_nav.style.transform = "scale(1)";
                slide_nav.style.transformOrigin = "top";
                slide_nav.style.transitionDuration = "300ms";
                slide_nav.style.transitionTimingFunction = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
                document.getElementById("slide_icon").style.transform = "rotate(180deg)";
                slide_icon.style.transitionDuration = "300ms";
                slide_icon.style.transitionTimingFunction = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
                isNavShowed = true;
                return;
            } else {
                slide_nav.style.transform = "scale(0)";
                slide_nav.style.transformOrigin = "top";
                slide_nav.style.transitionDuration = "300ms";
                slide_nav.style.transitionTimingFunction = "ease";
                document.getElementById("slide_icon").style.transform = "rotate(0deg)";
                slide_icon.style.transitionDuration = "300ms";
                isNavShowed = false;
                return;
            }
        }

        //Submit gombok kikapcsolás mivel nincsen rájuk szükségünk jelenleg.

        function disableSubmit() {
            document.querySelector(".form_btn").addEventListener("click", function(event){
                event.preventDefault()
            });
            
            //Több form esetén (querySelectorALL -> for loop)
        }
    }); 
