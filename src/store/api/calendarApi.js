import client from "../client"

export const getData = async (payload) =>{
    const { data } = await client.get(`user/calendar${payload}`)
    return data;
}