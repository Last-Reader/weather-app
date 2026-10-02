import { CurrentLocation, LabelSwitch, LabelText, LocationImg, SearchBox, SearchIcon, SwitchInput, Toggle, TopBarContainer, TopInput, Trace } from "./styled";
import searchIcon from '@assets/search.svg'
import locatIcon from '@assets/location.svg'

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
                <CurrentLocation>
                    <LocationImg src={locatIcon}/>
                    Current Location
                </CurrentLocation>
            </TopBarContainer>
        </>
    )
}

export default TopBar;