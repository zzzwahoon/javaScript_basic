// 내보내기(export)

// 기본 내보내기(default export)
// - 이름이 필요하지 않다
// - 모듈에서 1번만 사용 가능
// export default 데이터
export default [1, 2, 3]

// 이름 내보내기(Named export)
// - 이름이 필수
// - 모듈에서 여러번 사용 가능
// export const 이름1 = 데이터1
// export const 이름2 = 데이터2
// export function 이름3() {}

// export const a_m = 1
// export const b_m = 'Banana'
// export function c_m() {}
// export class D_m {}
const a_m = 1
const b_m = 'Banana'
function c_m() {}
class D_m {}

export {
  a_m as apple,
  b_m as banana,
  c_m,
  D_m
}