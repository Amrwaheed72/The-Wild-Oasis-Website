"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

const Filter = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathName = usePathname()

    const activeFilter = searchParams.get('capacity') ?? 'all'

    const handleFilter = (filter) => {
        const params = new URLSearchParams(searchParams)
        params.set('capacity', filter)
        router.replace(`${pathName}?${params.toString()}`, { scroll: false })
    }
    return (
        <div className="border-primary-800 border-1 flex">
            <FilterButton activeFilter={activeFilter} filterValue="all" handleFilter={handleFilter}>All Cabins</FilterButton>
            <FilterButton activeFilter={activeFilter} filterValue="small" handleFilter={handleFilter}>1&mdash;3 guests</FilterButton>
            <FilterButton activeFilter={activeFilter} filterValue="medium" handleFilter={handleFilter}>4&mdash;7 guests</FilterButton>
            <FilterButton activeFilter={activeFilter} filterValue="large" handleFilter={handleFilter}>8&mdash;12 guests</FilterButton>
        </div>
    )
}

export const FilterButton = ({ handleFilter, filterValue, children, activeFilter }) => {
    return (
        <button className={`px-5 py-2 hover:bg-primary-700 cursor-pointer ${activeFilter == filterValue ? "bg-primary-700" : ""}`} onClick={() => handleFilter(filterValue)}>{children}</button>
    )
}

export default Filter