let upload = document.getElementById("upload");
let img = document.getElementById("img");
let icon = document.getElementById("icon");
let icon2 = document.getElementById("icon2");
let h3 =document.querySelector(".h3")
let dropArea = document.getElementById("drop-area");
dragText = dropArea.querySelector(".h2")
let file;
upload.addEventListener("change", function(){
    file = this.files[0];
    showFile();
    showFile2();
})
dropArea.addEventListener("dragover",(event)=>{
    event.preventDefault();
dropArea.classList.add("active");
dragText.textConet="Relese To Upload File";
})
dropArea.addEventListener("dragleave",()=>{
    dropArea.classList.remove("active");
dragText.textConet="Drag & drop files or Browse";
})
dropArea.addEventListener("drop",(event)=>{
    event.preventDefault();
    file = event.dataTransfer.files[0];
    showFile();
    showFile2();
})
function showFile(){
    let fileType=file.type;
    let validExtensions=["image/jpeg","image/jpg","image/png"];
    if(validExtensions.includes(fileType)){
        let fileReader = new FileReader();
        fileReader.onload = ()=>{
            let fileURL =fileReader.result;
            let imgTag =`<img src="${fileURL}"alt="">`;
            dropArea.innerHTML = imgTag
            icon.style.display="none"
            icon2.style.display="none"
            h3.style.display="none"
            img.style.width="250px"
            img.style.height="170px"
        }
        fileReader.readAsDataURL(file)
    }else{
        icon.style.display="none"
        icon2.style.display="block"
        h3.style.display="block"
        img.style.display="none"
        dropArea.classList.remove("active");
    }
}