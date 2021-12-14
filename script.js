// // function say(name, callback) {
// //     setTimeout(function () {
// //         callback(name.toUpperCase())
// //     }, 3000)
// // }

// // const message = (name) => {
// //     console.log(`You are awesome ${name}`)
// // }

// // say("John", message)
// // console.log("hello")
// const jokePromises = [
//     getJoke(),
//     getJoke(),
//     getJoke(),
//     getJoke(),
//     getJoke()
// ]

async function getJoke() {
    const res = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                "Accept": "application/json"
            }   
        })

        const data = await res.json()

        if (data.status == 200) {
            return data.joke
        }
        //     reject(new Error("Could not retrieve joke"))
        // })
        throw new Error("Could not retrieve joke")
}

// const jokePromises = [
//     getJoke()
// ]

// async function asyncGetJoke() {
//     const result = await getJoke()
//     console.log(result)
    
//     // getJoke().then(result => console.log(result))  this is same as above
// }

// console.log("logging return from getJoke: ", getJoke())

document.querySelector('button').addEventListener('click', async event => {
    try {
        document.querySelector('#joke').innerText = await getJoke()
    }
    catch (err) {
        alert(err.message)
    }
})





// getJoke()
//     .then(joke => {
//         jokes.push(joke)
//         return getJoke()
//     })
//     .then(joke => {
//         jokes.push(joke)
//         console.log(jokes)
//     })
// Promise.all(jokePromises)
// .then(jokes => console.log(jokes))
//     .catch((err) => console.log(err))


// console.log("Waiting for promises ...")

// const people = [
//     {
//         name: "K. West",
//         nickname: "Ye",
//         dob: "1977-06-08"
//     },
//     {
//         name: "A. Grahdam",
//         nickname: "Drake",
//         dob: "1977-06-08"
//     }
// ]

// const json = JSON.stringify(people)
// console.log(json)
// console.log("break")
// console.log(people)

// const json = '[{"name":"K. West","nickname":"Ye","dob":"1977-06-08"},{"name":"A. Grahdam","nickname":"Drake","dob":"1977-06-08"}]'

// const obj = JSON.parse(json)
// console.log(obj[0].name)