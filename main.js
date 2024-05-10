// ***** JS 데이터 *****
console.log('***** JS 데이터 *****')
// ** 원시형 **
// string
console.log('원시형 - string')
// 문자(string)은 따옴표를 사용합니다.
const s1 = 'Neo'
const s2 = '123'

// 템플릿 리터럴(Literal)은 백틱을 사용하며, ${} 안에 데이터를 보간(Interpolation)합니다.
const s3 = `My name is ${s1}, I'm ${s2}.`

console.log(s3)

// number
console.log('원시형 - number')
// 숫자(number)은 정수 및 부동소수점 숫자(floating point number)를 나타냅니다.
const n1 = 123
const n2 = 12.345

// + - * /

// 숫자가 아닌 숫자는 NaN(Not a Number)으로 표시됩니다.
const n3 = n1 + 'abc'
const n4 = n1 + undefined // undefined : 정의 되지 않았다

console.log(n3) // '123abc'
console.log(n4) // NaN

// boolean
console.log('원시형 - boolean')
// 불린(boolean)은 'true'와 'false' 두 가지 값인 참/거짓의 논리 데이터입니다.
const a = true
const b = false

console.log(a, b)

if (a) {
  console.log('참(Truthy)입니다!')
}

// 데이터를 서로 비교해, 참과 거짓을 판단합니다.
const n1_2 = 1
const n2_2 = 9

console.log(n1 > n2)

// null
console.log('원시형 - null')
// 'null' 데이터는,
// 존재하지 않는(nothing), 비어 있는(empty), 알 수 없는(unknown) 값을 명시적으로 나타낸다.
let age = null;

const h1El = document.querySelector('h1');
console.log(h1El)
console.log(h1El.textContent)

// undefined
console.log('원시형 - undefined')
// 'undefined' 데이터는, '값이 할당되지 않는 상태'를 나타낼 때 사용한다.
// 변수는 선언했지만, 값을 할당하지 않았다면 해당 변수에 'undefined'가 임시적으로 할당된다

let age_2;
console.log(age_2)

function fn() {
  // return 123
}
console.log(fn())

// ** 참조형 **
console.log('참조형 - object')
// 객체(Object) 데이터는 순서가 없는 Key(키)와 Value(값)의 쌍으로 이루어진 데이터 집합입니다.
// 객체에 포함된 각 데이터를 속성(Property)라고 부르고,
// 만약 그 데이터가 함수인 경우에는, 메소드(Method)라고 부릅니다.
const user = {
  // key: value
  name: 'Neo',
  age: 85,
  isValid: true,
  emails: ['neo@abc.com', 'neo@xyz.com'],
  hello: function () {
    return `My name is ${this.name}, I'm ${this.age}!`
  }
}
console.log(user)

// 점 표기법(Dot Notation)을 사용해, 객체의 속성이나 메소드에 접근할 수 있습니다.
console.log(user.name)
console.log(user.age)
console.log(user.isValid)
console.log(user.emails)
console.log(user.hello())

const key = 'name';
// 대괄호 표기법(Bracket Notation)을 사용해, 객체의 속성이나 메소드에 접근할 수 있습니다.
console.log(user[key])
console.log(user['name'])
console.log(user['age'])
console.log(user['isValid'])
console.log(user['emails'])
console.log(user['hello']())

console.log('참조형 - functions')
// 함수(Function)란, 어떤 작업을 수행하기 위해 필요한 여러 코드의 집합으로,
// 코드를 추상화하고 재사용성을 확보합니다.
// 이 함수를 자바스크립트에서는 하나의 데이터 종류로 취급합니다.

// 함수 선언문(Declaration)
function add(a, b) {
  // console.log(a)
  // console.log(b)
  return a + b
}

console.log(add)
console.log(add(1, 3))
console.log(add(4, 12))
console.log(add(5, 7))

// 함수 표현식(Expression)
const sub = function (a, b) {
  return a - b
}

console.log(sub)
console.log(sub(1, 3))
console.log(sub(4, 12))
console.log(sub(5, 7))

console.log('참조형 - array')
// 배열(Array) 데이터는 순서가 있는 여러 데이터의 집합입니다.
// 배열에 포함된 각 데이터는 아이템(Item) 혹은 요소(Element)라고 부릅니다.
const fruits = ['Apple', 'Banana', 'Cherry']
const numbers = [12, 27, 5, 9, 103]

console.log(fruits)
console.log(numbers)

// 배열의 길이를 확인합니다. (갯수확인)
console.log(fruits.length)
console.log(numbers.length)

// 배열의 아이템 번호(Index)로 아이템을 확인합니다.
// 숫자는 0부터 시작합니다. (Zero-based Numbering)
console.log(fruits[2])
console.log(numbers[4])

// 배열의 모든 아이템을 순회하며 확인합니다.
for (let i = 0; i < fruits.length; i += 1) {
  console.log(fruits[i])
}
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i])
}

// ** 참과 거짓 **
console.log('참과 거짓 (truthy & falsy)')
// '참'으로 평가되는 값(Truthy)
if (true) { console.log('참!') }
if ({}) { console.log('참!') }
if ([]) { console.log('참!') }
if (42) { console.log('참!') }
if ('0') { console.log('참!') }
if ('false') { console.log('참!') }
if (new Date()) { console.log('참!') }
if (-42) { console.log('참!') }
if (12n) { console.log('참!') }
if (3.14) { console.log('참!') }
if (-3.14) { console.log('참!') }
if (Infinity) { console.log('참!') }
if (-Infinity) { console.log('참!') }

// '거짓'으로 평가되는 값(Falsy)
if (false) { console.log('거짓..') }
if (null) { console.log('거짓..') }
if (undefined) { console.log('거짓..') }
if (0) { console.log('거짓..') }
if (-0) { console.log('거짓..') }
if (NaN) { console.log('거짓..') }
if (0n) { console.log('거짓..') }
if ('') { console.log('거짓..') }

const fruits_2 = ['Apple', 'Banana']
if (fruits_2.length) {
  console.log('과일이 있어요!')
}

const h1El_2 = document.querySelector('h1')
if (h1El_2) { 
  console.log(h1El_2.textContent)
}

console.log('변수(const, let)')
// 변수(Variable)란, 데이터(값)의 이름을 지정한 것입니다.
// 이름이 있으면, 그 이름으로 언제든지 데이터를 재사용할 수 있습니다.

// const 키워드는 상수(Constant)를 의미하며, 한 번 선언하면 다른 값으로 바꿀 수 없습니다.
const c = 12
console.log(c)
console.log(c)
// c = 34 // Error: Assignment to constant variable.

// let 키워드는 선언한 값을 다른 값으로 바꿀 수 있습니다.
let l = 56
console.log(l)
console.log(l)
l = 78
console.log(l)
console.log(l)

console.log('형변환(type conversion)')
// 형 변환(Type Conversion)이란,
// 데이터가 상황에 따라 적절한 데이터 타입(자료형)으로 변환되는 것을 말합니다.

const a_2 = 1
const b_2 = '1'

// == 동등 연산자
console.log('동등', a == b)
// === 일치 연산자
console.log('일치', a === b)

// 다음 코드는 모두 true를 출력한다
console.log('===========')
console.log(123 == '123')
console.log(1 == true)
console.log(0 == false)
console.log(null == undefined)
console.log('' == false)

// 다음 코드는 모두 false를 출력한다
console.log('===========')
console.log(123 === '123')
console.log(1 === true)
console.log(0 === false)
console.log(null === undefined)
console.log('' === false)

const h1El_3 = document.querySelector('h1')
if (h1El_3) {
  console.log(h1El_3.textContent)
}

// 데이터 타입 확인
console.log('데이터 타입 확인')
const data = {
  string: '123',
  number: 123,
  boolean: true,
  null: null,
  undefined: undefined,
  array: [1, 2, 3],
  object: { a: 1, b: 2 },
  function: function () {}
}

console.log('typeof 데이터')
console.log(typeof data.string === 'string')
console.log(typeof data.number === 'number')
console.log(typeof data.boolean === 'boolean')
console.log(typeof data.null === 'object')
console.log(typeof data.undefined === 'undefined')
console.log(typeof data.array === 'object')
console.log(typeof data.function === 'function')

console.log('데이터.constructor')
console.log(data.string.constructor === String)
console.log(data.number.constructor === Number)
console.log(data.boolean.constructor === Boolean)
// console.log(data.null.constructor) // ERROR!
// console.log(data.undefined.constructor) // ERROR!
console.log(data.array.constructor === Array)
console.log(data.object.constructor === Object)
console.log(data.function.constructor === Function)

// ***** 연산자와 구문 *****
console.log('***** 연산자와 구문 *****')
// ** 산술, 할당, 증감 연산자 **
console.log('산술, 할당, 증감 연산자')
// 산술 연산자(Arithmetic operator)
console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 5)

// 할당 연산자(Assignment Operator)
let a_3 = 3
console.log(a_3)

// a = a + 2
a_3 += 2
console.log(a_3)

// a = a - 2
a_3 -= 2
console.log(a_3)

// a = a * 2
a_3 *= 2
console.log(a_3)

// a = a / 2
a_3 /= 2
console.log(a_3)

// a = a % 2
a_3 %= 2
console.log(a_3)

// 증감 연산자(Increment & Decrement Operators)는 변수 1씩 더하거나 빼는 연산자입니다.

// ++ 기호가 뒤에 있는경우, 
let a_4 = 3
console.log(a_4++)
console.log(a)

// ++ 기호가 앞에 있는 경우,
let b_3 = 3
console.log(++b_3)
console.log(b_3)

// -- 기호가 뒤에 있는 경우,
let c_2 = 3
console.log(c_2--)
console.log(c_2)

// -- 기호가 앞에 있는 경우,
let d = 3
console.log(--d)
console.log(d)

// 증강 연산자보다, 할당 연산자를 사용하는것을 추천한다
let e = 3
e += 1
console.log(e)
e -= 1
console.log(e)

// ** 부정, 비교 연산자 **
console.log('부정, 비교 연산자')
// 부정 연산자(Negation Operator)는 참과 거짓의 반댓값을 불린 데이터로 변환합니다.

console.log(!true) // true
console.log(!false) // true

console.log('중첩 사용 ============')
console.log(!0) // true
console.log(!!0)  // false
console.log(!!!0)  // true
console.log(!!!!0)  // false

console.log('거짓(Falsy) ============')
console.log(!null) // true
console.log(!NaN) // true
console.log(!undefined) // true
console.log(!'') // true

console.log('참(Truthy) =============')
console.log(!{})  // true
console.log(![])  // false
console.log(!'A') // false

// 비교 연산자(Comparison Operators)는 두 데이터를 비교할 때 사용합니다.
const a_5 = 1
const b_5 = 3

// 동등(형 변환!)
console.log(a_5 == b_5) // false

// 부등(형 변환!)
console.log(a_5 != b_5) // true

// 일치
console.log(a_5 === b_5) // false

// 불일치
console.log(a_5 !== b_5) // true

// 큼
console.log(a_5 > b_5) // false

// 크거나 같음
console.log(a_5 >= b_5) // false

// 작음
console.log(a_5 < b_5) // true

// 작거나 같음
console.log(a_5 <= b_5) // true

// ** 논리 연산자 **
// console.log('논리 연산자')
// // 호이스팅(Hoisting)
// hello()   // OK!
// // world()   // Error..

// // 함수 선언문(Declaration)
// function hello() {
//   console.log('Hello~')
// }
// // 함수 표현식(Expression)
// const world = function () {
//   console.log('World~')
// }

// function getFruits() {
//   // 코드1
//   // 코드2
//   // 코드3
//   // 코드4
//   // ...
//   // return fruits
// }

// const getMovies = function() {
//   // 코드1
//   // 코드2
//   // 코드3
//   // 코드4
//   // ...
//   // return movies
// }

// const fruits_3 = getFruits()
// const movies_3 = getMovies()

// ** 삼항 연산자 **
console.log('삼항 연산자')
// 조건 ? (조건이 참일 때 실행) : (조건이 거짓일 때 실행)

const fruits_4 = ['Apple', 'Banana', 'Cherry']

// if 조건문
if (fruits_4.length > 0) {
  console.log('과일이 있습니다.')
} else {
  console.log('과일이 없습니다.')
}

// 삼항 연산자
const message = fruits_4.length > 0 ? '과일이 있습니다.' : '과일이 없습니다.'
console.log(message)

function includesText(el) {
  // if (el.textContent) {
  //   return '글자 있음!'
  // } else {
  //   return '글자 없음!'
  // }
  return el.textContent ? '글자 있음!' : '글자 없음!'
}

const h1El_4 = document.querySelector('h1')
console.log(includesText(h1El_4))

// ** 전개 연산자 **
console.log('전개 연산자')

// 배열 데이터
const numbers_2 = [1, 2, 3] 
console.log(numbers_2) // [1, 2, 3]
console.log(1, 2, 3) // 1, 2, 3

const n1_3 = [1, 2, 3]
const n2_3 = [2, 3, 4]
const n3_3 = n1_3.concat(n2_3)
const n4_3 = [...n1_3, ...n2_3]
console.log(n3_3) // [1, 2, 3, 2, 3, 4]
console.log(n4_3) // [1, 2, 3, 2, 3, 4]

// 객체 데이터
const o1 = { a: 1, b: 2, c: 3 }
const o2 = { b: 99, c: 100, d: 101 }
const o3 = Object.assign({}, o1, o2)
const o4 = { ...o1, ...o2 }
console.log(o3)
console.log(o4)

// ** 조건문 - if **
console.log('***** 조건문 - if *****')
const age_3 = 20
if (age >= 18) {
  console.log('성인')
}

const number_2 = 7
if (number_2 % 2 === 0) {
  console.log('짝수')
} else {
  console.log('홀수')
}

const score = 85
if (score >= 90) {
  console.log('A')
} else if (score >= 80) {
  console.log('B')
} else if (score >= 70) {
  console.log('C')
} else if (score >= 60) {
  console.log('D')
} else {
  console.log('F')
}

const inputEl = document.querySelector('.input_1')
const buttonEl = document.querySelector('.button_1')
const h1El_5 = document.querySelector('.h1_1')

buttonEl.addEventListener('click', function () {
  const score = Number(inputEl.value)
  if (score >= 90) {
    h1El_5.textContent = 'A'
  } else if (score >= 80) {
    h1El_5.textContent = 'B'
  } else if (score >= 70) {
    h1El_5.textContent = 'C'
  } else if (score >= 60) {
    h1El_5.textContent = 'D'
  } else {
    h1El_5.textContent = 'F'
  }
})

// ** 조건문 - switch **
console.log('***** 조건문 - switch *****')
const prod = '노트북'
switch (prod) {
  case '노트북' : 
    console.log((3000000).toLocaleString() + '원')
    break
  case '스마트폰':
    console.log((800000).toLocaleString() + '원')
    break
  case '키보드':
  case '마우스':
    console.log((120000).toLocaleString() + '원')
    break
  default:
    console.log('-')
}

const inputEl_2 = document.querySelector('.input_2')
const buttonEl_2 = document.querySelector('.button_2')
const h1El_6 = document.querySelector('.h1_2')

buttonEl_2.addEventListener('click', function () {
  const prod = inputEl_2.value
  switch (prod) {
    case '노트북' : 
      h1El_6.textContent = (3000000).toLocaleString() + '원'
      break
    case '스마트폰':
      h1El_6.textContent = (800000).toLocaleString() + '원'
      break
    case '키보드':
    case '마우스':
      h1El_6.textContent = (120000).toLocaleString() + '원'
      break
    default:
      h1El_6.textContent = '-'
  }
})

// ** 반복문 - for **
console.log('***** 반복문 - for *****')
// for 문
// for (초기화; 조건; 증강) {}
for (let i = 0; i < 10; i += 1) {
  if (i % 2 === 0) {
    // break
    continue
  }
  console.log(i)
}

// ** 반복문 - while **
console.log('***** 반복문 - while *****')
// while 문
// while (조건) {}

for (let i = 0; i < 10; i++) {
  const divEl = document.createElement('div')
  divEl.textContent = i
  document.body.append(divEl)
}

// let count = 1
// while (count <= 10) {
//   const divEl = document.createElement('div')
//   divEl.textContent = count
//   document.body.appendChild(divEl)
//   count += 1
// }

// ** 반복문 - for of, for in **
console.log('***** 반복문 - for of, for in *****')

// for of 문
// for (const 아이템 변수 of 배열) {}
const fruits_5 = ['Apple', 'Banana', 'Cherry', 'Durian']
for (let i = 0; i < fruits_5.length; i++) {
  const fruit = fruits_5[i]
  console.log(fruit)
}
for (const fruit of fruits_5) {
  if (fruit === 'Cherry') {
    continue
  }
  console.log(fruit)
  const divEl = document.createElement('div')
  divEl.textContent = fruit
  divEl.classList.add('fruit')
  document.body.appendChild(divEl)
}

// for in 문
// for (const 키변수 in 객체) {}
const user_2 = {
  name: 'Heropy',
  age: 85,
  isValid: true,
  email: 'thesecon@gmail.com'
}
for (const key in user_2) {
  if (key === 'age') {
    continue
  }
  console.log(key, user_2[key])
  const divEl = document.createElement('div')
  divEl.innerHTML = `<b>${key}</b>: ${user_2[key]}`
  document.body.appendChild(divEl)
}

// ***** 함수 *****
console.log('***** 함수 *****')
// ** 데이터와 호출, 기명과 익명함수 **
console.log('** 데이터와 호출, 기명과 익명함수 **')

function hello() {
  return 'Hello~'
}

// 함수 데이터(Data)
console.log(hello)
console.log(typeof hello)

// 함수 호출(Call)
console.log(hello())
console.log(typeof hello())

const h1El_7 = document.querySelector('h1')

// 기명 함수 - function 이름() {}
function handler() {
  console.log(h1El_7.textContent)
}
h1El_7.addEventListener('click', handler)

// 익명 함수 - function () {}
h1El_7.addEventListener('click', function () {
  console.log(h1El_7.textContent)
})

// ** 선언과 표현, 호이스팅 **
console.log('논리 연산자')
// 호이스팅(Hoisting)
hello()   // OK!
// world()   // Error..

// 함수 선언문(Declaration)
function hello() {
  console.log('Hello~')
}
// 함수 표현식(Expression)
const world = function () {
  console.log('World~')
}

function getFruits() {
  // 코드1
  // 코드2
  // 코드3
  // 코드4
  // ...
  // return fruits
}

const getMovies = function() {
  // 코드1
  // 코드2
  // 코드3
  // 코드4
  // ...
  // return movies
}

const fruits_3 = getFruits()
const movies_3 = getMovies()

// ** 반환과 종료 **
console.log('** 반환과 종료 **')

function sayHi(name) {
  return `Hi, ${name}~`
  console.log('동작하지 않음!')
}
const h = sayHi('Neo')
console.log(h)  // 'Hi, Neo~'

console.log('Hi, Neo~') // 'Hi Neo~'

function a_f() {
  //
}
function b_f() {
  return
}
function c_f() {
  return undefined
}

console.log(a_f())  // undefined
console.log(b_f())  // undefined
console.log(c_f())  // undefined

// ** 인수와 매개변수 **
console.log('** 인수와 매개변수 **')

// 인수(argument)와 매개변수(parameter)
function add_2(a, b) {
  return a + b
}

console.log(add(2, 1))
console.log(add(7, 4))
console.log(add('A', 'B'))

// 매개변수 기본값 (default value)
function add_3(a, b = 1) {
  if (a === undefined){ 
    console.log('첫 번째 인수는 필수 입니다!')
    return
  }
  return a + b
}

console.log(add_3(2))
console.log(add_3(2, undefined))
console.log(add_3())

// 나머지 매개변수(rest parameter)
function add_4(a, b, ...rest) {
  console.log(a, b, rest)
  return rest.reduce((acc, cur) => acc + cur, 0)
}
const res = add_4(1, 2, 3, 4, 5, 6, 7, 8)
console.log(res)


// ** 화살표 함수 **
console.log('** 화살표 함수 **')

// 일반 함수
function hello1() {
  return 'Hello~'
}
const add1 = function(a, b) {
  return a + b
}
const log1 = function (c) {
  console.log(c)
}

// 화살표 함수
const hello2 = () => 'Hello~'
const add2 = (a, b) => a + b
const log2 = c => {
  console.log(c)
}

// 화살표 함수의 소괄호 생략
const a_6 = () => {}
const b_6 = x => {} // 매개변수가 1개만 있을때 생략가능 (기본값지정때는 불가)
const c_6 = (x, y) => {}

// 화살표 함수의 중괄호 생략
const a_7 = x => {
  return x * x
}
const b_7 = x => x * x

const c_7 = x => {
  console.log(x * x)
  return x * x
}

const d_7 = () => {
  return [1, 2, 3]
}
const e_7 = () => [1, 2, 3]

const g_7 = () => {
  return { a: 1 }
}
const h_7 = () => ({ a: 1 })
// const h_7 = () => { a: 1 } // error: unexpected token ':'


// 객체 데이터의 메소드 축약
const obj = {
  fnA() {}, // 일반 함수(fnB)의 축약형
  fnB: function () {},
  fnC: () => {}
}

// ** 콜백(callback) **
console.log('** 콜백(callback) **')

// 콜백(callback)
const a_8 = callback => {
  console.log('A')
  callback()
}
const b_8 = () => {
  console.log('B')
}

a_8(b_8)
// 'A'
// 'B'

// function add_5(a, b, cb) {
//   // 1초 후 실행
//   setTimeout(() => {
//     cb(a + b)
//   }, 1000)
// }
// add_5(3, 7, result => {
//   console.log(result) // 10
// })

const h1El_8 = document.querySelector('h1')
h1El_8.addEventListener('click', () => {
  console.log(h1El_8.textContent)
})

// ** 즉시 실행함수(IIFE) **
console.log('** 즉시 실행함수(IIFE) **')

// 함수 정의(표현)
const double = () => {
  // ...
}
// 함수 실행 (호출)
double()

// 함수 정의 및 실행
// 즉시 실행함수(IIFE, Immediately Invoked Function Expression)
// ;(함수)()
;(() => {
  // ...
})()

// '즉시실행함수'의 다양한 사용법
;(() => {})()           // (화살표함수)()
;(function () {})()     // (일반함수)()
;(function () {}())     // (일반함수())
;!function () {}()      // !일반함수()
;+function () {}()      // +일반함수()

// ** 호출 스케줄링 **
console.log('** 호출 스케줄링 **')

// 콜백을 호출하는 타이머 설정
// const timeout = setTimeout(() => {
//   console.log('Hello~')
// }, 5000);

// 타이머를 취소
// const btnEl = document.querySelector('.button_3')
// btnEl.addEventListener('click', () => {
//   console.log('타이머 취소!')
//   clearTimeout(timeout)
// })

// 콜백을 호출하는 타이머 설정
// const timeout_2 = setInterval(() => {
//   console.log('Hello~')
// }, 3000);

// 타이머를 취소
// const btnEl_2 = document.querySelector('.button_4')
// btnEl_2.addEventListener('click', () => {
//   console.log('타이머 취소!')
//   clearInterval(timeout_2)
// })

// ** 04-01 - 표준 내장 객체 - String 1 **
console.log('** 04-01 - 표준 내장 객체 - String 1 **')

// String(문자) 표준 내장 객체(Built-in Object)
// .length - 문자의 길이(숫자)를 반복한다.

const msg1 = 'Hello world!'
//            012345678901
console.log(msg1.length)  // 12

const msg2 = 'The quick brown fox jumps over the lazy dog.'
//            012345678901234567890123456789012345678901234
console.log(msg1.length)  // 44

const h1El_9 = document.querySelector('.h1_3')
h1El_9.textContent = msg2.length > 20 ? `${msg2.slice(0, 20)}...` : msg2

// String(문자) 표준 내장 객체(Built-in Object)
// .includes() - 문자에서 특정 문자가 포함되어 있는지 확인합니다

console.log(msg1.includes('!')) // true
console.log(msg2.includes('dog')) // false

// String(문자) 표준 내장 객체(Built-in Object)
// .replace() - 문자에서 특정 문자를 다른 문자로 바꾼 새로운 문자를 반환합니다

console.log(msg1.replace('world', 'earth'))
console.log(msg1)
console.log(msg2.replace('fox', 'cat'))
console.log(msg2)

console.log(msg1.replace(' ', ''))
console.log(msg2.replace(' ', ''))
console.log(msg2.replaceAll(' ', ''))

// 04-02 - 표준 내장 객체 - String 2
console.log('** 04-01 - 표준 내장 객체 - String 2 **')

// String(문자) 표준 내장 객체(Built-in Object)
// .slice() - 문자에서 일부를 추출해 새로운 문자를 반환합니다.

console.log(msg1.slice(0, 5)) // 'Hello'
console.log(msg1)
console.log(msg1.slice(6, -1)) // 'world'
console.log(msg1.slice(6)) // 'world!'
console.log(msg2.slice(10, 19)) // 'brown fox'
console.log(msg2.slice(35, -1)) // 'lazy dog'

// String(문자) 표준 내장 객체(Built-in Object)
// .split() - 문자를 구분자로 나누어 배열로 반환합니다.

console.log(msg1.split(' '))  // ['Hello', 'world!']
console.log(msg2.split(' '))  // ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']

console.log(msg1.split(''))
console.log(msg1.split('').reverse().join(''))  // !dlrow olleH

// String(문자) 표준 내장 객체(Built-in Object)
// .toLowerCase() - 문자를 영어 소문자로 바꾼 새로운 문자로 반환한다
// .toUpperCase() - 문자를 영어 대문자로 바꾼 새로운 문자로 반환한다

console.log(msg1.toLowerCase())
console.log(msg1)
console.log(msg2.toLowerCase())

console.log(msg1.toUpperCase())
console.log(msg1)
console.log(msg2.toUpperCase())

// String(문자) 표준 내장 객체(Built-in Object)
// .trim() - 문자에서 앞뒤 공백을 제거한 새로운 문자를 반환한다

const msg3 = ' Hello world!    '

console.log(msg3.trim())
console.log(msg3)

const inputEl_5 = document.querySelector('.input_5')
const buttonEl_5 = document.querySelector('.button_5')

inputEl_5.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    const value = inputEl_5.value.trim()
    if (value) {
      console.log(`//${value}//`)
    }
  }
})
buttonEl_5.addEventListener('click', () => {
  const value = inputEl_5.value.trim()
    if (value) {
      console.log(`//${value}//`)
    }
})

// 04-03 - 표준 내장 객체 - Number
console.log('** 04-03 - 표준 내장 객체 - Number **')

// Number(숫자) 표준 내장 객체(Built-in Object)
// .toFixed() - 숫자에서 지정된 자릿수까지 표현하는 새로운 문자를 반환한다.

const num = 3.1415926535

console.log(num.toFixed(2)) // '3.14'
console.log(Number('3.14 ')) // '3.14

// Number(숫자) 표준 내장 객체(Built-in Object)
// .toLocaleStirng() - 숫자에서 현지 언어 형식으로 바꾼 새로운 문자를 반환한다

const num1 = 1000
const num2 = 100000000
const num3 = num1.toLocaleString()
const num4 = num2.toLocaleString()

console.log(num3)
console.log(num4)
console.log(Number(num3.replaceAll(',', '')))
console.log(Number(num4.replaceAll(',', '')))

// Number(숫자) 표준 내장 객체(Built-in Object)
// Number(), Number.parseInt(), Number.parseFloat()
// 데이터.메소드() vs 클래스.메소드()

// 더 광범위하게 해석, 유연함
console.log('Number(데이터)') // 데이터를 숫자로 변환한다.
console.log(Number('123'))
console.log(Number('123.456'))
console.log(Number('abc123'))
console.log(Number('123abc'))
console.log(Number(''))
console.log(Number('abc'))
console.log(Number(true))
console.log(Number(false))
console.log(Number({}))
console.log(Number([]))

// 숫자를 추출해 명확하고 예측 가능하게 동작, 진법 지정 가능, 정수만 처리
console.log('Number.parseInt(문자, 진수)') // 문자를 정수로 반환한다
console.log(Number.parseInt('123', 10))
console.log(Number.parseInt('123.456', 10))
console.log(Number.parseInt('abc123', 10))
console.log(Number.parseInt('123abc', 10))
console.log(Number.parseInt('', 10))
console.log(Number.parseInt('abc', 10))
console.log(Number.parseInt('true', 10))
console.log(Number.parseInt('flase', 10))
console.log(Number.parseInt({}, 10))
console.log(Number.parseInt([], 10))

// parseInt 장점에 더해, 부동소수점 실수까지 처리
console.log('Number.parseFloat(문자)')
console.log(Number.parseFloat('123'))
console.log(Number.parseFloat('123.456'))
console.log(Number.parseFloat('abc123'))
console.log(Number.parseFloat('123abc'))

// Number.isInteger() - 데이터가 정수(숫자 데이터)인지 확인
console.log(Number.isInteger(123))
console.log(Number.isInteger(3.14))
console.log(Number.isInteger(-82))
console.log(Number.isInteger(0))
console.log(Number.isInteger('123'))
console.log(Number.isInteger('abc'))

// Number.isNaN() - 데이터가 'NaN'인지 확인한다
console.log(Number.isNaN(NaN))
console.log(Number.isNaN(123))
console.log(Number.isNaN(Infinity))
console.log(Number.isNaN('abc'))

// 04-04 - 표준 내장 객체 - Math
console.log('** 04-04 - 표준 내장 객체 - Math **')

// Math(숫자) 표준 내장 객체(Built-in Object)
// Math.abs() - 주어진 숫자의 절댓값을 반환한다

console.log(Math.abs(7))
console.log(Math.abs(-7))
console.log(Math.abs(3.14))
console.log(Math.abs(-3.14))

// Math.ceil() - 주어진 숫자를 올림해 정수를 반환
// Math.floor() - 주어진 숫자를 내림해 정수를 반환
// Math.round() - 주어진 숫자를 반올림해 정수를 반환
console.log(Math.ceil(3.1415926535))  // 4
console.log(Math.ceil(3.1415926535 * 100) / 100)  // 3.15
console.log(Math.floor(3.1415926535))  // 3
console.log(Math.floor(3.1415926535 * 100) / 100)  // 3.14

console.log(Math.round(3.141))  // 3
console.log(Math.round(3.768))  // 4

console.log(Math.round(3.141 * 10) / 10) // 3.1
console.log(Math.round(3.768 * 10) / 10) // 3.8

// Math.max() - 주어진 숫자 중 가장 큰 숫자를 반환
// Math.min() - 주어진 숫자 중 가장 작은 숫자를 반환
console.log(Math.max(10, 128, 12, 49, 7)) // 128
console.log(Math.min(10, 128, 12, 49, 7)) // 7

const numbers_3 = [10, 128, 12, 49, 7]
console.log(Math.max(...numbers_3)) // 128
console.log(Math.min(...numbers_3)) // 7

// Math.random() - '0' 이상 '1' 미만의 난수(무작위 수)를 반환
console.log(Math.random())
console.log(Math.random())

// 원하는 범위의 무작위 정수 얻는 함수
function random(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min)) + min
}
console.log(random()) // 0 ~ 9
console.log(random(0, 100)) // 0 ~ 99
console.log(random(101, 200)) // 101 ~ 999

// 04-5 - 표준 내장 객체 - Date
console.log('** 04-05 - 표준 내장 객체 - Date **')

// Date(날짜) 표준 내장 객체(Built-in Object)
// 'new Date()'를 통해 반환된 인스턴스를 '타임스탬프'(Timestamp)라고 한다

let date = new Date()
console.log(date)

// 2024년 12월 16일 17시 23분 31초
// date = new Date(2024, 11, 16, 17, 23, 31)
// console.log(date)

// 타임스탬프에서 각정보를 얻을 수 있다.
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())

const h1El_10 = document.querySelector('.h1_4')
h1El_10.textContent = `${date.getFullYear()}년`

function getdayKo(day) {
  switch (day) {
    case 0: return '일요일'
    case 1: return '월요일'
    case 2: return '화요일'
    case 3: return '수요일'
    case 4: return '목요일'
    case 5: return '금요일'
    case 6: return '토요일'
  }
}

// .getTime() - 유닉스 타임(UNIX TIME)으로부터 경과한 시간(ms)을 반환한다
// Date.now() - 현재 시간을 유닉스 타임으로 변환
// 유닉스 타임이란, 1970.01.01 00:00:00 시간을 의미

const date1 = new Date()
const date2 = Date.now()

console.log(date1)
console.log(date1.getTime())
console.log(date2)

// setTimeout(() => {
//   console.log(Date.now(), date2)
//   console.log(Date.now() - date2)
// }, 1000)

// 날짜 인스턴스의 협정 세계시(UTC)를 'ISO 8601' 포맷으로 반환
// 'ISO 8601'는 날짜와 시간을 표현하는 국제 표준 규격
console.log(new Date())
console.log(new Date().toISOString())

// 04-6 - 표준 내장 객체 - Array1 - length, at, concat, every
console.log('** 04-6 - 표준 내장 객체 - Array1 - length, at, concat, every **')

// Array(배열) 표준 내장 객체(Built-in Object)
// .length - 배열의 길이(숫자)를 반환
const fruits_6 = ['Apple', 'Banana', 'Cherry']
console.log(fruits_6.length)

// .at() - 배열 인덱싱하며, 만약 음수를 사용하면 뒤에서부터 인뎅싱한다
console.log(fruits_6[1])
console.log(fruits_6.at(1))

console.log(fruits_6[fruits_6.length - 1])
console.log(fruits_6.at(-1))

// .concat() - 배열에서 주어진 배열을 병합해 새로운 배열을 반환
const fruits_7 = ['Apple', 'Banana', 'Cherry']
const fruits_8 = ['Cherry', 'Durian']
const fruits_9 = fruits_7.concat(fruits_8)
const fruits_10 = ['Apple', 'Banana', 'Cherry', ...fruits_8]

console.log(fruits_7)
console.log(fruits_8)
console.log(fruits_9)
console.log(fruits_10)

// .every() - 배열의 모든 요소가 콜백 테스트를 톡화하는지 확인
// 만약 텍스트가 하나라도 실패하면, 이후 테스트는 진행하지 않고 'false'를 반환

const numbers_4 = [17, 29, 199, 5, 48]
const isValid_2 = numbers_4.every(item => item < 200)
console.log(isValid_2)

const user_3 = [
  { name: 'Neo', age: 12, email: 'neo@heropy.dev' },
  { name: 'Evan', age: 47, email: 'evan@heropy.dev' },
  { name: 'Lewis', age: 24 }
]
console.log(user_3.every(user => user.email))
console.log(user_3.every(user => user.age))

// 04-7 - 표준 내장 객체 - Array 2 - filter, find
console.log('** 04-7 - 표준 내장 객체 - Array 2 - filter, find **')

// Array(배열) 표준 내장 객체(Built-in Object)
// .filter() - 배열에서 콜백 테스트를 통과하는 모든 요소로 새로운 배려을 만들어 반환
// 만약 모든 요소가 테스트를 통과하지 못하면 빈 배열을 반환
const numbers_5 = [17, 20, 199, 5, 48]
const filteredNumbers = numbers_5.filter(number => number < 30)
console.log(filteredNumbers)

const user_4 = [
  { name: 'Neo', age: 12, email: 'neo@heropy.dev' },
  { name: 'Evan', age: 47, email: 'evan@heropy.dev' },
  { name: 'Lewis', age: 24 }
]
const youngUsers = user_4.filter(user => user.age < 30)
console.log(youngUsers)
const usersWithEmail = user_4.filter(user => user.email)
console.log(usersWithEmail)
const userWithPhone = user_4.filter(user => user.phone)
console.log(userWithPhone)

// .find() - 배열에서 콜백 테스트를 처음으로 통과하는 요소를 반환
// 만약 테스트가 동과되면, 이후 테스트는 진행되지 않는다
// 만약 모든 테스트가 실패하면, 'undefine'를 반환

const numbers_6 = [17, 20, 199, 5, 48]
const foundNumber = numbers_6.find(number => number < 30)
console.log(foundNumber)

const user_5 = [
  { name: 'Neo', age: 12, email: 'neo@heropy.dev' },
  { name: 'Evan', age: 47, email: 'evan@heropy.dev' },
  { name: 'Lewis', age: 24 }
]
const foundUser = user_5.find(user => !user.email)
console.log(foundUser)

// 04-8 - 표준 내장 객체 - Array 3 - findIndex, forEach, includes, join
console.log('** 04-8 - 표준 내장 객체 - Array 3 - findIndex, forEach, includes, join **')

// Array(배열) 표준 내장 객체(Built-in Object)
// .findIndex() - 배열에서 콜백 테스트를 처음으로 통과하는 요소의 인덱스를 반환
// 만약 테스트가 통과되면, 이후 테스트는 진행되지 않는다
// 만약 모든 테스트가 실패하면, '-1'를 반환
const numbers_7 = [17, 20, 199, 5, 48]
const foundIndex = numbers_7.findIndex(number => number === 5)
console.log(foundIndex)

const user_6 = [
  { name: 'Neo', age: 12, email: 'neo@heropy.dev' },
  { name: 'Evan', age: 47, email: 'evan@heropy.dev' },
  { name: 'Lewis', age: 24 }
]
const foundUserIndex = user_6.findIndex(user => !user.email)
console.log(foundUserIndex)

// .forEach() - 배열의 각 요소에 대해 콜백을 호출
// 만약 배열이 비어있다면, 아무런 동작도 하지 않는다
// 만약 반복을 종료하고 싶다면, for 반복문을 사용

const numbers_8 = [17, 20, 199, 5, 48]
numbers_8.forEach(number => {
  console.log(number)
})

let sum = 0
numbers_8.forEach(number => {
  sum += number
})
console.log('합계:', sum)

for (const number of numbers_8) {
  if (number > 100) {
    break
  }
  console.log(number)
}

// .includes() - 배열에서 특정 요소가 포함되어 있는지 확인한다
const fruits_11 = ['Apple', 'Banana', 'Cherry']
console.log(fruits_11.includes('Apple'))
console.log(fruits_11.includes('banana')) // false

const numbers_9 = [17, 20, 199, 5, 48]
console.log(numbers_9.includes(20))
console.log(numbers_9.includes(200))  // false

// .join() - 배열의 모든 요소를 연결해 하나의 문자열로 만든다
const fruits_12 = ['Apple', 'Banana', 'Cherry']
console.log(fruits_12.join())
console.log(fruits_12.join(''))
console.log(fruits_12.join(', '))
console.log(fruits_12.join('/'))

const msg4 = 'Hello world!'
console.log(msg4.split('').reverse().join(''))

// 04-9 - 표준 내장 객체 - Array 4 - map, push, reduce
console.log('** 04-9 - 표준 내장 객체 - Array 4 - map, push, reduce **')

// Array(배열) 표준 내장 객체(Built-in Object)
// .map() - 배열의 모든 요소에 대해 각 콜백을 호출하고 반환된 결과를 새로운 배열로 반환

const numbers_10 = [17, 20, 199, 5, 48]
const doubleNumbers = numbers_10.map(number => number * 2)
console.log(doubleNumbers)
console.log(numbers_10)

const fruits_13 = ['Apple', 'Banana', 'Cherry']
const capitalizedFruits = fruits_13.map(fruit => fruit.toUpperCase())
console.log(capitalizedFruits)
console.log(fruits_13)

const user_7 = [
  { name: 'Neo', age: 12, email: 'neo@heropy.dev' },
  { name: 'Evan', age: 47, email: 'evan@heropy.dev' },
  { name: 'Lewis', age: 24 }
]
const userEmails = user_7.map(user => user.email)
console.log(userEmails)
console.log(userEmails.filter(email => email))

// .push() - 배열의 마지막에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환
// 배열 원본이 변경된다
const fruits_14 = ['Apple', 'Banana', 'Cherry']
console.log(fruits_14.push('Durian'))
console.log(fruits_14.length)
console.log(fruits_14)

const numbers_11 = [17, 20, 199, 5, 48]
console.log(numbers_11.push(9, 10, 11))
console.log(numbers_11.length)
console.log(numbers_11)

// .reduce() - 배열의 각 요소에 대해 콜백을 호출하고,
// 각 콜백의 반환 값을 다음 콜백으로 전달해 마지막 콜백의 반환 값을 최종 반환
const numbers_12 = [17, 20, 199, 5, 48]

let sum1 = 0
numbers_12.forEach(number => {
  sum1 += number
})
console.log('합계:', sum1)

const sum2 = numbers_12.reduce((accumulator, number) => {
  return accumulator + number
}, 0)
console.log('합계:', sum2)

const user_8 = [
  { name: 'Neo', age: 12, email: 'neo@heropy.dev' },
  { name: 'Evan', age: 47, email: 'evan@heropy.dev' },
  { name: 'Lewis', age: 24 }
]
const sum3 = user_8.reduce((acc, user) => acc + user.age, 0)
console.log(sum3)

// 04-10 - 표준 내장 객체 - Array 5 - reverse, slice, some, sort
console.log('** 04-10 - 표준 내장 객체 - Array 5 - reverse, slice, some, sort **')

// Array(배열) 표준 내장 객체(Built-in Object)
// .revers() - 배열의 순서를 반전
// 배열 원본이 변경

const fruits_15 = ['Apple', 'Banana', 'Cherry']
console.log(fruits_15.reverse())
console.log(fruits_15)

const fruits_16 = ['Apple', 'Banana', 'Cherry']
console.log([...fruits_16].reverse())

const msg5 = 'Hello world!'
console.log(msg5.split('').reverse().join(''))

// .slice() - 배열의 일부를 추출해 새로운 배열로 반환
const numbers_13 = [100, 200, 300, 400, 500, 600, 700, 800, 900]
console.log(numbers_13.slice(0, 3))
console.log(numbers_13.slice(4, -1))
console.log(numbers_13.slice(4))
console.log(numbers_13.slice(-4))
console.log(numbers_13.slice(-4, -1))
console.log(numbers_13.slice())
console.log(numbers_13)

// .some() - 배열의 요소 중 콜백 테스트를 통과하는 요소가 하나라도 있는지 확인
// 만약 테스트가 통과되면, 이후 테스트는 진행되지 않는다
const numbers_14 = [17, 20, 199, 5, 48]
const isValid_3 = numbers_14.some(number => number > 200)
console.log(isValid_3)

const user_9 = [
  { name: 'Neo', age: 12, email: 'neo@heropy.dev' },
  { name: 'Evan', age: 47, email: 'evan@heropy.dev' },
  { name: 'Lewis', age: 24 }
]
console.log(user_9.some(user => user.email))
console.log(user_9.some(user => user.phone))

// .sort() - 배열의 요소를 콜백의 반환 값에 따라 정렬한다
// 만약 콜백을 제공하지 않으면, 요소를 유니코드 포인트 순서대로 정렬
// 배열 원본이 변경된다
const numbers_15 = [17, 20, 199, 5, 48]
numbers_15.sort()
console.log(numbers_15)

numbers_15.sort((a, b) => a - b)
console.log(numbers_15)

numbers_15.sort((a, b) => b - a)
console.log(numbers_15)

const user_10 = [
  { name: 'Neo', age: 12, email: 'neo@heropy.dev' },
  { name: 'Evan', age: 47, email: 'evan@heropy.dev' },
  { name: 'Lewis', age: 24 }
]

user_10.sort((a, b) => a.age - b.age)
console.log(...user_10)

user_10.sort((a, b) => b.age - a.age)
console.log(...user_10)

// 04-11 - 표준 내장 객체 - Array 6 - splice, unshift, isArray, from
console.log('** 04-11 - 표준 내장 객체 - Array 6 - splice, unshift, isArray, from **')

// Array(배열) 표준 내장 객체(Built-in Object)
// .splice(인덱스, 삭제개수, 추가요소) - 배열의 요소를 추가하거나 삭제하거나 교체합니다.
// 배열 원본이 변경된다

// 요소추가
const fruits_17_1 = ['Apple', 'Banana', 'Cherry']
fruits_17_1.splice(2, 0, 'Durian')
console.log(fruits_17_1)

// 요소 삭제
const fruits_17_2 = ['Apple', 'Banana', 'Cherry']
fruits_17_2.splice(1, 2)
console.log(fruits_17_2)

// 요소 교체
const fruits_17_3 = ['Apple', 'Banana', 'Cherry']
fruits_17_3.splice(1, 1, 'Durian', 'Orange', 'Mango')
console.log(fruits_17_3)

// .unshift() - 배열의 시작 부분에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환
// 배열 원본이 변경
const fruits_18 = ['Apple', 'Banana', 'Cherry']
console.log(fruits_18.unshift('Durian'))
console.log(fruits_18.length)
console.log(fruits_18)

const numbers_16 = [17, 20, 199, 5, 48]
console.log(numbers_16.unshift(9, 10, 11))
console.log(numbers_16.length)
console.log(numbers_16)

// 배열 메소드의 콜백은 항상 현재 반복의 인덱스를 얻을 수 있다
const numbers_17 = [17, 20, 199, 5, 48]
numbers_17.every((num, idx) => {
  console.log(num, idx)
  return true
})
numbers_17.filter((num, idx) => {
  console.log(num, idx)
  return true
})
numbers_17.reduce((acc, cur, idx) => {
  console.log(acc, cur, idx)
  return acc + cur
}, 0)


// Array.isArray() - 배열 데이터인지 확인
const fruits_19 = ['Apple', 'Banana', 'Cherry']
const arrayLikeFruits = {
  0: 'Apple',
  1: 'Banana',
  2: 'Cherry',
  length: 3
}

console.log(arrayLikeFruits[2])
console.log(Array.isArray(fruits_19))
console.log(Array.isArray(arrayLikeFruits))


// Array.from() - 유사 배열(Array-like)을 실제 배열로 반환
const fruits_20 = ['Apple', 'Banana', 'Cherry']
const arrayLikeFruits_2 = {
  0: 'Apple',
  1: 'Banana',
  2: 'Cherry',
  length: 3
}
console.log(fruits_20)
console.log(arrayLikeFruits_2)

console.log(fruits_20[1])
console.log(arrayLikeFruits_2[1])

console.log(fruits_20.length)
console.log(arrayLikeFruits_2.length)

console.log(Array.isArray(fruits_20))
console.log(Array.isArray(arrayLikeFruits_2))

console.log(fruits_20.map(fruit => fruit.toUpperCase()))
console.log(Array.from(arrayLikeFruits_2).map(fruit => fruit.toUpperCase()))

// 04-12 - 표준 내장 객체 - Object
console.log('** 04-12 - 표준 내장 객체 - Object **')

// Object(객체) 표준 내장 객체(Built-in Object)
// Object.assign(대상, 출처1, 출처2, ...)
// - 하나 이상의 '출처 객체(Source)'로 부터 '대상 객체(Target)'로 속성을 복사하고 대상 객체를 반환

const target = { a: 1, b: 2 }
const source1 = { b: 3, c: 4 }
const source2 = { c: 5, d: 6 }
const result = Object.assign(target, source1, source2)
// const result = Object.assign({}, target, source1, source2)
console.log(target)
console.log(result)

const userA = {
  name: 'Neo',
  age: 85
}
const userB = {
  age: 22,
  email: 'thesecon@gmail.com',
  isValid: true
}
// const neo = Object.assign(userA, userB)
const neo = Object.assign({}, userA, userB)
console.log(neo)
console.log(userA)

// Object.keys() - 객체의 모든 키를 배열로 반환
// 순서는 보장하지 않는다

const user_11 = {
  name: 'Neo',
  age: 85,
  email: 'neo@heropy.dev',
  isValid: true
}
const keys = Object.keys(user_11)
console.log(keys)

keys.forEach(key => {
  const el = document.createElement('div')
  el.innerHTML = `<strong>${key}</strong>: ${user_11[key]}`
  document.body.append(el)
})

// Object.values() - 객체의 모든 값을 배열로 만든다
// 순서는 보장되지않는다

const user_12 = {
  name: 'Neo',
  age: 85,
  email: 'neo@heropy.dev',
  isValid: true
}
const values = Object.values(user_12)
console.log(values)

// 04-13 - 표준 내장 객체 - JSON
console.log('** 04-13 - 표준 내장 객체 - JSON **')

// JSON(JavaScript Object Notation)은 데이터 전달을 위한 표준 데이터 포맷
// 문자, 숫자, 불리, null, 객체, 배열만 사용가능!
// 문자는 큰 따옴표만 사용가능!
// 후행 쉼표사용 불가!
// '.json' 확장자의 파일 사용가능

const user_13 = {
  name: 'Neo',
  age: 85,
  isValid: true,
  emails: ['neo@heropy.dev', 'thesecon@gmail.com'], // 후행 쉼표
}
const json = JSON.stringify(user_13)
console.log(json)
console.log(JSON.parse(json))
// const json = {
//   "name": "Neo",
//   "age": 85,
//   "isValid": true,
//   "emails": ["neo@heropy.dev", "thesecon@gmail.com"]
// }

fetch('https://api.heropy.dev/v0/users', {
  method: 'POST',
  body: JSON.stringify(user_13)
})
  .then(res => res.json())
  // .then(res => console.log(res))

// 05-01 - DOM - Node와 Element
console.log('** 05-01 - DOM - Node와 Element **')

// DOM(Document Object Model)이란, HTML 문서를 객체로 표현한 것으로,
// JS에서 HTML을 제어할 수 있게 해준다

// 노드(Node) - 요소, 텍스트, 주석 등의 각 구조를 의미한다
// 요소(Element) - 노드의 하위 객체로 요소를 의미한다

const parentEl = document.querySelector('.parent')

// 요소의 모든 자식 노드를 확인한다
console.log(parentEl.childNodes)

// 요소의 모든 자식 요소를 확인한다
console.log(parentEl.children)

// 05-02 - DOM - 검색과 탐색
console.log('** 05-02 - DOM - 검색과 탐색 **')

// document.querySelector(선택자) - 선태갖로 검색한 요소를 하나 반환
// 만약 검색 결과가 없으면, 'null'을 반환

const el = document.querySelector('.parent')
console.log(el)

console.log(el.querySelector('div'))

// document.querySelectorAll(선택자)
// - 선택자로 검색한 모든 요소를 NodeList 객체로 반환

const nodeList = document.querySelectorAll('.child')
console.log(nodeList)
console.log(nodeList[0], nodeList[1], nodeList[2])

// NodeList 객체는 유사배열이며 '.forEach()' 메소드는 내장되어 있지만,
// 기타 배열 메소드는 사용할 수 없다
nodeList.forEach((el, index) => console.log(index + 1, el))

// NodeList 객체는 'Array.from()' 메소드를 통해 배열로 반환할 수 있다.
const nodes = Array.from(nodeList)
const names = nodes.map(el => el.textContent)
console.log(names)

// document.getElementById(아이디)
// - HTML 'id' 속성(Attributes) 값으로 검색한 요소를 하나 반환
// 만약 검색 결과가 없으면, null을 반환

const idEl = document.getElementById('c1')
console.log(idEl)

const selEl = document.querySelector('#c1')
console.log(selEl)

// 노드.parentElement - 노드의 부모 요소를 반환

const el_2 = document.querySelector('.child')
console.log(el_2)
console.log(el_2.parentElement)

// 요소.previousElementSibling - 요소의 이전 형제 요소를 반환
// 요소.nextElementSibling - 요소의 다음 형제 요소를 반환

const el_3 = document.querySelector('.child')
console.log(el_3.previousElementSibling)
console.log(el_3.nextElementSibling)

// 요소.children - 요소의 모든 자식 요소를 반환
// 요소.firstElementChild - 요소의 첫 번째 자식 요소를 반환
// 요소.lastElementChild - 요소의 마지막 자식 요소를 반환

const el_4 = document.querySelector('.parent')
console.log(el_4.children)
console.log(el_4.children[el_4.children.length - 1])
console.log(el_4.firstElementChild)
console.log(el_4.lastElementChild)