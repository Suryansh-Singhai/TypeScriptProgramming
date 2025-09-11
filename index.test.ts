import { getDataSuccess, getDataFailure } from "./index";

test('test resolve case', async ()=>{
    // return getDataSuccess().then((data) => {
    //     expect(data).toBe("Hello World!");
    // });
    await expect(getDataSuccess).resolves.toBe("Hello World!")
})

test('getDataFailure rejects with "Failed to fetch data"', async()=>{
    // return getDataFailure().catch((error)=>{
    //     expect(error.message).toBe("Failure to fetch data")
    // })
    await expect(getDataFailure).rejects.toThrow("Failure to fetch data")
})