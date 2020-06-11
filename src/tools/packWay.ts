
// 设置Localstorage
export const setLocalstorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};
// 获取Localstorage
export const getLocalstorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
// 清除Localstorage
export const delLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
// 数组去重
export const clearArr = (arr: Array<string | number | boolean | undefined | null>) => {
  return Array.from(new Set(arr))
}
// 数组对象去重
export const clearArrObj = (arr: any[], key: string) => {
  let obj: { [x: string]: any } = {};
  const newArr = arr.reduce(function (item, next) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    obj[next[key]] ? '' : obj[next[key]] = true && item.push(next);
    return item
  }, [])
  return newArr
}
// 数组排序
export const sortArr = (arr: Array<number>) => {
  arr.sort((a, b) => a - b)
  return arr
}