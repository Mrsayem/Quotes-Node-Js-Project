var quetos=document.querySelector("#quetos");
var prebtn=document.querySelector(".pre-btn");
var nextbtn=document.querySelector(".next-btn");
var c=0;
prebtn.addEventListener("click",()=>{
    c--;
    getQuotes();
});

nextbtn.addEventListener("click",()=>{
    c++;
    getQuotes();
});


const getQuotes= async ()=>{
    const api="https://type.fit/api/quotes";
    try{
        let data= await fetch(api);
        let realData=await data.json();
       // console.log(realData[0]); 
        quetos.innerHTML=realData[c].text;
    }
    catch (err)
    {
    }
};


/*quetos.addEventListener("click",()=>{

});*/