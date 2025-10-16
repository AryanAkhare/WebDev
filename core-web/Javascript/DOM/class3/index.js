
// // const t1=performance.now()
// // for(let i=1; i<=10; i++){
// //     let para = document.createElement('p');
// //     para.textContent = 'This is paragraph ' + i;
// //     document.body.appendChild(para); // DOM updated **10 times**
// // }

// // const t2=performance.now()
// // console.log(t2-t1) //0.1

// // //optimizing above code

// // const T1=performance.now()
// // let myDiv = document.createElement('div'); // create container

// // for(let i=1; i<=10; i++){
// //     let el = document.createElement('p');
// //     el.textContent = 'This is para ' + i;
// //     myDiv.appendChild(el); // append to container first
// // }


// // document.body.appendChild(myDiv);  // update DOM **once**
// // const T2=performance.now()
// // console.log(T2-T1) //0


// // //

// // let fragment=document.createDocumentFragment();
// // for(let i=1; i<=10; i++){
// //     let para = document.createElement('p');
// //     para.textContent = 'This is paragraph ' + i;
// //     fragment.appendChild(para); 
// // }
// // document.body.appendChild(fragment);
// // //single reflox and repaint


// function addPara(){
//     let para= document.createElement('p');
//     para.textContent='JS IS SIMPLE';
//     document.body.appendChild(para);
// }

// function appendNewMsg(){
//     let para=document.createElement('p');
//     para.textContent='New message';
//     document.body.appendChild(para)
// }
// addPara();
// appendNewMsg();

// EVENT LOOP
// synchronous --> occuring at same time
//ASYNC --> eventListener eg click , mousemove etc'

function addParagraph() {
      const p = document.createElement("p");
      p.textContent = "This paragraph was added after 3 seconds!";
      document.body.appendChild(p);
    }

    // Use setTimeout to call the function after 3 seconds
setTimeout(addParagraph, 3000);
