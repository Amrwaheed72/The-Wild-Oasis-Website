"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { FilterButton } from "./Filter"

const PriceFilter = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathName = usePathname()
    console.log(pathName)
    const activeFilter = searchParams.get('price') ?? 'all'
    const handleFilter = async (filter) => {
        const params = new URLSearchParams(searchParams)
        params.set('price', filter)
        router.replace(`${pathName}?${params.toString()}`, { scroll: false })
    }
    return (
        <div className="flex border border-primary-800">
            <FilterButton handleFilter={handleFilter} filterValue='all' activeFilter={activeFilter} className="px-5 py-2 hover:bg-primary-700 cursor-pointer">All</FilterButton>
            <FilterButton handleFilter={handleFilter} filterValue='cheap' activeFilter={activeFilter} className="px-5 py-2 hover:bg-primary-700 cursor-pointer">cheap</FilterButton>
            <FilterButton handleFilter={handleFilter} filterValue='moderate' activeFilter={activeFilter} className="px-5 py-2 hover:bg-primary-700 cursor-pointer">moderate</FilterButton>
            <FilterButton handleFilter={handleFilter} filterValue='expensive' activeFilter={activeFilter} className="px-5 py-2 hover:bg-primary-700 cursor-pointer">expensive</FilterButton>
        </div>
    )
}

export default PriceFilter