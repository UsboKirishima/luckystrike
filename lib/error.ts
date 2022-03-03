import { getTime } from './../utils/getTime';
import colors from 'colors';

colors.enable();

export const error = async ({ body }: { body: string; }) => {
    console.log(`[${require('ms')(Date.UTC)}]` + `ERROR`.bold.bgYellow.red + ` ${body}`.red);
} 