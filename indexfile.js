document.querySelector('body').onload = function(){
    
    setTimeout(loader,5000);
    
};



function loader(){
    document.getElementsByClassName('title').style.fontSize = "70px";
    // console.log(document.getElementsByClassName('title').style.fontSize = "70px")
    // sample.style.fontSize = "70px";
    // sample.style.transition = "2s";
}