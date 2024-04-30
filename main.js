// string
// 문자(string)은 따옴표를 사용합니다.
const s1 = 'Neo'
const s2 = '123'

// 템플릿 리터럴(Literal)은 백틱을 사용하며, ${} 안에 데이터를 보간(Interpolation)합니다.
const s3 = `My name is ${s1}, I'm ${s2}.`

console.log(s3)

// number
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
// 'null' 데이터는,
// 존재하지 않는(nothing), 비어 있는(empty), 알 수 없는(unknown) 값을 명시적으로 나타낸다.
let age = null;

const h1El = document.querySelector('h1');
console.log(h1El)
console.log(h1El.textContent)

// undefined
// 'undefined' 데이터는, '값이 할당되지 않는 상태'를 나타낼 때 사용한다.
// 변수는 선언했지만, 값을 할당하지 않았다면 해당 변수에 'undefined'가 임시적으로 할당된다

let age_2;
console.log(age_2)

function fn() {
  // return 123
}
console.log(fn())

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