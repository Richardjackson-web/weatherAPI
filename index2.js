//Synchronous, Asynchronous, Callbacks, Promise, Asyn/Await


// let stocks = {
//     fruits: ["strawberry", "grapes", "banana", "apple"],
//     liquid: ["water", "ice"],
//     holder: ["cone", "cup", "plate"],
//     toppings: ["chocolate", "milk"],
// }

//Callbacks
//Order (fetch);
//Production(send);

// let order = (fruitName, callProduction) =>{
//     setTimeout(function(){
//         console.log(`${stocks.fruits[fruitName]} was selected`)
//         callProduction();
//     }, 2000)
// }

// let production =() =>{
//     setTimeout(()=>{
//         console.log("Production has started");
//         setTimeout(()=>{
//             console.log("The fruit was cut");
//             setTimeout(()=>{
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
//                 setTimeout(()=>{
//                     console.log("The machine was started");
//                     setTimeout(()=>{
//                         console.log(`Ice cream was placed on ${stocks.toppings[0]}`);
//                         setTimeout(()=>{
//                             console.log("Ice Cream is served")
//                         }, 3000)
//                     }, 2000)
//                 }, 1000)
//             }, 1000)
//         }, 2000)
//     }, 0000)
// }

// order(0, production);


//Promises

// function addSum(a,b){
//     return console.log(a + b);
// }

// addSum(4, 3)
    // let isShopOpen = true;

    // let order = (time, work) =>{
    //     return new Promise((resolve, reject)=>{
    //         if (isShopOpen){
    //             setTimeout(()=>{
    //                 resolve(work())
    //         }, time);

    //         }
    //         else{
    //             reject(console.log("Error"))
    //         }
    //     });
    // }

    // //original promise
    // order(2000, ()=> console.log(`${stocks.fruits[0]} was cut`))
    // .then(()=>{
    //     return order(0000, ()=>console.log("Production has started"))
    // })
    // .then(()=>{
    //     return order(2000, ()=> console.log("Fruit was cut"))
    // })
    // .then(()=>{
    //     return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
    // })
    // .then(()=>{
    //     return order(1000, ()=> console.log("The machine was started"))
    // })
    // .then(()=>{
    //     return order(2000, ()=> console.log(`Ice cream was placed on the ${stocks.holder[1]}`))
    // })
    // .then(()=>{
    //     return order(3000, ()=> console.log(`${stocks.toppings[0]} as toppings`))
    // })
    // .then(()=>{
    //     return order(2000, ()=> console.log("Ice cream is served"))
    // })

    // .catch(()=>{
    //     console.log("Not successful!")
    // })
    // .finally(()=>{
    //     console.log("The End")
    // })


//Async and Await
    // let isShopOpen = true;

    // function time(ms){
    //     return new Promise((resolve, reject)=>{
    //         if(isShopOpen){
    //             setTimeout(resolve, ms)
    //         }
    //         else{
    //             reject(console.log("Error!"))
    //         }
    //     });
    // }

    // async function order(){
    //     try{
    //         await time(2000)
    //         console.log(`${stocks.fruits[0]} was added`)

    //         await time(0000)
    //         console.log("Production has started")

    //         await time(2000)
    //         console.log("Data fetched")

    //     }
    //     catch(error){
    //         console.log("Couldn't fetch data")
    //     }
    //     finally{
    //         console.log("The End")
    //     }
    // }

    // order();



    //Real life callback

    function myDisplayer(some){
        document.getElementById("demo").innerHTML = some;
    }

    function getFile(myCallback){
        let req = new XMLHttpRequest();
        req.open('GET', "myFile.html");
        req.onload = function(){
            if(req.status == 200){
                myCallback(this.responseText);
            }
            else{
                myCallback("Error: " + req.status);
            }
        }
        req.send();
    }

    getFile(myDisplayer);

    //Real life promise

    let myPromise = new Promise(
        function(myResolve, myReject){
            let req = new XMLHttpRequest();
            req.open('GET', "MyFile.html");
            req.onload = function(){
                if(req == 200){
                    myResolve(req.response);
                }
                else{
                    myReject("File not Found");
                }
            };
            req.send();
        }
    );

    myPromise.then(
        function(value){myDisplayer(value);},
        function(error){myDisplayer(error);}
    )

    //Reallife Asyn and Await

    // async function getFile(){
    //   ust  let myPromise = new Promise(function(resolve){
    //         let req = new XMLHttpRequest();
    //         req.open('GET', "myFile.html");
    //         req.onload = function(){
    //             if(req.status == 200){
    //                 resolve(req.response);
    //             }
    //             else{
    //                 resolve("File not found");
    //             }
    //         }
    //         req.send();
    //     })
    // };

    //document.getElementById("demo").innerHTML = await myPromise;
    // getFile();


    // let file = '{"name" :"John","age" : 30, "city" : "Uyo"}';
    // let convert = JSON.parse(file);

    //     document.getElementById("demo").innerHTML = 
    //     convert.name + " " + convert.age;
    // console.log(convert.name + " " + convert.age);

    // let convert1 = JSON.stringify(convert);

    // document.getElementById("demo").innerHTML = 
    // convert1.name + " " + convert1.age;
    // console.log(convert1.name + " " + convert1.age);


    function showHint(str){
        if(str.length == 0){
            document.getElementById("txtHint").innerHTML = "";
            return;
        }
        else{
            const xmlhttp = new XMLHttpRequest();
            xmlhttp.onload = function(){
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
            xmlhttp.open('GET', "getHint.php?q=" + str);
            xmlhttp.send();
        }
    }