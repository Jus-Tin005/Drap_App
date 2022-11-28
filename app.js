const getBox = document.querySelector(".box"),
          getBoxTitle = document.getElementById("boxTitle");

drapMe(getBox);
function drapMe(getEle) {
        // console.log(getEle);

        var getcx,getcy,setcx,setcy;

        // design 1
        // getEle.onmousedown = getMousedown;

        // design 2
        if(getEle){
                getBoxTitle.onmousedown = getMousedown;
        }else{

        }

        function getMousedown(e) {
                // console.log("Hey working");
                // console.log(e.target);

                getcx = e.clientX;
                getcy = e.clientY;
                // console.log(getcx,getcy);

                document.onmousemove = dragMeSecond;
                document.onmouseup = stopDrapMe;

                // console.log(" step 1 ", getcx,getcy);

                // getBtns.classList.remove("show");
        }

        function dragMeSecond(e){
                // console.log(e.target);
                // console.log(getcx.getcy);

                // console.log("new position ", e.clientX,e.clientY);

                setcx = getcx - e.clientX;
                setcy = getcy - e.clientY;
                // console.log(getcx,setcx);
                // console.log(getcy,setcy);


                /*Overwrite again */
                getcx = e.clientX;
                getcy = e.clientY;

                // console.log(" step 2 ", getcx,getcy);

                const btnLeft = getEle.offsetLeft;
                const btnTop = getEle.offsetTop;
                // console.log(btnLeft,btnTop);

                getEle.style.left = (btnLeft - setcx) + "px";
                getEle.style.top = (btnTop - setcy) + "px";
                // console.log(btnLeft - setcx,btnTop - setcy);

                 getBtns.classList.remove("show");
        }

        function stopDrapMe(){
                document.onmousemove = null;
                document.onmouseup = null;
 }

}

// onmousedown and onmousemove = reget addevenlistener


const getBtns = document.querySelector(".btns");

getBox.addEventListener('click',function(e){
        // getBtns.classList.toggle("show"); // toggle works only classList not className
        getBtns.classList.add("show");

        // console.log(e.target);
});

getBox.addEventListener('dblclick',function(){
        // getBtns.classList.toggle("show"); // toggle works only classList not className
        getBtns.classList.remove("show");

});

function smallMenu(iconBoxes){
        // console.log(iconBoxes);

        if(iconBoxes.classList.contains('btn-icon')){
                // console.log("yes");
        }else{
                // console.log("no");
        }
}
