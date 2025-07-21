import { getCabins } from "../_lib/data-service"
import CabinCard from "./CabinCard"

const CabinList = async ({ filter, priceFilter }) => {
    const cabins = await getCabins();
    if (!cabins.length) return null;

    let displayedCabins = cabins;

    if (filter === 'small') {
        displayedCabins = displayedCabins.filter(cabin => cabin.maxCapacity <= 3);
    } else if (filter === 'medium') {
        displayedCabins = displayedCabins.filter(cabin => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7);
    } else if (filter === 'large') {
        displayedCabins = displayedCabins.filter(cabin => cabin.maxCapacity >= 8);
    }

    if (priceFilter === 'cheap') {
        displayedCabins = displayedCabins.filter(cabin => cabin.regularPrice <= 400);
    } else if (priceFilter === 'moderate') {
        displayedCabins = displayedCabins.filter(cabin => cabin.regularPrice >= 500 && cabin.regularPrice <= 900);
    } else if (priceFilter === 'expensive') {
        displayedCabins = displayedCabins.filter(cabin => cabin.regularPrice >= 1000);
    }

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
            {displayedCabins.map((cabin) => (
                <CabinCard cabin={cabin} key={cabin.id} />
            ))}
        </div>
    );
};


export default CabinList