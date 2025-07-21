import Spinner from "@/app/_components/Spinner"

const loading = () => {
    return (
        <>
            <Spinner />
            <button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">Submit</button>
        </>
    )
}

export default loading