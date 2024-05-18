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
// function renderImage() {
//   return new Promise((callback) => {
//     const imgEl = document.createElement('img')
//     imgEl.src = 'https://picsum.photos/3000/2000'
//     imgEl.addEventListener('load', () => {
//       document.body.append(imgEl)
//       callback()
//     })
//   })
// }
// renderImage()
//   .then(() => {
//     console.log('Done 1')
//     return renderImage()
//   })
//   .then(() => {
//     console.log('Done 2')
//     return renderImage()
//   })
//   .then(() => {
//     console.log('Done 3')
//     return renderImage()
//   })
//   .then(() => {
//     console.log('Done 4')
//   })
//////

// 09-03 - 비동기 - promise
console.log('**** 09-03 - 비동기 - promise ****')

// 비동기 작업의 완료나 실패 시점을 지정하고 그 겨로가를 반환할 수 있다,.
// const promise = new Promis((resolve, reject) => {})
// promise.then(() => {})

// promise 함수 수정 전
// function timer(cb) {
//   setTimeout(() => {
//     console.log(1)
//     cb('1 is Done!')
//   }, 2000)
// }

// timer(msg => {
//   console.log(msg)
//   console.log(2)
// })

// promise 함수 수정 후
// function timer() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log(1)
//       resolve('1 is Done!')
//     }, 2000)
//   })
// }

// timer()
//   .then(msg => {
//     console.log(msg)
//     console.log(2)
//     return timer()
//   })
//   .then(msg => {
//     console.log(msg)
//     console.log(2)
//     return timer()
//   })
//   .then(msg => {
//     console.log(msg)
//     console.log(2)
//   })

// 이미지 렌더링 좀더 확장성 생각해서 수정
// function loadImage(src) {
//   return new Promise(resolve => {
//     const imgEl = document.createElement('img')
//     imgEl.src = src
//     imgEl.addEventListener('load', () => {
//       resolve(imgEl)
//     })
//   })
// }
// loadImage('https://picsum.photos/3000/2000')
//   .then((imgEl) => {
//     document.body.append(imgEl)
//     console.log('Done!')
//   })
// loadImage('https://picsum.photos/100/200')
//   .then((imgEl) => {
//     console.log(imgEl)
//   })
//////

  // 09-04 - 비동기 - Async & Await
console.log('**** 09-04 - 비동기 - Async & Await ****')

const h1El = document.querySelector('h1')
const ulEl = document.createElement('ul')
ulEl.classList.add('users')
document.body.append(ulEl)

// .then 사용
// h1El.addEventListener('click', () => {
//   ulEl.textContent = 'Loading...'
//   fetch('https://api.heropy.dev/v0/users')
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//       const { users } = data
//       const liEls = users.map(user => {
//         const liEl = document.createElement('li')
//         liEl.textContent = user.name
//         const imgEl = document.createElement('img')
//         imgEl.src = user.photo?.url || 'https://heropy.dev/favicon.png'
//         if (!user.photo) {
//           liEl.classList.add('no-photo')
//         }
//         liEl.prepend(imgEl)
//         return liEl
//       })
//       ulEl.textContent = ''
//       ulEl.append(...liEls)
//     })
// })

// async & await 사용으로 수정
h1El.addEventListener('click', async () => {
  ulEl.textContent = 'Loading...'
  const res = await fetch('https://api.heropy.dev/v0/users')
  const data = await res.json()
  console.log(data)
  const { users } = data
  const liEls = users.map(user => {
    const liEl = document.createElement('li')
    liEl.textContent = user.name
    const imgEl = document.createElement('img')
    imgEl.src = user.photo?.url || 'https://heropy.dev/favicon.png'
    if (!user.photo) {
      liEl.classList.add('no-photo')
    }
    liEl.prepend(imgEl)
    return liEl
  })
  ulEl.textContent = ''
  ulEl.append(...liEls)
})