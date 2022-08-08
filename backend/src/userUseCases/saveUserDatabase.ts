import fs from 'fs'

export interface UserProps {
  id: string,
  name: string,
  email: string,
  password: string,
}

export function saveUser (data: UserProps): void {
  fs.promises.readFile('./users.json', 'utf-8')
    .then((user) => {
      const userCollection = JSON.parse(user);

      userCollection.push(data)

      fs.promises.writeFile('./users.json', JSON.stringify(userCollection, null, 2))
    })
}