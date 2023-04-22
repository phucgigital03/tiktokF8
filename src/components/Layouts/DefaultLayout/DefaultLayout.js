import Header from '~/components/Layouts/components/Header';
import SideBar from './SideBar/SideBar';

function DefaultLayout({ children }) {
    return (
        <div className="defaultLayout">
            <Header />
            <SideBar />
            {children}
        </div>
    );
}

export default DefaultLayout;
