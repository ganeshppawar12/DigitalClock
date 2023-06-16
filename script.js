let hourl = document.getElementById('hour');
let minutesl = document.getElementById("minutes");
let secondl = document.getElementById("second");
let ampml = document.getElementById("ampm");

// // let a =2;
// // let d = 4;
// // console.log(a+d);
// // const butto = document.querySelector('.hour');
// // function alertbtn(){
// //      alert("I Will Have My Own Company");
// //      }

// //      const Btn = document.querySelector('.hour');
// // function change(){
// //     Btn.style.backgroundColor = 'gold';
// //     Btn.style.innerText = "Jay shri Ram"
// // };
// //  butto.addEventListener("click",alertbtn);
// //  Btn.addEventListener("mousemove",change);


// // hourl.addEventListener('click',alertbtn);
// function uclock(callback){
//      let h= new Date().getHours();
//     let m = new Date().getMinutes();
//     let s = new Date().getSeconds();
//     let ampam = "AM";
//     if(h>12){
//         h =h-12;
//         ampam = "PM";
//     }

//     // h = h<10 ? "0"+ h : h;
//     // m = m<10 ? "0"+ m : m;
//     // s = s<10 ? "0"+ s : s;
//     // hourl.innerText = h;
//     //  minutesl.innerText=m;
//     //  secondl.innerText = s;
//     // ampml,(innerText = ampam);
//     setTimeout(()=>{
//         uclock();
//     }, 1000)
// }


// uclock(callbak);

const input= document.querySelectorAll('span');
console.log(input);


function clock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let mm = new Date().getSeconds();
    let am = "am";
    if(h>12){
                h = h-12;
                am = "pm";
            }

    h = h  < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    mm = mm < 10 ? "0" + mm : mm;
  
    // document.getElementsByTagName('span')[0].innerText = h;
    // document.getElementsByTagName('span')[2].innerText = m;
    // document.getElementsByTagName('span')[4].innerText = mm;
    input[0].innerText = h;
    input[2].innerText = m;
    input[4].innerText = mm;
    input[6].innerText = am;
    
    
    

}

clock();

setInterval(
    () => {
        clock()
    },
    1000

)