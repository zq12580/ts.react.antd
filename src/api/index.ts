import request from "../tools/request";
const { GET, POST } = request

export const GET_TABLE_API = () =>
  GET({
    url: 'http://jsonplaceholder.typicode.com/posts',
  })
export const POST_TABLE_API = () =>
  POST({
    url: 'https://jsonplaceholder.typicode.com/posts',
  })