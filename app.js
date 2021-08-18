 let getImage =document.getElementById("file");


 
 getImage.addEventListener("change",(event)=>{
	var image = document.getElementById('output');
    
	image.src = URL.createObjectURL(event.target.files[0]);

    let changeRange1 =document.getElementById("rang1");
    let changeRange2 =document.getElementById("rang2");

    changeRange1.addEventListener("change",(value)=>{
        let val1= changeRange1.value;
        image.style.height=val1+"px"; 
        
    })

    changeRange2.addEventListener("change",(value)=>{
        let val2= changeRange2.value;
        image.style.width=val2+"px"; 
    })
    

});


