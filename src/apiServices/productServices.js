import * as request from '~/utils/request';

export const product = async (page, sz) => {
    try {
        const res = await request.get('products', {
            params: {
                page,
                sz,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error)
    }
};

export const productTotal = async () => {
    try {
        const res = await request.get('products/total');
        return res.data;
    } catch (error) {
        console.log(error)
    }
};
