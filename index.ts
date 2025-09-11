// promise

// resolved, rejected, pending

export function getDataSuccess(): Promise<string>  {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hello World!");
        }, 2000);
    })
};
export function getDataFailure(): Promise<string>  {
    return new Promise((_, reject)=>{
        setTimeout(()=>{
            reject(new Error("Failure to fetch data"));
        }, 2000);
    })
}
// getDataSuccess().then((data)=>{
//     console.log(data);
// })
// getDataFailure().catch((error)=>{
//     console.log(error.message);
// })