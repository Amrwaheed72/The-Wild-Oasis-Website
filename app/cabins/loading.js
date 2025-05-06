import Spinner from "../_components/Spinner"

const loading = () => {
    return (
        <div className="grid justify-center items-center">
            <Spinner />
            <p className="text-primary-300">Loading the cabins.....</p>
        </div>
    )
}

export default loading