import FlipSentence from "../ui/flip-sentence";
import Image from "next/image";
import pfp from "../../../../public/pfp.jpeg";
import { BadgeCheck } from "lucide-react";
export function ProfileView() {
    return (
        <div className=" flex w-full h-32 gap-2.5 pl-4 ">



            <div className="absolute top-47 left-1/2 w-px h-[126px] -translate-x-[130px] lg:-translate-x-[330px] bg-gray-200 dark:bg-gray-800 -z-50" />


            <div className="absolute top-[47px] left-1/2 w-[393px] lg:w-[793px] -translate-x-[130px] lg:-translate-x-[330px] h-px bg-transparent -z-50" />

            <div className="absolute top-78.5 left-1/2 w-[393px] lg:w-[793px] -translate-x-[130px] lg:-translate-x-[330px] -translate-y-[32px] h-px bg-gray-200 dark:bg-gray-800 -z-50" />

            <div className="absolute top-78.5 left-1/2 w-[393px] lg:w-[793px] -translate-x-[130px] lg:-translate-x-[330px] -translate-y-[60px] h-px bg-gray-200 dark:bg-gray-800 -z-50" />



            <div className="relative flex">
                <div className="rounded-full border border-gray-200 dark:border-gray-800 w-30 h-30" />
                <Image
                    src={pfp}
                    alt="meri image"
                    className=" -top-1 -right-1  absolute w-28 my-2 h-28 mx-2 object-cover rounded-full "
                />
            </div>
            <div className="flex flex-col justify-end gap-3 pl-3">
                <div className="text-[10px] font-mono opacity-15 -mx-1.5">text-2xl text-zinc-300 font-medium
                </div>
                <div className="gap-2 mb-2">
                    <h2 className="text-xl font-bold -mt-2 -mx-1.5 inline-flex">Akshit Sachdeva
                        <span className="mt-0.5 mx-1">
                            <BadgeCheck
                                className="w-6 h-6 fill-blue-500 text-white dark:text-black "
                                strokeWidth={1.5}
                            />
                        </span>
                    </h2>
                    <FlipSentence />
                </div>
            </div>
        </div>
    );
}