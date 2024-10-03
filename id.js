function createIdCard(){
    let container= document.createElement("div");
    container.className= "container";
    let image=document.createElement("img");
    image.className="image";

    let pdata=["Name:Sahithya","rollno:20RH1A0242","phnno:8686537999","address:hyderabad"]
    for(let data of pdata){
        let text= document.createElement("p");
        text.innerText=data;
        text.cassName="text";
        container.appendchild
    }
}