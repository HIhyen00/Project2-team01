import React from "react";

export default function Header() {
    return (
        <div className="text-center py-6">
            <div className="text-sm text-gray-500">
                쉽고, 편리한
                <span className="text-blue-600"> 법률문서의 완성</span>
            </div>
            <div className="text-6xl text-gray-800 font-mono font-bold mt-3">
                Law-Co<span className="text-gray-800 font-mono font-bold">CODE</span>
            </div>
        </div>
    );
}
