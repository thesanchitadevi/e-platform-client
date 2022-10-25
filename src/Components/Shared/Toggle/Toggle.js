import React from 'react';
import "./Toggle.css"

const Toggle = () => {
    return (
        <div>
            <div className="">
                <label
                    htmlFor="toogleA"
                    className="flex items-center cursor-pointer"
                >
                    <div className="mr-3 text-gray-700 font-medium">
                        Light!
                    </div>
                    <div className="relative">
                        <input id="toogleA" type="checkbox" className="sr-only" />
                      <div className="w-8 h-3 bg-gray-400 rounded-full shadow-inner"></div>
                        <div className="dot absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                    </div>
                    <div className="ml-3 text-gray-700 font-medium">
                        Dark!
                    </div>
                </label>

            </div>
        </div>
    );
};

export default Toggle;