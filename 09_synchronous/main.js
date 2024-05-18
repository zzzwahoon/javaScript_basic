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

// 09-04/05 - 비동기 - Async & Await 1,2
console.log('**** 09-04/05 - 비동기 - Async & Await 1,2 ****')

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
// h1El.addEventListener('click', async () => {
//   // ulEl.textContent = 'Loading...'
//   const loaderEl = document.createElement('div')
//   loaderEl.classList.add('loader')
//   ulEl.innerHTML = ''
//   ulEl.append(loaderEl)
//   const res = await fetch('https://api.heropy.dev/v0/users')
//   const data = await res.json()
//   console.log(data)
//   const { users } = data
//   const liEls = users.map(user => {
//     const liEl = document.createElement('li')
//     liEl.textContent = user.name
//     // const imgEl = document.createElement('img')
//     // imgEl.src = user.photo?.url || 'https://heropy.dev/favicon.png'
//     liEl.dataset.photo = user.photo?.url || 'https://heropy.dev/favicon.png'
//     if (!user.photo) {
//       liEl.classList.add('no-photo')
//     }
//     const loaderEl = document.createElement('div')
//     loaderEl.classList.add('loader')
//     liEl.prepend(loaderEl)
//     return liEl
//   })
//   // ulEl.textContent = ''
//   loaderEl.remove()
//   ulEl.append(...liEls)
//   liEls.forEach(async liEl => {
//     const imgEl = await loadImage(liEl.dataset.photo)
//     liEl.prepend(imgEl)
//     liEl.querySelector('.loader').remove()
//   })
// })

// function loadImage(src) {
//   return new Promise (resolve => {
//     const imgEl = document.createElement('img')
//     imgEl.src = src
//     imgEl.addEventListener('load', () => {
//       resolve(imgEl)
//     })
//   })
// }

// 09-06 - 비동기 - 이행과 거부, 예외 처리 1
console.log('**** 09-06 - 비동기 - 이행과 거부, 예외 처리 1 ****')

// 예외 처리
// h1El.addEventListener('click', async () => {
//   // ulEl.textContent = 'Loading...'
//   const loaderEl = document.createElement('div')
//   loaderEl.classList.add('loader')
//   ulEl.innerHTML = ''
//   ulEl.append(loaderEl)
//   try {
//     const res = await fetch('https://api.heropy.dev/v0/users')
//     const data = await res.json()
//     console.log(data)
//     const { users } = data
//     const liEls = users.map(user => {
//       const liEl = document.createElement('li')
//       liEl.textContent = user.name
//       // const imgEl = document.createElement('img')
//       // imgEl.src = user.photo?.url || 'https://heropy.dev/favicon.png'
//       liEl.dataset.photo = user.photo?.url || 'https://heropy.dev/favicon.png'
//       if (!user.photo) {
//         liEl.classList.add('no-photo')
//       }
//       const loaderEl = document.createElement('div')
//       loaderEl.classList.add('loader')
//       liEl.prepend(loaderEl)
//       return liEl
//     })
//     // ulEl.textContent = ''
//     loaderEl.remove()
//     ulEl.append(...liEls)
//     liEls.forEach(async liEl => {
//       try {
//         const imgEl = await loadImage(liEl.dataset.photo)
//         liEl.prepend(imgEl)
//       } catch (error) {
//         console.log(error)
//       } finally {
//         liEl.querySelector('.loader').remove()
//       }
//     })
//   } catch (error) {
//     console.log(error)
//     ulEl.textContent = '사용자 정보를 찾을 수 없어요...'
//     loaderEl.remove()
//   }
// })

// function loadImage(src) {
//   return new Promise ((resolve, reject) => {
//     const imgEl = document.createElement('img')
//     imgEl.src = src
//     imgEl.addEventListener('load', () => {
//       resolve(imgEl)
//     })
//     imgEl.addEventListener('error', () => {
//       reject(new Error('이미지를 로드할 수 없어요...'))
//     })
//   })
// }

// 09-07 - 비동기 - 이행과 거부, 예외 처리 2
console.log('**** 09-07 - 비동기 - 이행과 거부, 예외 처리 2 ****')

//// 매개변수
// resolve - 약속을 이행하는 함수(정상 처리)
// reject - 약속을 거부 하는 함수(에러 사항)

// //// 용어 정리!
// // pending - 약속이 이행되거나 거부되기 전 상태
// // fulfilled - 약속이 이행된 상태
// // rejected - 약속이 거부된 상태
// function loadImage(src) {
//   // pending..
//   return new Promise((resolve, reject) => {
//     if (!src) {
//       reject(new Error('이미지 경로가 필요해요!')) // rejected!
//     }
//     const imgEl = document.createElement('img')
//     imgEl.src = src
//     imgEl.addEventListener('load', () => {
//       resolve(imgEl) // fulfilled!
//     })
//     imgEl.addEventListener('error', () => {
//       reject(new Error('이미지를 불러올 수 없어요!')) // rejected!
//     })
//   })
// }

// //// .then() / .catch() / .finally()
// // - 약속이 이행되었을 때 호출(then)하거나
// // - 약속이 거부되었을 때 호출(catch)하거나
// // - 이행 및 거부와 상관없이 항상 호출(finally)하는 메소드를 제공할 수 있다.
// loadImage('https://picsum.photo/300')
//   .then(imgEl => {  // 약속이 이행 되었을때 코드
//     document.body.append(imgEl)
//   })
//   .catch(error => { // 약속이 거부되었을때 코드
//     console.log(error.message)
//   })
//   .finally(() => {  // 약속의 이행, 거부와 상관없이 실행되는 코드
//     console.log('Done!')
//   })

// //// try / catch / finally
// // - 에러(예외)가 발생할 수 있는 코드의 실행을 시도(try)하고,
// // - 에러가 발생하면 시도를 종료해 에러를 잡아내며(catch),
// // - 에러 여부와 상관없이 항상 실행(finally)하는 코드를 정의할 수 있다.
// ;(async () => {
//   try {
//     const imgEl = await loadImage('https://picsum.photo/300')
//     document.body.append(imgEl)
//   } catch (error) {
//     console.log(error.message)
//   } finally {
//     console.log('DONE!')
//   }
// })()
//////

// 09-08 - 비동기 - 네트워크 통신을 위한 fetch 함수
console.log('**** 09-08 - 비동기 - 네트워크 통신을 위한 fetch 함수 ****')

// 네트워크 통신과 fetch 함수

// fetch('https://api.heropy.dev/v0/users')
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//////

//           요청(request)
// 클라이언트 ----------------> 서버
//         <----------------
//           응답(response)

//// 요청(request)
// url: 요청 서버 주소
// method: 요청 종류(GET, POST, PUT, DELETE 등)
// headers: 요청 메타 정보
// body: 요청 데이터

//// 응답(response)
// status: 응답 상태 코드(200, 400, 500 등)
// headers: 응답 메타 정보
// body: 응답 데이터
// ok: 정상적인 처리 여부

//// CRUD
// Create: POST - 데이터 생성
// Read: GET - 데이터 조회
// Update: PUT(PATCH) - 데이터 수정
// Delete: DELETE - 데이터 삭제

//// URL 구조
// https://www.heropy.dev/p/QOWqjv?key=value&a=12&b=34$h1-title
// https:// 통신 규약(Protocol)
// www.heropy.dev: 도메인(Domain)
// /p/QOWqjv: 경로(path)
// ?key=value&a=12&b=34: 쿼리(Query)
// $h1-title: 해시(Hash)

//// HTTP 상태 코드
// 1xx: 처리중
// 2xx: 성공
// 3xx: 리다이렉트
// 4xx: 클라이언트 오류
// 5xx: 서버 오류

// 200: 정상적으로 처리됨
// 400: 잘못된 요청
// 401: 인증 정보가 부족함
// 403: 권환이 없음
// 404: 찾을 수 없음
// 500: 서버 오류

//// fetch 함수
// fetch(url, options)
// options.method: 요청 종류(GET, POST, PUT, DELETE 등)
// options.headers: 요청 메타 정보
// options.body: 요청 데이터

// fetch('https://api.heropy.dev/v0/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     name: 'HEROPY',
//     age: 85,
//     isValid: true,
//     emails: ['thesecon@gmail.com']
//   })
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//////

// 09-09 - 비동기 - 반복문에서 비동기 처리
console.log('**** 09-09 - 비동기 - 반복문에서 비동기 처리 ****')

async function getMovies(movieName) {
  const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&s=${movieName}`)
  return await res.json()
}

const titles = ['frozen', 'avengers', 'avatar']

//// 배열 메소드 반복
// 순서 보장 X
// titles.forEach(async (title, index) => {
//   const movies = await getMovies(title)
//   console.log(`${index + 1}) ${title}`, movies)
// });

//// for 반복문
// 순서 보장 O
;(async () => {
  let index = 1
  for (const title of titles) {
    const movies = await getMovies(title)
    console.log(`${index}) ${title}`, movies)
    index += 1
  }
})()