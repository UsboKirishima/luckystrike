import colors from 'colors';
colors.enable();

export function getTime() {
    let data = new Date();
    let hour = data.getHours();
    let minute = data.getMinutes();
    let second = data.getSeconds();

    return `${hour}:${minute}:${second}`.magenta;
} 