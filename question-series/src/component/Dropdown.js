import React, { useEffect, useRef, useState } from 'react';
import "../App.css";

const Dropdown = ({dropdownOptions, defaultOption}) => {

    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultOption)
  
    const ref = useRef(null);

    const headingClick = () => {
        setOpen((prev) => !prev);
    }

    const clickHandle = (value) => {
        setSelectedOption(value);
        headingClick();
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target) && open) {
                setOpen(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    });

    return (
        <div className='dropdown' ref={ref}>
            <div className='dropdown-heading' onClick={headingClick}>
                {selectedOption}<i className='arrow-down'></i>
            </div>
            {open && (
                <div className='dropdown-list'>
                    <ul>
                        {dropdownOptions.allOptions.map((item) => (
                            <li key={item} onClick={() => clickHandle(item)}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Dropdown