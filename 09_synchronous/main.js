// 09-01 - 비동기 - 개요
console.log('**** 09-01 - 비동기 - 개요 ****')

// 동기(synchronous) 코드는 작성된 순서대로 실행되며,
// 하나의 작업이 끝나기 전에는 다음 작업이 시작되지 않는다
// console.log(1)
// console.log(2)
// alert('확인')
// console.log(3)
// console.time('Loop!')
// for ( let i = 0; i < 1000000000; i++ ) {} // 10억
// console.timeEnd('Loop!')
// console.log(4)
//////

// 비동기(asynchronous) 코드는 작성된 순서대로 실행되지만,
// 특정 작업이 끝나기 전에 다음 작업이 시작될 수 있다
// console.log(1)
// console.log(2)
// console.log(3)
// console.time('Loop!')
// setTimeout(() => { // 비동기
//   for (let i = 0; i < 1000000000; i++) {}
//   console.timeEnd('Loop!')
//   console.log(5)
// }, 0)
// console.log(4)
//////

// 클릭
// console.log(1)
// const h1E1 = document.querySelector('h1')
// h1E1.addEventListener('click', () => {  // 비동기 
//   console.log('CLICK!')
// })
// console.log(2)
//////

// 네트워크
// console.log(1)
// fetch('https://api.heropy.dev/v0/users')
//   .then(res => res.json())
//   .then(data => console.log(data))
// console.log(2)
//////

// 이미지로딩 -> 완료
// const h1E1 = document.querySelector('h1')
// h1E1.textContent = 'Loading'
// const timer = setInterval(() => {
//   h1E1.textContent += '.'
// }, 500);

// const imgEl = document.createElement('img')
// imgEl.src = 'https://picsum.photos/3000/2000'
// imgEl.addEventListener('load', () => {
//   document.body.append(imgEl)
//   clearInterval(timer)
//   h1E1.textContent = 'Done!'
// })
//////

// 09-02 - 비동기 - 콜백과 콜백 지옥
console.log('**** 09-02 - 비동기 - 콜백과 콜백 지옥 ****')

// 비동기 - 콜백과 콜백 지옥(Callback Hell)

// setTimeout(() => {  // 비동기 함수
//   console.log(1)
// }, 2030)

// import { timer } from './timer.js'

// timer(() => {
//   console.log(2)
// })
//////

// 콜백 지옥
// function renderImage(callback) {
//   const imgEl = document.createElement('img')
//   imgEl.src = 'https://picsum.photos/3000/2000'
//   imgEl.addEventListener('load', () => {
//     document.body.append(imgEl)
//     callback()
//   })
// }
// renderImage(() => {
//   console.log('Done 1')
//   renderImage(() => {
//     console.log('Done 2')
//     renderImage(() => {
//       console.log('Done 3')
//       renderImage(() => {
//         console.log('Done 4')
//       })
//     })
//   })
// })

// 콜백지옥 수정
function renderImage() {
  return new Promise((callback) => {
    const imgEl = document.createElement('img')
    imgEl.src = 'https://picsum.photos/3000/2000'
    imgEl.addEventListener('load', () => {
      document.body.append(imgEl)
      callback()
    })
  })
}
renderImage()
  .then(() => {
    console.log('Done 1')
    return renderImage()
  })
  .then(() => {
    console.log('Done 2')
    return renderImage()
  })
  .then(() => {
    console.log('Done 3')
    return renderImage()
  })
  .then(() => {
    console.log('Done 4')
  })