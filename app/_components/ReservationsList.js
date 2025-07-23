'use client'

import { useOptimistic } from "react"
import ReservationCard from "./ReservationCard"
import { deleteReservationAction } from "../_lib/actions"

const ReservationsList = ({ bookings }) => {

    const [optimisticBookings, optimisticDelete] = useOptimistic(bookings, (currentBookings, bookingId) => {
        return currentBookings.filter((booking) => booking.id !== bookingId)
    })
    const handleDelete = async (bookingId) => {
        optimisticDelete(bookingId)
        await deleteReservationAction(bookingId)
    }
    return (
        <ul className="space-y-6">
            {optimisticBookings.map((booking) => (
                <ReservationCard onDelete={handleDelete} booking={booking} key={booking.id} />
            ))}
        </ul>
    )
}

export default ReservationsList