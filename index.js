function abc(){
    fetch("page2.html")
    .then(response => response.text())
    .then(html => {
        const content = html;
        console.log(content);
   
        const importeur=document.getElementById("test").innerHTML = content;
    })
    fetch("page2.css")
    .then(responsecss => responsecss.text())
    .then(css => {
        const contentcss = css;
        console.log(contentcss);
       
        const importeurcss=document.getElementById("test").style = contentcss;
        })
    

}