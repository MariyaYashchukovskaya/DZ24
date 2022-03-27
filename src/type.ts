// Задача 1

// class Circle {
//   diameter:number
//   color:string=''
//   constructor (diameter:number, color:string) {
//     this.diameter = diameter
//     this.color = color
//     this.init()
//   }

//   init () {
//     this.render()
//   }

//   template () {
//     return `
//     <div style="
//     width: ${this.diameter}px;
//     height: ${this.diameter}px;
//     border-radius: 50%;
//     background-color: ${this.color}">
//       <h2>S=${(this.diameter * this.diameter * 3.14) / 4}</h2>
//     </div >
//     `
//   }

//   render () {
//     const template:any = this.template()
//     document.body.innerHTML = document.body.innerHTML + template
//   }
// }

// const circle = new Circle(200, 'red')
// const circle2 = new Circle(300, 'pink')
// console.log(circle, circle2)

// Задача 2

class Shape {
  color:string=''
  width:number
  constructor (color:string, width:number) {
    this.color = color
    this.width = width
    this.init()
  }

  init () {
    this.render()
  }

  template () {
    return `
      <div style="width: ${this.width}px; height: ${this.width}px; background-color: ${this.color}"></div>
      `
  }

  render () {
    const template = this.template()
    document.body.innerHTML = document.body.innerHTML + template
  }
}

class Square extends Shape {
  constructor (color:string = '', width:number) {
    super(color, width)
  }
}

const square1 = new Square('red', 50)

square1.render()

class Circle extends Shape {
  constructor (color:string = '', width:number) {
    super(color, width)
  }

  template () {
    return `
      <div style="width: ${this.width}px; height: ${this.width}px; background-color: ${this.color}; border-radius: 50%"></div>
      `
  }
}

const circle1 = new Circle('green', 150)
circle1.render()

class Rectangle extends Square {
  height:number
  constructor (color:string = '', width:number, height:number) {
    super(color, width)
    this.height = height
  }

  template () {
    return `
      <div style="width: ${this.width}px; height: ${this.height}px; background-color: ${this.color}"></div>
      `
  }
}
const rectangle1 = new Rectangle('blue', 250, 100)
rectangle1.render()

// const fiName: string = 'Mawa'
// console.log(fiName)

// const user1: [string, number, string] = ['Mawa', 5284848, 'OK']
// console.log(user1)

// function filterFor (arr: number[], a: number): number[] {
//   const newArr = arr.filter((item: number): boolean => item > a)
//   return newArr
// }

// console.log(filterFor([3, 5, 8, 10], 5))
