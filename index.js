function abc(){
    fetch("page2.html")
    .then(answer => answer.text())
    .then(html => {
        const content = html;
        console.log(html);
   
        document.getElementsByClassName("import") =+ html;
   
    })



}