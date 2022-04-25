/**
 *  Role based admin & basic normal user role
 */
const ROLE = {
  ADMIN: 'admin',
  BASIC: 'basic'
}

/***
 * users & product table structure here...!!
 */
module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: 'Arun', role: ROLE.ADMIN },
    { id: 2, name: 'Sachin', role: ROLE.BASIC },
    { id: 3, name: 'Ganesh', role: ROLE.BASIC },
    { id: 4, name: 'Vishwajeet', role: ROLE.BASIC },
    { id: 5, name: 'Priyesh', role: ROLE.BASIC }
  ],
  products: [
    { id: 1, name: "Nike", userId: 1 },
    { id: 2, name: "Puma", userId: 2 },
    { id: 3, name: "Adidas", userId: 3 },
    { id: 4, name: "Puma", userId: 4},
    { id: 5, name: "Adidas", userId: 5 }
  ]
}