import React from "react";

export default function Example() {
    return (
        <div className="flex flex-col items-center w-80 bg-white text-gray-500 p-4 md:p-6 rounded-lg border border-gray-500/30 text-sm">
            <div className="flex items-center justify-center relative w-full gap-2 pb-3">
                <img className="absolute -top-12" src="https://cdn.21st.dev/assets/mirror/58/5856586494eaabc87e8fcca6ff3312bfb4d89429a51469174e853d19965eb5aa.svg" alt="cookieImage2" />
                <h2 className="text-gray-800 text-xl font-medium text-left w-full pt-3">Your privacy is important to us</h2>
            </div>
            <p>We process your personal information to measure and improve our sites and services, to assist our campaigns and to provide personalised content. For more information see our <a href="#" className="font-medium underline">Privacy Policy.</a></p>
            <div className="flex items-center justify-between mt-6 gap-3 w-full">
                <a className="underline" href="#">More Option</a>
                <button type="button" className="bg-indigo-600 px-6 py-2 rounded text-white font-medium active:scale-95 transition">Accept</button>
            </div>
        </div>
    );
};