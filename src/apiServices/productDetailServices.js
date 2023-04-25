import * as request from '~/utils/request';

export const productDetail = async (id) => {
    try {
        const res = await request.get(`products/${id}`);
        return res.data;
    } catch (error) {
        console.log(error)
    }
};