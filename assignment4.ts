function logInput(parameter: number | string): void{
    if(typeof parameter === "number") console.log(`Number: ${parameter*parameter}`);
    else console.log(`String: ${parameter.toString().toUpperCase()}`)
}

logInput(5);
logInput("hi");