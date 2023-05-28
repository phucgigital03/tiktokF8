import styles from './Home.module.scss';
import clsx from 'clsx';

function Home() {
    return (
        <div className={clsx(styles.mainContainer)}>
            <h1>Home</h1>
        </div>
    );
}

export default Home;
