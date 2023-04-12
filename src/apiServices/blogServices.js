import * as request from '~/utils/request';

export const blog = async () => {
    try {
        const res = await request.get('blogs');
        return res.data;
    } catch (error) {
        console.log(error)
    }
};