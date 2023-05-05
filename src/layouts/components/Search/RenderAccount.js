import { memo } from 'react';
import AccountItem from '~/components/AccountItem';

function RenderAccount({ searchResult, handleHiddenSearch }) {
    console.log('re-render');
    return searchResult.map((item) => {
        return (
            <AccountItem
                handleHidden={handleHiddenSearch}
                key={item.id}
                item={item}
            />
        );
    });
}

export default memo(RenderAccount);
