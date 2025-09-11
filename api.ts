

export async function fetchData(id: string): Promise<string>{
    const response = await fetch( "https://jsonplaceholder.typicode.com/todos/" + id);
    if(!response.ok){
        throw new Error(`HTTP Error! status: ${response.status}`);
    }
    return response.json();
}

//https://jsonplaceholder.typicode.com/posts/1

export async function fetchData2(id: string): Promise<string> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
    if(!response.ok) throw new Error(`Error status: ${response.status}`);
    return response.json();
}