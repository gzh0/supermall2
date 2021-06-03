import {
  request
} from "./request"

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}







//let totalNums = []
//
//const nums1 = [20, 30, 40]
//const nums2 = [111, 222, 333]
//
////for (let n of nums1) {
////  totalNums.push(n)
////}
//
////   ...nums1会将nums1数组里面所有的元素依次解析出来  然后依次塞到totalNums里面
//totalNums.push(...nums1)
