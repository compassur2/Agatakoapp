import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'buntuhenry@gmail.com',
    password: bcrypt.hashSync('1234567', 10),
    isAdmin: true,
  },
  { 
    name: 'Janvier Nshimiyimana',
    email: 'Njanvier@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Isaac Tumwine',
    email: 'isaactumwine@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users