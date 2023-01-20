javascript:(function(){
    var iframe = document.createElement('iframe');
    iframe.src = "https://www.bing.com/search?q=Welcome to Instant Search, search some thing here with Bing";
    iframe.style.position = "fixed";
    iframe.style.top = "-500px";
    iframe.style.left = "calc(50% - 500px)"; 
    iframe.style.width = "1000px"; 
    iframe.style.height = "500px";
    iframe.style.zIndex = "9998";
    iframe.style.border = "none";
    iframe.style.opacity = "0";
    iframe.style.transition = "all 1s ease-in-out";
    document.body.appendChild(iframe);  
        setTimeout(function(){
        iframe.style.top = "49.5px";
        iframe.style.opacity = "1";
        nav.style.top = "0px";
        nav.style.opacity = "1";
        hidail.style.bottom = "200px";
        clseBtn.style.opacity = "1";
        miniBtn.style.opacity = "1";
        navText.style.opacity = "1";
        hidail.style.opacity = "1";
    }, 100);
  
    var nav = document.createElement('div');
    nav.style.position = "fixed";
    nav.style.top = "-50px";
    nav.style.left = "calc(50% - 500px)";
    nav.style.width = iframe.style.width;
    nav.style.height = "50px";
    nav.style.background = "lightgray";
    nav.style.color = "gray";
    nav.style.borderColor = "black";
    nav.style.textAlign = "center";
    nav.style.zIndex = "9999";
    nav.style.opacity = "0";
    nav.style.transition = "all 1s ease-in-out";
    document.body.appendChild(nav);

      var clseBtn = document.createElement('button');
    clseBtn.innerHTML = "X";
    clseBtn.style.color = "gray";
    clseBtn.style.background = "none";
    clseBtn.style.fontFamily = "cursive";
    clseBtn.style.border = "none";
    clseBtn.style.padding = "10px";
    clseBtn.style.float = "right";
    clseBtn.style.right = "20px";
    clseBtn.style.zIndex = "9999";
    clseBtn.style.opacity = "0";
    clseBtn.style.textShadow = "2px 2px 0px rgba(0,0,0,0.2)";
    clseBtn.style.transition = "all 1s ease-in-out";
    clseBtn.addEventListener("click", function(){
        clseBtn.style.color = "blak";
        iframe.style.top = "-500px";
        iframe.style.opacity = "0";
        nav.style.top = "-50px";
        nav.style.opacity = "0";
        clseBtn.style.opacity = "0";
        hidail.style.opacity = "0";
        setTimeout(function(){
            iframe.remove();
            nav.remove();
            hidail.remove();
        }, 1000);
    });
    nav.appendChild(clseBtn);

  var navText = document.createElement('p');
    navText.innerHTML = "Instant Search";
    navText.style.color = "gray";
    navText.style.background = "none";
    navText.style.fontFamily = "sans-serif";
    navText.style.border = "none";
    navText.style.paddingTop = "7px";
    navText.style.paddingLeft = "30px";
    navText.style.fontSize = "30px";
    navText.style.float = "left";
    navText.style.zIndex = "9999";
    navText.style.opacity = "0";
    navText.style.cursor = "pointer";
    navText.style.transition = "all 1s ease-in-out";
    navText.style.fontWeight = "bold";
    navText.style.textShadow = "2px 2px 0px rgba(0,0,0,0.2)";
    navText.addEventListener("click", function(){
      if (navText.style.opacity == "1") {
        navText.style.opacity = "0";
      }
      else if (navText.style.opacity == "0") {
        navText.style.opacity = "1";
      }
    });
    nav.appendChild(navText);

    var inSearchLogo = document.createElement('img');
    inSearchLogo.src = "https://xcde.pages.dev/assets/inSearch.svg";
    inSearchLogo.style.floating = "right";
    inSearchLogo.style.width = "20px";
    inSearchLogo.style.height = "20px";
    inSearchLogo.style.paddingBottom = "2px";
    inSearchLogo.style.zIndex = "10001";
    navText.appendChild(inSearchLogo);
  

    var miniBtn = document.createElement('button');
    miniBtn.innerHTML = "-";
    miniBtn.style.color = "gray";
    miniBtn.style.background = "none";
    miniBtn.style.fontFamily = "cursive";
    miniBtn.style.border = "none";
    miniBtn.style.padding = "10px";
    miniBtn.style.float = "right";
    miniBtn.style.right = "20px";
    miniBtn.style.zIndex = "10000";
    miniBtn.style.textShadow = "2px 2px 0px rgba(0,0,0,0.2)";
    miniBtn.style.opacity = "0";
    miniBtn.style.transition = "all 1s ease-in-out";
    miniBtn.addEventListener("click", function(){
      if (iframe.style.opacity == "1") {
        miniBtn.style.color = "black";
        iframe.style.top = "-500px";
        iframe.style.opacity = "0"
      }
      else if (iframe.style.opacity == "0") {
        miniBtn.style.color = "gray";
        iframe.style.top = "49.5px";
        iframe.style.opacity = "1"
      }
    });
    nav.appendChild(miniBtn);

    var hidail = document.createElement('button');
    hidail.style.position = "fixed";
    hidail.innerHTML = "👁";
    hidail.style.color = "black";
    hidail.style.backgroundColor = "white";
    hidail.style.fontFamily = "cursive";
    hidail.style.borderRadius = "5px";
    hidail.style.border = "black 2px";
    hidail.style.padding = "10px";
    hidail.style.float = "right";
    hidail.style.right = "20px";
    hidail.style.zIndex = "10000";
    hidail.style.textShadow = "2px 2px 0px rgba(0,0,0,0.2)";
    hidail.style.opacity = "0";
    hidail.style.transition = "all 1s ease-in-out";
    hidail.addEventListener("click", function(){
      if (clseBtn.style.opacity == "1") {
        clseBtn.style.opacity = "0";
        hidail.style.color = "gray";
        miniBtn.style.opacity = "1";
        nav.style.opacity = "0";
        nav.style.top = "-50px";
        iframe.style.top = "-500px";
        iframe.style.opacity = "0"
      }
      else if (clseBtn.style.opacity == "0") {
        hidail.style.color = "black";
        clseBtn.style.opacity = "1";
        miniBtn.style.opacity = "1";
        nav.style.opacity = "1";
        nav.style.top = "0px";
        iframe.style.top = "49.5px";
        iframe.style.opacity = "1"
      }
    });
    document.body.appendChild(hidail);
})();
