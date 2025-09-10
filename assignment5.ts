function wrapInArray<T>(item: T): T[]{
    return [item]
}

console.log(wrapInArray(5));

interface ApiResponse<T>{
    success: boolean;
    data: T;
}

type Data = {
    id: number;
    username: string;
}

const response: ApiResponse<Data> = {
    success: true,
    data : {
        id: 1,
        username: "Suryansh",
    }
}

const response2: ApiResponse<string[]> = {
    success: true,
    data: ["harry potter", "percey jackson", "nancy drew"]
}

console.log(response.data);
console.log(response2.data);