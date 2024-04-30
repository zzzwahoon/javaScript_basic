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