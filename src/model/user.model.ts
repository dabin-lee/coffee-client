// 모델 목적 파일
// 객체형태 정의
export interface IUser {
  name?: string | undefined
  email?: string
}

// 인터페이스를 따라서 만들어야해
// IUser interface를 따라 만듦
// export class User implements IUser {
//   name: string | undefined
//   email: string = ''
// }

// 클래스에서 사용할 때
// export class User implements IUser {
//   name?: string
//   email?: string

//   constructor() {
//     this.name = 'good'
//     this.email = 'good@gmail.com'
//   }
// }
// const goodUser = new User()

// 변수의 데이터 타입을 정의할 때 쓸 수 있음
// export const goodUser1: IUser = {
//   name: 'good1',
//   email: 'good1@gmail.com',
// }

// // 함수, 매개변수에 타입을 정의
// export const goodFunc = (newUser: IUser) => {
//   // fa 탭
//   // faa (매개변수커서)
//   console.log(newUser)
// }

// goodFunc({
//   name: '다빈',
//   email: 'good',
// })

// export function goodFunc2(newUser: IUser) {
//   console.log('hi')
// }

export const goodFunc = (name: string, email: string): IUser => {
  // fa 탭
  // faa (매개변수커서)
  // console.log(newUser)
  return {
    name,
    email,
  }
}

// goodFunc정의한 값
// const user = goodFunc('good', 'goodGamil.com')

/*
객체 = 인스턴스 = 붕어빵
클래스 = 붕어빵 틀
인터페이스 = 붕어빵 틀을 만드는 설계도면
*/

/**
 *
 *
 */