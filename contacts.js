const NUM_CONTACTS = 100

const firstNames = ["john", "joe", "kevin", "kevin", "corey", "elan", "patrick", "james", "andres" ]

const lastNames = ["hill", "gray", "refermat", "roessler", "nance", "levy", "belon", "parker", "lopez"]


// generate a random number between min and max
const rand = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min

// generate a name
const generateName = () => `${firstNames[rand(firstNames.length - 1)]} ${lastNames[rand(lastNames.length - 1)]}`

// generate a phone number
const generatePhoneNumber = () => `${rand(999,100)}-${rand(999,100)}-${rand(9999,1000)}`

// create a personm
const createContact = () => ({name: generateName(), phone: generatePhoneNumber()})

// compare two contacts for alphabetizing
export const compareNames = (contact1, contact2) => {
    if (contact1.name > contact2.name) return 1
    else return -1 
  }

// add keys based on index, clone object and append key
const addKeys = (val, key) => ({key: key.toString(), ...val})

// create an array of length NUM_CONTACTS and assign keys
export default Array.from({length: NUM_CONTACTS}, createContact).map(addKeys)
