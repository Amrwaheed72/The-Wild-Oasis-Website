import { Button } from "@/app/_components/UpdateProfileForm";
import { updateReservationAction } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export const Page = async ({ params }) => {
    const amr = await params
    const reservationId = amr.bookingId
    const booking = await getBooking(reservationId)
    const cabin = await getCabin(booking.cabinId)
    const maxCapacity = cabin.maxCapacity;

    return (
        <div>
            <h2 className="font-semibold text-2xl text-accent-400 mb-7">
                Edit Reservation #{reservationId}
            </h2>

            <form action={updateReservationAction} className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
                <div className="space-y-2">
                    <label htmlFor="numGuests">How many guests?</label>
                    <select
                        defaultValue={booking.numGuests}
                        name="numGuests"
                        id="numGuests"
                        className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                        required
                    >
                        <option value="" key="">
                            Select number of guests...
                        </option>
                        {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
                            <option value={x} key={x}>
                                {x} {x === 1 ? "guest" : "guests"}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="space-y-2">
                    <input type="hidden" name="bookingId" value={booking.id} />
                    <label htmlFor="observations">
                        Anything we should know about your stay?
                    </label>
                    <textarea
                        defaultValue={booking.observations}
                        name="observations"
                        className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                    />
                </div>

                <div className="flex justify-end items-center gap-6">
                    <Button runningState="Updating..." originalState="Update reservation" style=" cursor-pointer bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300" />
                </div>
            </form>
        </div>
    );
}

export default Page