import styles from './highfeed.module.css';

export default function HighFeed() {
    const type = "stock/";
    const stockId = 2732;
    return (
        <>
            <div className={styles.base}>
                <img src={`/assets/marketfeed/us.png`}/>
            </div>
            <div className={styles.stocksCode}>V</div>
            <div className={styles.price}>232,95</div>
            <div className={styles.company}>Visa inc</div>
            <div className={styles.msg}>atingiu a máxima histórica</div>
            <div className={styles.logo}>
                {/*<img className={styles.logoimg} src={`https://cdn-statusinvest.azureedge.net/img/company/${type}cover/${stockId}.jpg`}/>*/}
                <img className={styles.logoimg} src={`https://d187qskirji7ti.cloudfront.net/companies/wide_images/000/000/114/1463069452_large.png`}/>
            </div>
        </>
    );
}