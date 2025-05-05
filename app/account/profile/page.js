import SelectCountry from "@/app/_components/SelectCountry"
import bg from '../../../public/bg.png'
import Image from "next/image";

export const metadata = {
    title: "Guest profile",
}

const page = () => {
    const countryFlag = "pt.jpg";
    const nationality = "portugal";
    const disabledField = 'px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
    return (
        // <div>
        //     <Image src={bg} alt="bg" placeholder="blur" className="blur-2xl" fill />
        //     <div className="max-w-5xl mx-auto relative">

        //         <h2 className="font-bold text-2xl text-accent-900 mb-4 ">
        //             Update your guest profile
        //         </h2>
        //         <p className="text-lg mb-8 text-primary-800 font-semibold">
        //             Providing the following information will make your check-in process
        //             faster and smoother. See you soon!
        //         </p>

        //         <form className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col rounded-3xl shadow-sm shadow-primary-200">
        //             <div className="space-y-2">
        //                 <label>Full name</label>
        //                 <input
        //                     disabled
        //                     className={disabledField}
        //                 />
        //             </div>

        //             <div className="space-y-2">
        //                 <label>Email address</label>
        //                 <input
        //                     disabled
        //                     className={disabledField}
        //                 />
        //             </div>

        //             <div className="space-y-2">
        //                 <div className="flex items-center justify-between">
        //                     <label htmlFor="nationality">Where are you from?</label>
        //                     <img
        //                         src={countryFlag}
        //                         alt="Country flag"
        //                         className="h-5 rounded-sm"
        //                     />
        //                 </div>

        //                 <SelectCountry
        //                     name="nationality"
        //                     id="nationality"
        //                     className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        //                     defaultCountry={nationality}
        //                 />
        //             </div>

        //             <div className="space-y-2">
        //                 <label htmlFor="nationalID">National ID number</label>
        //                 <input
        //                     name="nationalID"
        //                     className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        //                 />
        //             </div>

        //             <div className="flex justify-end items-center gap-6">
        //                 <button className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed rounded-xl disabled:bg-gray-500 disabled:text-gray-300">
        //                     Update profile
        //                 </button>
        //             </div>
        //         </form>
        //     </div>
        // </div>

        <div>
            <h2 className="font-semibold text-2xl text-accent-400 mb-4">
                Update your guest profile
            </h2>

            <p className="text-lg mb-8 text-primary-200">
                Providing the following information will make your check-in process
                faster and smoother. See you soon!
            </p>

            <form className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col rounded-3xl shadow-sm shadow-primary-200">
                <div className="space-y-2">
                    <label>Full name</label>
                    <input
                        disabled
                        className={disabledField}
                    />
                </div>

                <div className="space-y-2">
                    <label>Email address</label>
                    <input
                        disabled
                        className={disabledField}
                    />
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <label htmlFor="nationality">Where are you from?</label>
                        <img
                            src={countryFlag}
                            alt="Country flag"
                            className="h-5 rounded-sm"
                        />
                    </div>

                    <SelectCountry
                        name="nationality"
                        id="nationality"
                        className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                        defaultCountry={nationality}
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="nationalID">National ID number</label>
                    <input
                        name="nationalID"
                        className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                    />
                </div>

                <div className="flex justify-end items-center gap-6">
                    <button className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
                        Update profile
                    </button>
                </div>
            </form>
        </div>
    )
}

export default page