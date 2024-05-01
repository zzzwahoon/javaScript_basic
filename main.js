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