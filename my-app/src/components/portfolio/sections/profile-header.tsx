
import { AppleHelloEnglishEffect } from "../ui/apple-hello-effect";

export function ProfileHeader() {
    return (
        <div className="flex items-center relative  w-full h-40  overflow-hidden">
            
            <div className="absolute inset-0 bg-dots " />
            <div className="flex relative z-10 w-full h-full justify-center items-center">
                <AppleHelloEnglishEffect></AppleHelloEnglishEffect>
            </div>
        </div>
    );
}