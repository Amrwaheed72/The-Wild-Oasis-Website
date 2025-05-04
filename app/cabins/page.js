import Counter from "../components/Counter"

const page = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
    return (
        <div>
            <h1>
                cabins page
            </h1>
            {data.map((user) => (
                <div key={user.id}>
                    <div>
                        <h2 className="text-red-500">{user.name}</h2>
                        <p className="text-blue-500">{user.email}</p>
                    </div>
                </div>
            ))}
            <Counter users={data} />
        </div>
    )
}

export default page