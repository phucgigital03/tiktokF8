import Header from '~/components/Layouts/components/Header';

function HeaderOnly({ children }) {
    return (
        <div className="headerOnly">
            <Header />
            {children}
        </div>
    );
}

export default HeaderOnly;
