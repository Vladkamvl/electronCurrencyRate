import React from 'react';
import {useSelector} from "react-redux";
import CoursesSelect from "../components/CoursesSelect";
import countries from "../config/countries";

function getKeyByValue(object, value){
    return Object.keys(object).find(key => object[key] === value);
}

function HomePage() {

    const {courses, symbols, isCoursesLoaded, isSymbolsLoaded} = useSelector(({courses, symbols}) => ({
        courses: courses.items,
        symbols: symbols.items,
        isCoursesLoaded: courses.isLoaded,
        isSymbolsLoaded: symbols.isLoaded,
    }));

    const [selectedCourse, setSelectedCourse] = React.useState("");
    const onCoursesSelectChange = (event) => {
        setSelectedCourse(event.target.value);
    }

    return (
        <div className="home-page">
            {isCoursesLoaded && isSymbolsLoaded ?
                <CoursesSelect onChange={onCoursesSelectChange}/> :
                <p>Идёт загрузка...</p>
            }
            {
                selectedCourse &&
                <div className="result">
                    <img src={`https://flagcdn.com/60x45/${getKeyByValue(countries, selectedCourse).toLowerCase()}.png`} alt="flag"/>
                    <p>{symbols[selectedCourse]} <span>{courses[selectedCourse]}</span></p>
                </div>
            }


        </div>
    );
}

export default HomePage