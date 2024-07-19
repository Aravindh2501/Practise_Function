import React, { useState } from 'react';
import accordinData from '../Data/Data.json';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import './Accordin.scss';

const Accordin = () => {
    const accordin = accordinData;
    const [activeIndex, setActiveIndex] = useState(null);

    const handleExpand = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="Accordin">
            <h1 style={{ margin: "1rem" }}>Accordin</h1>
            {accordin.map((item, index) => (
                <div key={index}>
                    <div
                        className="accordin_top"
                        onClick={() => handleExpand(index)}
                    >
                        <h6>{item.question}</h6>
                        {activeIndex === index ? (
                            <IoIosArrowUp />
                        ) : (
                            <IoIosArrowDown />
                        )}
                    </div>
                    <div
                        className={`accordin_content ${activeIndex === index ? '' : 'closed'
                            }`}
                    >
                        <p>{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordin;
