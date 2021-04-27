import styles from './highfeed.module.css';

export default function HighFeed({ stockData }: any) {

    const {
        type,
        imgID,
        name,
        code,
        high,
        price,
        text
    } = stockData

    const linkImg = type == "br"
        ? `https://files.bastter.com/acao/${imgID}.gif`
        : `https://bastter-images.b-cdn.net/stock/${imgID}.png`;


    return (
        <>
            <div className={styles.base}>
                <img src={`/assets/marketfeed/${type}.png`}/>
            </div>
            <div className={styles.stocksCode}>{code}</div>
            <div className={styles.price}>{high.toLocaleString('pt-BR', { minimumFractionDigits: 2})}</div>
            <div className={styles.company}>{name}</div>
            <div className={styles.msg}>atingiu a máxima {text}</div>
            <div className={styles.logo}>
                <img className={styles.logoimg} src={linkImg}/>
            </div>
        </>
    );
}