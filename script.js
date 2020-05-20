window.addEventListener("load", ()=> {
    
    let topLeftCorner = document.getElementById("top-left");
    let bottomLeftCorner = document.getElementById("bottom-left");
    let topRightCorner = document.getElementById("top-right");
    let bottomRightCorner = document.getElementById("bottom-right");
    let inputCopy = document.getElementById("copy");

    let divExample = document.getElementById("example");
    let btnCopy = document.getElementById("btnCopy");

    topLeftCorner.addEventListener("input", ()=>{
        divExample.style.borderTopLeftRadius = `${topLeftCorner.value}%`;
        changeValuesToCopy()
    });

    bottomLeftCorner.addEventListener("input", ()=>{
        divExample.style.borderBottomLeftRadius = `${bottomLeftCorner.value}%`;
        changeValuesToCopy()
    });

    topRightCorner.addEventListener("input", ()=>{
        divExample.style.borderTopRightRadius = `${topRightCorner.value}%`;
        changeValuesToCopy()
    });

    bottomRightCorner.addEventListener("input", ()=>{
        divExample.style.borderBottomRightRadius = `${bottomRightCorner.value}%`;
        changeValuesToCopy()
    });

    function changeValuesToCopy() {
        let leftTop = getComputedStyle(divExample, null).borderTopLeftRadius;
        let leftBottom = getComputedStyle(divExample, null).borderBottomLeftRadius;
        let rightTop = getComputedStyle(divExample, null).borderTopRightRadius;
        let rightBottom = getComputedStyle(divExample, null).borderBottomRightRadius;
    
        inputCopy.value = `border-radius: ${leftTop} ${leftBottom} ${rightTop} ${rightBottom};`
    
    }

    btnCopy.addEventListener("click", ()=>{
        inputCopy.removeAttribute("disabled");

        inputCopy.select();
        inputCopy.setSelectionRange(0, 999999);

        document.execCommand("copy");
        inputCopy.setAttribute("disabled", "");
    });

});