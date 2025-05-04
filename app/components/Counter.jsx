'use client';

import { useState } from 'react';

const Counter = ({ users }) => {
    const [count, setCount] = useState(0);
    console.log(users);
    return (
        <div className="flex justify-center items-center gap-4">
            <div
                className="border p-1 cursor-pointer"
                onClick={() => {
                    setCount((prev) => prev + 1);
                }}
            >
                <button>+</button>
            </div>
            <div className="border p-1 cursor-pointer">
                <div>{count}</div>
            </div>
            <div
                className="border p-1"
                onClick={() => {
                    setCount((prev) => prev - 1);
                }}
            >
                <button>-</button>
            </div>
        </div>
    );
};

export default Counter;
