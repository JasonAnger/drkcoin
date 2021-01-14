window.onscroll = function onScrollWindow() {
    setTimeout(() => {
        if(document.getElementById("main-content"))
        if (window.outerWidth <= 768) {
          for (let i = 0; i < document.getElementById("main-content").getElementsByTagName("img").length; i++) {
            if (Number(document.getElementById("main-content").getElementsByTagName("img")[i].style.width.replace("px", "")) > window.outerWidth) {
              document.getElementById("main-content").getElementsByTagName("img")[i].style.width = "90vw"
              document.getElementById("main-content").getElementsByTagName("img")[i].style.height = "auto"
            }
          }
        } else {
            for (let i = 0; i < document.getElementById("main-content").getElementsByTagName("img").length; i++) {
                if (Number(document.getElementById("main-content").getElementsByTagName("img")[i].style.width.replace("px", "")) > 500) {
                  document.getElementById("main-content").getElementsByTagName("img")[i].style.width = "800px"
                  document.getElementById("main-content").getElementsByTagName("img")[i].style.height = "auto"
                }
              }
        }
      }, 200)
    if(window.innerWidth>1000) {
    }
    else {
        if(document.getElementById("nav-list").style.right!=="-100%") {
            document.getElementById("nav-list").style.display="none"
            document.getElementById("line1").style.transition="all 0.3s ease"
            document.getElementById("line3").style.transition="all 0.3s ease"
            document.getElementById("line2").style.display= "block"
            document.getElementById("line1").style.transform= "rotate(0deg)"
            document.getElementById("line1").style.marginTop="5px"
            document.getElementById("line3").style.transform= "rotate(0deg)"
            document.getElementById("line3").style.marginTop="5px"
            document.getElementById("nav-list").style.right="-100%"
        }
    }
}
function clickQuestion(item) {
    if(document.getElementById(item).style.opacity==0) {
        document.getElementById(item).style.display="block"
        document.getElementById(item).style.opacity=1
        document.getElementById("q"+item).getElementsByTagName("div")[0].style.color="#4db2a5"
        document.getElementById("q"+item).getElementsByTagName("svg")[0].style.transition="all 0.3s ease"
        document.getElementById("q"+item).getElementsByTagName("svg")[0].style.transform="rotate(45deg)"
        document.getElementById("q"+item).getElementsByTagName("svg")[0].style.fill="#4db2a5"
        document.getElementById(item).className="answer animate__animated animate__fadeIn animate__delay-0.5s"
    }
    else {
        document.getElementById(item).className="answer animate__animated animate__fadeOut"
        document.getElementById("q"+item).getElementsByTagName("div")[0].style.color=""
        document.getElementById("q"+item).getElementsByTagName("svg")[0].style.transition="all 0.3s ease"
        document.getElementById("q"+item).getElementsByTagName("svg")[0].style.transform="rotate(0deg)"
        document.getElementById("q"+item).getElementsByTagName("svg")[0].style.fill=""
        setTimeout(() => {
            document.getElementById(item).style.display="none"
            document.getElementById(item).style.opacity=0
        }, 700)
    }
    for(let i=1; i<10; i++) {
        if("answer"+i!==item) {
            document.getElementById("answer"+i).className="answer animate__animated animate__fadeOut"
            document.getElementById("q"+"answer"+i).getElementsByTagName("div")[0].style.color=""
            document.getElementById("q"+"answer"+i).getElementsByTagName("svg")[0].style.transition="all 0.3s ease"
            document.getElementById("q"+"answer"+i).getElementsByTagName("svg")[0].style.transform="rotate(0deg)"
            document.getElementById("q"+"answer"+i).getElementsByTagName("svg")[0].style.fill=""
            setTimeout(() => {
                document.getElementById("answer"+i).style.display="none"
                document.getElementById("answer"+i).style.opacity=0
            }, 1000)
        }
    }
}
function slideTo(item){
    if(item=="top") {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    else {
        if(window.innerWidth>1000)
            window.scrollTo({top: document.getElementById(item).offsetTop-150, behavior: 'smooth'})
        else
            window.scrollTo({top: document.getElementById(item).offsetTop, behavior: 'smooth'})
    }
}
function burgerHandleClick() {
    if(document.getElementById("nav-list").style.right=="-100%" || document.getElementById("nav-list").style.right=="") {
        document.getElementById("nav-list").style.display="block"
        document.getElementById("nav-list").style.transition="all 0.3s ease-in"
        document.getElementById("line1").style.transition="all 0.3s ease"
        document.getElementById("line3").style.transition="all 0.3s ease"
        document.getElementById("line2").style.display= "none"
        document.getElementById("line1").style.transform= "rotate(45deg)"
        document.getElementById("line1").style.marginTop="20px"
        document.getElementById("line3").style.transform= "rotate(-45deg)"
        document.getElementById("line3").style.marginTop="-10px"
        document.getElementById("nav-list").style.right="0%"
    }
    else if(document.getElementById("nav-list").style.right!=="-100%") {
        document.getElementById("nav-list").style.display="none"
        document.getElementById("line1").style.transition="all 0.3s ease"
        document.getElementById("line3").style.transition="all 0.3s ease"
        document.getElementById("line2").style.display= "block"
        document.getElementById("line1").style.transform= "rotate(0deg)"
        document.getElementById("line1").style.marginTop="5px"
        document.getElementById("line3").style.transform= "rotate(0deg)"
        document.getElementById("line3").style.marginTop="5px"
        document.getElementById("nav-list").style.right="-100%"
    }
}

function showVideo() {
    document.getElementById("video").className="animate__animated animate__fadeIn"
    document.getElementById("video").style.display="flex"
}

function hideVideo() {
    document.getElementById("video").className="animate__animated animate__fadeOut"
    setTimeout(() => {
        document.getElementById("video").style.display="none"
    }, 1000)
}