'use client'

import { createContext, useContext, useState } from "react";

const ReservationsContext = createContext()

const initialState = { from: undefined, to: undefined }
const ReservationsProvider = ({ children }) => {
    const [range, setRange] = useState(initialState);
    const resetRange = () => {
        setRange(initialState)
    }
    return <ReservationsContext.Provider value={{ range, setRange, resetRange }}>{children}</ReservationsContext.Provider>
}

const useReservations = () => {
    const context = useContext(ReservationsContext)
    if (context === undefined) throw new Error('context was used outside provider')
    return context
}

export { ReservationsProvider, useReservations }