// const x = "two"
// const y = 5

function adder(x,y) {
    return new Promise((resolve, reject) => {
        let answer = x + y

        if (isNaN(answer)) {
            reject("Inputs must be numeric")
        }
        // setTimeout(() => resolve(answer), 2000)
        resolve(answer)
    })
    }


adder(10,10)
    .then(data => {
        return adder(data, 30)
    })
    .then((answer) => {
        console.log(`The answer is ${answer}`)
    })
    .catch(err => console.log(`Error: ${err}`))
    

console.log(`Hello + ${45**45}`)

