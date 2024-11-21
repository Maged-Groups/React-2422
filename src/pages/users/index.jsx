const api = 'https://dummyjson.com/users';

const { users } = await fetch(api)
    .then(res => res.json())
    .then(data => data)

console.log(users)

export default function Users() {
    return <div>All Users</div>
}