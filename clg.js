// let url = 'http://universities.hipolabs.com/search?name=';
// let btn = document.querySelector("#btn");

// btn.addEventListener("click", async function(){
//     let country = document.querySelector("input").value;
//     let colleges = await getCollegeData(country);
//     show(colleges);
// })
// function show(colleges){
//     let clgList =document.querySelector("#list");
//     for(clg of colleges){
//        let li = document.createElement('li');
//        li.innerText = clg.name;
//        clgList.append(li);
//     }
//     clgList.style.display= "block";
// }


// async function getCollegeData(country){
//     try {
//         let res = await axios.get(url+country);
//         return res.data;
//     } catch (err) {
//         return "error";
//     } 
    
// }



//countyr name is same and we are seraching on state name
let url = 'http://universities.hipolabs.com/search?name=';
let btn = document.querySelector("#btn");
let country  = "india";
btn.addEventListener("click", async function(){
    let colleges = await getCollegeData(country);
    show(colleges);
})
function show(colleges){
    let state = document.querySelector("input").value;
    const filteredData = colleges.filter(university => university["state-province"] === state);
    let clgList =document.querySelector("#list");
    for(clg of filteredData){
       let li = document.createElement('li');
       li.innerText = clg.name;
       clgList.append(li);
    }
    clgList.style.display= "block";
}


async function getCollegeData(country){
    try {
        let res = await axios.get(url+country);
        return res.data;
    } catch (err) {
        return "error";
    } 
    
}