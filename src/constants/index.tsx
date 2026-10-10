import sunny from '@assets/clear.svg'
import clouds from '@assets/clouds.svg'
import rain from '@assets/rain.svg'

export function iconFunction(str: string): string {
    let icon;
    switch(str){
        case 'sun':
            icon = sunny;
            break;
        case 'rain':
            icon = rain;
            break;
        case 'cloudy':
            icon = clouds;
            break;
        default:
            icon = clouds;
    }
    return icon;
}