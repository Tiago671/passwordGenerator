
const passwordInput = document.getElementById("password")
const lengthSlider = document.getElementById("length")
const lengthDisplay = document.getElementById("length-value")
const upperCaseBox = document.getElementById("uppercase")
const lowerCaseBox = document.querySelector("lowercase")
const symbolBox = document.querySelector("symbols")
const numericBox = document.querySelector("numerics")
const generatorButton = document.querySelector("#generator-btn")
const CopyButton= document.querySelector("#copy-btn")
const strengthText = document.querySelector(".strength-container p")

let alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const UpperCase = alfa.toUpperCase
const Lowercase = alfa.toLowerCase
const numeric = "0123456789"
const symbol = "[]{}!@#$%¨&*()|_+=;:/?><,.-~^"


