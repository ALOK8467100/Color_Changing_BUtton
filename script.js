var index = 0;

function changeColors(){
    var colors = ["red", "blue","orange","yellow","green","purple","skyblue","black","gray", "silver", "maroon","fushsia","lime", "olive", "navy","teal","aqua"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];

    if(index > colors.length - 1)
    index = 0;
}