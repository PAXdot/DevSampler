"use client";

import React from "react";


export default function Example() {
    return (
        <div className="flex flex-wrap justify-center gap-12">
            <div className="relative">
                <img className="h-20 w-20 rounded"
                    src="https://cdn.21st.dev/assets/mirror/20/202f28d9108e13136b34315b1c8dac25678f9dc5cb2f004c713d930cf285e62c.jpg"
                    alt="userImage1" />
                <div className="absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500">
                    <p className="text-xs text-white">09</p>
                </div>
            </div>
            <div className="relative">
                <img className="h-20 w-20 rounded"
                    src="https://cdn.21st.dev/assets/mirror/ce/ce1536afd37b7d4e6c9ffbee65b35e6897d4467ab07efc9b6466b6c1744654f9.jpg"
                    alt="userImage2" />
                <div className="absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500">
                    <p className="text-xs text-white">09</p>
                </div>
            </div>
            <div className="relative">
                <img className="h-20 w-20 rounded"
                    src="https://cdn.21st.dev/assets/mirror/a5/a5daca55ac260069e7a61ad9126a5913eec37ca03cb8cbc29cc37f8d13d2d2dd.jpg"
                    alt="userImage3" />
                <div className="absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500">
                    <p className="text-xs text-white">09</p>
                </div>
            </div>
        </div>
    );
};