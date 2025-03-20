let url = 'https://dog.ceo/api/breeds/image/random';
// let url2 = 'https://api.imgflip.com/get_memes';



let img = document.querySelector('#img');
let btn = document.querySelector('#btn');

btn.addEventListener('click', async()=>{
    let link  = await getImage();
    img.setAttribute('src',link);
    img.style.display = 'block';
})


async function getImage() {
   try {
    let src = await axios.get(url);
    return src.data.message;  
   //  console.log(src);
    
   } catch (err) {
    return "Image NOT FOUND-",err;
   }  
}
