import styles from './highfeed.module.css';

export default function HighFeed({ stockData }: any) {

    const {
        type,
        imgID,
        name,
        code,
        high,
        price,
        text,
        low,
        trend
    } = stockData

    const trendImg = trend == "up"
        ? type
        : `${type}${trend}`;

    const stockValue = trend == "up"
        ? high
        : low;



    const linkImg = type == "br"
        ? `https://files.bastter.com/acao/${imgID}.gif`
        : `https://bastter-images.b-cdn.net/stock/${imgID}.png`;


    return (
        <>
            <div className={styles.base}>
                <img src={`/assets/marketfeed/${trendImg}.png`}/>
            </div>
            <div className={styles.stocksCode}>{code}</div>
            <div className={styles.price}>{stockValue.toLocaleString('pt-BR', { minimumFractionDigits: 2})}</div>
            <div className={styles.company}>{name}</div>
            <div className={styles.msg}>atingiu a {text}</div>
            <div className={styles.logo}>
                <img className={styles.logoimg} src={linkImg}/>
            </div>
        </>
    );
}