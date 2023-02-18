function abc(){
    fetch("page2.html")
    .then(response => response.text())
    .then(html => {
        const content = html;
        console.log(content);
   
        const importeur=document.getElementsId("test"); 
        importeur.innerHTML += html; 
        console.log(content);
    })



}