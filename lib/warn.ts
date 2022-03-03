import colors from 'colors';

colors.enable();

export const warn = async ({ body }: { body: string; }) => {
    console.log(`WARN`.underline.red.bgYellow);
    console.log(` ${body}`.red)
} 