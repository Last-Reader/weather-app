import sunny from '@assets/clear.svg'
import clouds from '@assets/clouds.svg'
import rain from '@assets/rain.svg'
import snow from '@assets/snow.svg'

export function iconFunction(str: string): string {
    let icon;
    switch(str){
        case 'sun':
            icon = sunny;
            break;
        case 'rain':
            icon = rain;
            break;
        case 'cloud':
            icon = clouds;
            break;
        case 'snow':
            icon = snow;
            break;
        default:
            icon = clouds;
    }
    return icon;
}