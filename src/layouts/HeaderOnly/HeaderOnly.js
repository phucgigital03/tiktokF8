import Header from '~/layouts/components/Header';

function HeaderOnly({ children }) {
    return (
        <div className="headerOnly">
            <Header />
            {children}
        </div>
    );
}

export default HeaderOnly;
