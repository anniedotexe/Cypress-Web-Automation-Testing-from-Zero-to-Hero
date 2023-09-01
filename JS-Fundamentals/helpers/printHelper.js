// Need to export for ability to use it outside of this file

// 1. Function Export
export function printAge(age) {
    console.log("Age: " + age)
}

// 2. Class and Methods
export class MythologyDetails {

    printGodlyParent(godlyParent) {
        console.log(godlyParent)
    }

    /**
     * This method will print the godly parent's weapon
     * @param {string} weapon 
     */
    printWeapon(weapon) {
        console.log(weapon)
    }

}

// Export here so we don't have to create it outside this file
export const details = new DemigodDetails()