import { CurrentLocation, LabelSwitch, LabelText, SearchBox, SearchIcon, SwitchInput, Toggle, TopBarContainer, TopInput, Trace } from "./styled";
import searchIcon from '@assets/search.svg'

type Props = {
    isDark: boolean,
    onToggle: (a: boolean) => void
}

function TopBar({isDark, onToggle}: Props) {
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
                    <TopInput placeholder='Search for your preffered city...'/>
                </SearchBox>
                <CurrentLocation />
            </TopBarContainer>
        </>
    )
}

export default TopBar;