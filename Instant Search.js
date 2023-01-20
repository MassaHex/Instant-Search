javascript:(function(){
    var iframe = document.createElement('iframe');
    iframe.src = "https://blacksearch.org/sp/?q=Search+Something";
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
        iframe.style.top = "50px";
        iframe.style.opacity = "1";
        nav.style.top = "0px";
        nav.style.opacity = "1";
        closeBtn.style.opacity = "1";
        miniBtn.style.opacity = "1";
    }, 100);
  
    var nav = document.createElement('div');
    nav.style.position = "fixed";
    nav.style.top = "-50px";
    nav.style.left = "calc(50% - 500px)";
    nav.style.width = iframe.style.width;
    nav.style.height = "50px";
    nav.style.background = "grey";
    nav.style.color = "white";
    nav.style.textAlign = "center";
    nav.style.zIndex = "9999";
    nav.style.opacity = "0";
    nav.style.transition = "all 1s ease-in-out";
    document.body.appendChild(nav);

      var closeBtn = document.createElement('button');
    closeBtn.innerHTML = "X";
    closeBtn.style.color = "white";
    closeBtn.style.background = "none";
    closeBtn.style.fontFamily = "cursive";
    closeBtn.style.border = "none";
    closeBtn.style.padding = "10px";
    closeBtn.style.float = "right";
    closeBtn.style.right = "20px";
    closeBtn.style.zIndex = "9999";
    closeBtn.style.opacity = "0";
    closeBtn.style.transition = "all 1s ease-in-out";
    closeBtn.addEventListener("click", function(){
        iframe.style.top = "-500px";
        iframe.style.opacity = "0";
        nav.style.top = "-50px";
        nav.style.opacity = "0";
        closeBtn.style.opacity = "0";
        setTimeout(function(){
            iframe.remove();
            nav.remove();
        }, 1000);
    });
    nav.appendChild(closeBtn);

    var miniBtn = document.createElement('button');
    miniBtn.innerHTML = "-";
    miniBtn.style.color = "white";
    miniBtn.style.background = "none";
    miniBtn.style.fontFamily = "cursive";
    miniBtn.style.border = "none";
    miniBtn.style.padding = "10px";
    miniBtn.style.float = "right";
    miniBtn.style.right = "20px";
    miniBtn.style.zIndex = "10000";
    miniBtn.style.opacity = "0";
    miniBtn.style.transition = "all 1s ease-in-out";
    miniBtn.addEventListener("click", function(){
      if (iframe.style.opacity == "1") {
        iframe.style.top = "-500px";
        iframe.style.opacity = "0"
        miniBtn.innerHTML = "|";
      }
      else if (iframe.style.opacity == "0") {
        iframe.style.top = "50px";
        iframe.style.opacity = "1"
        miniBtn.innerHTML = "-";
      }
    });
    nav.appendChild(miniBtn);
})();
