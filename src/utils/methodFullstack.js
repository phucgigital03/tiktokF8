import { fullStackRequest } from './httpRequest';

// api fullstack
const get = async (path, option = {}) => {
    try {
        const res = await fullStackRequest.get(path, option);
        return res.data;
    } catch (err) {
        console.log(err);
        if (err.response.data.status_code === 404) {
            return {
                code: 404,
                message: '404 not found , may be url wrong',
            };
        }
    }
};

export { get };
