import React from 'react';
import {useSelector} from "react-redux";

function CoursesSelect({onChange}) {

    const {courses, symbols} = useSelector(({courses, symbols}) => ({
        courses: courses.items,
        symbols: symbols.items,
    }));

    return (
        <select
            className={"courses-select"}
            onChange={event => onChange(event)}
            defaultValue={""}
        >
            <option
                value={""}
                disabled
            >Select country</option>
            {
                Object.keys(courses).map(key => (
                    <option value={key} key={key}>{symbols[key]}</option>
                ))
            }
        </select>
    );
}

export default CoursesSelect;