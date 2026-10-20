import { CurrentLocation, LabelSwitch, LabelText, LocationImg, SearchBox, SearchIcon, SwitchInput, Toggle, TopBarContainer, TopInput, Trace } from "./styled";
import searchIcon from '@assets/search.svg'
import locatIcon from '@assets/location.svg'
import { useState, type KeyboardEvent } from "react";

type Props = {
    isDark: boolean,
    onToggle: (a: boolean) => void,
    setLocation: (location: string) => void,
}

function TopBar({isDark, onToggle, setLocation}: Props) {

    const [input, setInput] = useState('');

    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>){
        if(e.key === 'Enter') setLocation(input);
    }

    return(
        <>
            <TopBarContainer>
                <LabelSwitch>
                    <SwitchInput type = 'checkbox' 
                    checked={isDark}
                    onChange={(e) => onToggle(e.target.checked)}/>
                    <Trace $checked={isDark}>
                        <Toggle $checked={isDark}/>
                    </Trace>
                    <LabelText>Dark Mode</LabelText>
                </LabelSwitch>
                <SearchBox>
                    <SearchIcon src={searchIcon}/>
                    <TopInput placeholder='Введите название города...'
                    value={input}
                    onChange={(e) => (setInput(e.target.value))}
                    onKeyDown={handleKeyDown}
                    />
                </SearchBox>
                <CurrentLocation>
                    <LocationImg src={locatIcon}/>
                    Current Location
                </CurrentLocation>
            </TopBarContainer>
        </>
    )
}

export default TopBar;