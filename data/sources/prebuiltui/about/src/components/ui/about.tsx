"use client";

import React from "react";

export default function Example() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <h1 className="text-3xl font-semibold text-center mx-auto">About our apps</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
                A visual collection of our most recent works - each piece crafted with intention, emotion and style.
            </p>
            <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-8 md:px-0 pt-16">
                <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://cdn.21st.dev/assets/mirror/99/9965686eecab7f62d67cdeb971749f96fd1bd2395a8c1d5965ebcdf24a882295.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Lightning-Fast Performance</h3>
                        <p className="text-sm text-slate-500">Built with speed — minimal load times and optimized.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://cdn.21st.dev/assets/mirror/e6/e6ae7bc0582b7764a9f4b2ad201136b98a073eb7f29ad053f58fc10ead42743b.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Beautifully Designed Components</h3>
                        <p className="text-sm text-slate-500">Modern, pixel-perfect UI components ready for any project.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://cdn.21st.dev/assets/mirror/fe/fe8657cf2ccc55a283b08c3e8f958c5eb61015603732bc0d24c2fbdff5b69bd9.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Plug-and-Play Integration</h3>
                        <p className="text-sm text-slate-500">Simple setup with support for React, Next.js and Tailwind css.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://cdn.21st.dev/assets/mirror/61/61139b7d0487e6f3149c98896b67e4baa3cd9c6f0831d17de8aee518ddbe323a.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Clear & Comprehensive</h3>
                        <p className="text-sm text-slate-500">Get started fast with usage examples, live previews and code.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://cdn.21st.dev/assets/mirror/91/9151f213d94a6b04c8761f679d4c1436f48f1ec1db3d31c230d9b5e77b4fc3f3.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Fully Customizable</h3>
                        <p className="text-sm text-slate-500">Easily adapt styles, colors and layout to match your brand or product.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://cdn.21st.dev/assets/mirror/99/9945b01cb416157e089a8b7fe5d58959a871319e6434a1e7099fd6a81352a452.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Accessibility First</h3>
                        <p className="text-sm text-slate-500">Built with WCAG standards in mind to ensure inclusive user experiences.</p>
                    </div>
                </div>
            </div>
        </>
    );
};