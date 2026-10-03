import TopBar from "@components/TopBar";
import WeatherGridBox from "@src/components/WeatherGridBox";
import { useState } from "react";
import { weatherMock } from "@src/mock/WeatherMocks";

function MainPage () {
    const[isDark, setIsDark] = useState(false);

    return(
        <>
            <TopBar isDark={isDark} onToggle={setIsDark} />
            <WeatherGridBox weather={weatherMock}/>
        </>
    )
}

export default MainPage;