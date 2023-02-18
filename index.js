function abc(){
    fetch("page2.html")
    .then(response => response.text())
    .then(html => {
        const content = html;
        console.log(content);
   
        const importeur=document.getElementsByClassName("import") 
        importeur.innerHTML += content; 
        console.log(content);
    })



}