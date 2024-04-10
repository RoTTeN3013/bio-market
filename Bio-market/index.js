
document.addEventListener("DOMContentLoaded", (event) => {

    //Logó forgatása

    const flipTimer = setInterval(logoFlip, 4000);

    let flipped = false;

    function logoFlip() {
        const back = document.getElementById("nametag_back");
        const front = document.getElementById("nametag_front");
        if(flipped == false) {
            front.style.transform = "rotateY(180deg)";
            back.style.transform = "rotateY(0deg)";
            front.style.transitionDuration = "1000ms";
            back.style.transitionDuration = "1000ms";
            flipped = true;
            return;
        }  
        if(flipped == true) {
            back.style.transform = "rotateY(180deg)";
            front.style.transform = "rotateY(0deg)";
            back.style.transitionDuration = "1000ms";
            front.style.transitionDuration = "1000ms";
            flipped = false;
            return;
        }  
    }

    //Logó forgatása...

    //Vissza top button

    const toTopBTN = document.getElementById("to_top_btn");

    const scrollView = () => {
        return document.documentElement || document.body;
        };

    document.addEventListener("scroll", () => {
        if (scrollView().scrollTop > 1000) {
            toTopBTN.classList.remove("top_btn_hidden")
        } else {
            toTopBTN.classList.add("top_btn_hidden")
        }
    })

    const toTop = () => {
        document.body.scrollIntoView();
      };

      toTopBTN.addEventListener("click", toTop);

}); 
    
    

















