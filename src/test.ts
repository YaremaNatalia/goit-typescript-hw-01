function add(num1: number, num2: number) {
  return num1 + num2;
}

add(3, 1);

//! ========ТИПІЗАЦІЯ=======
//! ------простих типів даних------
// let total: number = 100;
// let name: string = "Bob";
// let isActive: boolean = false;
// let empty: null = null;
// let undf: undefined = undefined;

//!------- складних типів даних -------

// const numbers: number[] = [1, 2, 4, 5, 6, 3, 0]; //!типізація МАСИВУ

//! типізація ОБЄКТА варіант 1
// const user: { name: string; age: number } = {
//   name: "Bob",
//   age: 12,
// };

// type UserName = { name: string; age: number; isActiv: boolean }; //! типізація ОБЄКТА варіант 2 через викоримтання команди type
// const userName: UserName = {
//   name: "Nat",
//   age: 12,
//   isActiv: false,
// };

// let age: any = 10; //! ANY може бути будь який тип даних
// age = "Bob";
// age = false;

// let name: unknown = 12; //! UNKNOWN будь чкий тип даних, але при застосуванні специфічних методів буде видавати помилку бо не розуміє який тип даних надійде
// name = "Bob";
// name.toFixed();

// type size = "small" | "medium" | "large"; //! UNION TYPE прописуємо кілька значень через  типізацію даних використовуючи знак | (або)
// const button: size = "large";
//! ENUM аналогічний запис, але більш конкретизований з меншою імовірністю помилки
// enum Sizes {
//   small = "small",
//   medium = "medium",
//   large = "large",
// }
// const button2: Sizes = Sizes.large;

//! Типізація ФУНКЦІЙ

// function add(num1: number, num2: number): string {
//   return `${num1}` + `${num2}`; //! типізація аргументів функції "num1: number", типізація return ": string"
// }
// console.log(add(2, 3));

// function add(num1: number, num2: number): void {
//   console.log(num1 + num2); //! типізація функції яка нічого не повертає використовуємо VOID
// }
// add(2, 3);

//! Типізація функції з обєктом
// type User = {
//   name: string;
// };
// function great(user: User): void {
//   console.log(`Hello ${user.name}`);
// }
//! Типізація функції, що повертає  обєкт
// type User = {
//   name: string;
//   age: number;
//   hobby: string;
// };

// function userConstructor(name: string, age: number, hobby: string): User {
//   return {
//     name,
//     age,
//     hobby,
//   }; //! типізували return функції через присвоєння попередньоствореного типу User
// }

// type Car = {
//   color: string;
//   price: number;
//   currency: string;
//   start: (color: string) => {}; //!типізація методу обєкта
// };

// const Car = {
//   color: "red",
//   price: 1000,
//   currency: "UAH",
//   start(color) {
//     console.log("Start" + this.color);
//   },
// };
//!типізація обєкта з необовязковими полями
// type User = {
//   name: string;
//   age: number;
//   role?: string; //!поле обєкту не обовязкове
// };

// const user: User = {
//   name: "bob",
//   age: 12,
// };

// const admin: User = {
//   name: "John",
//   age: 23,
//   role: "Admin",
// };

//! Всі типи винести на початок сторінки, а потім інший код
