let urledu="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("#searchButton");
let input=document.querySelector("#searchInput");
let load=document.querySelector(".lodaing");
let list=document.querySelector("#universityList");

btn.addEventListener("click",async ()=>{
    load.innerHTML="<h2>Loading...</h2>";
    let country=input.value;
    let res=await getapiUni(country);
    load.innerHTML="";
    showlist(res);
});


function showlist(res){
    list.innerHTML="";
    for(uni of res){
        let li=document.createElement("li");
        li.innerText=uni.name;
        list.appendChild(li);
    }
}

async function getapiUni(country) {
    try{
        let results=await axios.get(urledu+country);
         return results.data;

    }catch(e){
        console.log("error->",e);
    }
    
}