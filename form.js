
// function lefttoright(){
//     right_text = right_text + left_text.slice(-1)
// }

var leftint;
var rightint;

document.getElementById("leftbtn").addEventListener("click", function(){
    clearInterval(rightint);
    clearInterval(leftint);
    leftint = setInterval(function(){
        left_text = document.getElementById("leftbox").value;
        right_text = document.getElementById("rightbox").value;
        document.getElementById("leftbox").value = left_text.substring(0, left_text.length-1);
        document.getElementById("rightbox").value = left_text.slice(-1)+right_text;
        // if(document.getElementById("leftbox").value === ""){
        //     alert("nothing left!!");
        //     clearInterval(leftint);
        // }
    }, 1000);
})


document.getElementById("rightbtn").addEventListener("click", function(){
    clearInterval(leftint);
    clearInterval(rightint);
    rightint = setInterval(function(){
        left_textr = document.getElementById("leftbox").value;
        right_textr = document.getElementById("rightbox").value;
        document.getElementById("leftbox").value = left_textr + right_textr.substring(0,1);
        document.getElementById("rightbox").value = right_textr.substring(1);
        // if(document.getElementById("rightbox").value === ""){
        //     alert("nothing left!!");
        //     clearInterval(rightint);
        // }
    }, 1000);
})

document.getElementById("stopbtn").addEventListener("click", function(){
    clearInterval(leftint);
    clearInterval(rightint);
})