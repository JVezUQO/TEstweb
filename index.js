function abc(){
    fetch("page2.html")
    .then(response => response.text())
    .then(html => {
        const content = html;
        console.log(content);
   
        document.getElementsByClassName("import") =+ html;
   
    })



}