console.log("work")

const mess3 = "fizz"
const mess5 = "buzz"


for (let i = 1; i <= 100; i++) {
    if (i % 3 + i % 5 === 0) {
        console.log(i + "" + mess3 + mess5);
    } else if (i % 5 === 0) {
        console.log(i + "" + mess5);

    } else if (i % 3 === 0) {
        console.log(i + "" + mess3)
    } else {
        console.log(i)
    }
}











