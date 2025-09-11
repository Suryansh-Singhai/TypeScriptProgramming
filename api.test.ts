import fetchMock from "jest-fetch-mock";
import { fetchData, fetchData2 } from "./api";

beforeEach(()=>{
    fetchMock.resetMocks();
})

test.only('fetches user data successfully', async()=>{
    fetchMock.mockResponseOnce(JSON.stringify({id: 1, name: "John Doe"}));

    const data = await fetchData("1");
    console.log(data);
    expect(fetchMock).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/todos/1");
    expect(data).toEqual({id: 1, name: "John Doe"});
})

test.only('fetches user data successfully', async()=>{
    fetchMock.mockResponseOnce(JSON.stringify({id: 3, name: "nothing"}));

    const data = await fetchData2("2");
    console.log(data);
    expect(fetchMock).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/posts/2");
    expect(data).toEqual({id: 3, name: "nothing"});
})

test.only('fetches user data successfully', async()=>{
    fetchMock.mockResponseOnce(JSON.stringify({id: 2, name: "something"}));

    const data = await fetchData2("1");
    console.log(data);
    expect(fetchMock).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/posts/1");
    expect(data).toEqual({id: 2, name: "something"});
})