async function youtube(){
    let res=await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true&key=AIzaSyCl63nMSQzWNXyw4paaqgZD4euDcJW3C7M`);
    
    
    
    let res1= await res.json();
    console.log(res1);
}

youtube();

// 'https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true&key=AIzaSyCl63nMSQzWNXyw4paaqgZD4euDcJW3C7M'


const subsccount= document.getElementById("subscribed");
const viewcount=document.getElementById("views");
const videocount=document.getElementById("videocount");
