import Link from "next/link"

const page = () => {
    return (
        <div>
            <div>
                cabins page
            </div>
            <Link href="/about" >navigate to about page</Link>
        </div>
    )
}

export default page