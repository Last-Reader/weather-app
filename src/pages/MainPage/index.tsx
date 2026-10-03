import TopBar from "@components/TopBar";
import WeatherGridBox from "@src/components/WeatherGridBox";
import { useState } from "react";

function MainPage () {
    const[isDark, setIsDark] = useState(false);

    return(
        <>
            <TopBar isDark={isDark} onToggle={setIsDark} />
            <WeatherGridBox />
        </>
    )
}

export default MainPage;