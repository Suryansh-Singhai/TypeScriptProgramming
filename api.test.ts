import fetchMock from "jest-fetch-mock";
import { fetchData } from "./api";

beforeEach(()=>{
    fetchMock.resetMocks();
})

test('fetches user data successfully', async()=>{
    fetchMock.mockResponseOnce(JSON.stringify({id: 1, name: "John Doe"}));

    const data = await fetchData("1");
    console.log(data);
    expect(fetchMock).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/todos/1");
    expect(data).toEqual({id: 1, name: "John Doe"});
})