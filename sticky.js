let sticky = document.querySelector("#sticky");
sticky.addEventListener("click", function (e) {
    let sticky = document.createElement("div");
    sticky.setAttribute("class", "sticky");
    sticky.innerHTML = `<div class="navbar">
<div class="close"></div>
<div class="minimize"></div>
</div>
<textarea name="" class="textarea"></textarea>`;
    body.appendChild(sticky);
    sticky.onmousedown = function(e) {
        let event = e.currentTarget
        cTool=''

        // (1) prepare to moving: make absolute and on top by z-index
        sticky.style.position = 'absolute';
        sticky.style.zIndex = 1000;
      
        // move it out of any current parents directly into body
        // to make it positioned relative to the body
        // document.body.append(sticky);
      
        // centers the sticky at (pageX, pageY) coordinates
        function moveAt(pageX, pageY) {
          event.style.left = pageX - event.offsetWidth / 2 + 'px';
          event.style.top = pageY - sticky.offsetHeight / 2 + 'px';
        }
      
        // move our absolutely positioned sticky under the pointer
        moveAt(event.pageX, event.pageY);
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
      
        // (2) move the sticky on mousemove
        document.addEventListener('mousemove', onMouseMove);
      
        // (3) drop the sticky, remove unneeded handlers
        sticky.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          sticky.onmouseup = null;
        };
      
      };

    
    let minimize = sticky.querySelector(".minimize");
    let close = sticky.querySelector(".close");
    let textArea = sticky.querySelector("textarea");
    let isClosed = false;
   
    minimize.addEventListener("click", function (e) {
      
        e.preventDefault()
        
        if (isClosed == false) {
            textArea.style.display = "none";
        } else {
            textArea.style.display = "block";
        }
        isClosed = !isClosed
    })
    
    close.addEventListener("click", function () {
        e.preventDefault()
        sticky.remove();
    })
    

})