const express = require("express")
const app = express() //express() bhannale initialize gareko ho, or call gareko bhaninxa

// Alternative in single line
// const app = require("express")() // () bhannale initialize gareko ho

console.log ("Hello World")

const a = 10
const b = 20
const sum = a+b
console.log(sum)

// Variable example
const name = "Simant"
console.log(name)

// Array example
const names = ["Ram", "Sita"]
console.log(names[0])

// Object example
const dataofperson = {
    name : "Rahul",
    age : 20,
    profession : "student"
}

console.log("His profession is: " + dataofperson.profession)

app.get("/", (req,res)=>{
    // res.send("Hello. This is a new page.")
    res.json({
        simant : "I am a student",
        status : "single"
    })
})

app.get("/about", (req,res)=>{
    res.json({
        message1: "This is about page"
    })
})

app.listen(3000, (req, res)=>{
    console.log("Nodejs has started at port 3000")
})

