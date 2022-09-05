


let Task = (consult) =>{
    return new Promise((resolve, reject) => {
        if (run){
            setTimeout(() =>{
                resolve(consult)
            }, 2000);
        } else{
            reject("error!!")
        }
    })
}
let run = true;


export default Task