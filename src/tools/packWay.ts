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