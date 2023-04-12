import * as request from '~/utils/request';

export const category = async () => {
    try {
        const res = await request.get('categories');
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
