import request from "../tools/request";
const { GET, POST } = request

export const GET_TABLE = () =>
  GET({
    url: 'http://jsonplaceholder.typicode.com/posts',
  })
export const POST_TABLE = () =>
  POST({
    url: 'https://jsonplaceholder.typicode.com/posts',
  })