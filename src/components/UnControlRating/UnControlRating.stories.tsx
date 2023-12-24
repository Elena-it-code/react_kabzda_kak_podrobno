import {action} from '@storybook/addon-actions';

import {UnControlRating, RatingValueType} from './UnControlRating';
import React from "react";

/*const meta: Meta<typeof Accordion> = {
    component: Accordion,
};*/

//именно так и экспортируем наши компоненты по default
export default {
    title: 'UnControlRating',
    component: UnControlRating
}
const callback = action('rating changed inside component')

export const EmptyUnControlRating =()=><UnControlRating defaultValue={0} onChange={callback } />
export const UnControlRating1 =()=><UnControlRating defaultValue={1} onChange={callback } />
export const UnControlRating2 =()=><UnControlRating defaultValue={2} onChange={callback } />
export const UnControlRating3 =()=><UnControlRating defaultValue={3} onChange={callback } />
export const UnControlRating4 =()=><UnControlRating defaultValue={4} onChange={callback } />
export const UnControlRating5 =()=><UnControlRating defaultValue={5} onChange={callback } />

