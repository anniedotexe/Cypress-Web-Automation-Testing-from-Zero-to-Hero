// node lesson9.js - run this command in terminal to run code

// 1. Class and Methods

// import { DemigodDetails } from "../helpers/printHelper.js"
// var details = new DemigodDetails()

// Can import the instance created and exported in helper file instead of the class
import { details } from "../helpers/printHelper.js"

details.printGodlyParent("Poseidon")
details.printWeapon("Trident")
