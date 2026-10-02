import TopBar from "@components/TopBar";
import CurrentTimeCity from "@src/components/CurrentTimeCity";
import { useState } from "react";

function MainPage () {
    const[isDark, setIsDark] = useState(false);

    return(
        <>
            <TopBar isDark={isDark} onToggle={setIsDark} />
            <CurrentTimeCity></CurrentTimeCity>
        </>
    )
}

export default MainPage;