import TopBar from "@components/TopBar";
import { useState } from "react";

function MainPage () {
    const[isDark, setIsDark] = useState(false);

    return(
        <TopBar isDark={isDark} onToggle={setIsDark} />
    )
}

export default MainPage;