// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let reducer = (accumulator, currentValue) => accumulator + currentValue
        return (this.sides).reduce(reducer)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        return ((side1 + side2 >= side3) && (side1 + side3 >= side2) && (side2 + side3 >= side1))
        // this.sides.forEach((side1, index1) => {
        //     // console.log(side1, index1)
        //     this.sides.forEach((side2, index2) => {
        //         // console.log(side2, index2)
        //         this.sides.forEach((side3, index3) => {
        //             if (index1 != index2 && index1 != index3) {
        //                 if (index1 + index2 < index3) {
        //                     return false
        //                 }
        //             }
        //         })
        //     })
        // })
        // return true
    }
}

class Square extends Polygon {
    get isValid() {
        let sqSides = this.sides
        let first = sqSides[0]
        let second = sqSides[1]
        let third = sqSides[2]
        let fourth = sqSides[3]
        return ((first == second && second == third && third == fourth))
        // sqSides.forEach(side => {
        //     if (side != first) {
        //         console.log(side, first)
        //         return false
        //     }
        // })
        // true
    }

    get area() {
        let mySide = this.sides[0]
        return mySide * mySide
    }
}