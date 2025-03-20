let url = "https://catfact.ninja/fact";

// async function getCatFact(){
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
// }
// getCatFact();

// 

let btn = document.querySelector('#btn');
btn.addEventListener('click',async()=>{
    let fact = new Array(3);
   for (let i = 0; i < fact.length; i++) {
      fact[i] = await getCatFact();
   }
    let div1 = document.querySelector("#facts");
    div1.innerHTML = `<p>${fact[0]}</p>`;
    div1.style.display = "block";
    let div2 = document.querySelector("#facts2");
    div2.innerHTML = `<p>${fact[1]}</p>`;
    div2.style.display = "block";
})

// let btn = document.querySelector('#btn');
// btn.addEventListener('click',async()=>{
//     let fact = new Array(3);
//    for (let i = 0; i < fact.length; i++) {
//       fact[i] = await getCatFact();
//    }
//     let div = document.querySelector("#facts");
//     for (let i = 0; i < fact.length; i++) {
//        div.innerHTML =  `<p>${fact[i]}</p>`;
//         console.log(fact[i]);
//     }
// })


async function getCatFact(){
    try {
    let res = await axios.get(url);
    return res.data.fact;
    } catch (err) {
        console.log("error -",err);
        return "No data found";
    }
}
