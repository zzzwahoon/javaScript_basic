// 08-01 - 클래스 - 개요
console.log('**** 08-01 - 클래스 - 개요 ****')

// 객체 리터럴
console.log('** 객체 리터럴 **')
const neo = {
  name: 'Neo',
  age: 22,
  getBrithYear() {
    const year = new Date().getFullYear()
    return year - this.age
  }
}
const evan = {
  name: 'Evan',
  age: 7
}
const lewis = {
  name: 'Lewis',
  age: 72
}

console.log(neo.getBrithYear())
console.log(neo.getBrithYear.call(evan))
console.log(neo.getBrithYear.call(lewis))
// console.log(neo.getBrithYear === evan.getBrithYear)

// 프로토타입
console.log('** 프로토타입 **')
function User(name, age) {
  this.name = name
  this.age = age
}
User.prototype.getBrithYear_2 = function () {
  const year = new Date().getFullYear()
  return year - this.age
}

const neo_2 = new User('Neo', 22)
const evan_2 = new User('Evan', 7)
const lewis_2 = new User('Lewis', 72)

console.log(neo_2)
console.log(evan_2)
console.log(lewis_2)
console.log(neo_2.getBrithYear_2())
console.log(evan_2.getBrithYear_2())
console.log(lewis_2.getBrithYear_2())
console.log(neo_2.getBrithYear_2 === evan_2.getBrithYear_2)

// 클래스
console.log('** 클래스 **')
class User_2 {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  getBrithYear_3() {
    const year = new Date().getFullYear()
    return year - this.age
  }
}


const neo_3 = new User_2('Neo', 22)
const evan_3 = new User_2('Evan', 7)
const lewis_3 = new User_2('Lewis', 72)

console.log(neo_3)
console.log(evan_3)
console.log(lewis_3)
console.log(neo_3.getBrithYear_3())
console.log(evan_3.getBrithYear_3())
console.log(lewis_3.getBrithYear_3())
console.log(neo_3.getBrithYear_3 === evan_3.getBrithYear_3)

// 08-02 - 클래스 - Getter & Setter
console.log('**** 08-02 - 클래스 - Getter & Setter ****')

class User_3 {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
    this.fullName = `${first} ${last}`
  }
}

const neo_4 = new User_3('Neo', 'Park')

// get
console.log(neo_4.fullName)
// set
neo_4.fullName = 'Lewis Park'

console.log(neo_4)

// full name 값을 지정할때 firstName, lastName 자동으로 적용
class User_4 {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  set fullName(value) {
    const names = value.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
  }
}

const neo_5 = new User_4('Neo', 'Park')

// get
console.log(neo_5.fullName)
// set
neo_5.fullName = 'Lewis Park'

console.log(neo_5)