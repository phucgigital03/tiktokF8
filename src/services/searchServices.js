import * as fullStack from '~/utils/methodFullstack';

const searchHeaderApi = async (q, type = 'less') => {
    const result = await fullStack.get(`/users/search`, {
        params: {
            q,
            type,
        },
    });
    if (result.code === 404) {
        return [];
    }
    return result.data;
};

export { searchHeaderApi };
