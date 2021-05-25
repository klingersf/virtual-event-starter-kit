import styles from './coinfeed.module.css';

export default function CoinFeed({ coinData }: any) {

    const {
        coin,
        symbol,
        currentPrice,
        changePercent,
        fiftyTwoWeekHigh,
        fiftyTwoWeekLow,
        scalePercentValue
    } = coinData

    const today = new Date().toLocaleDateString('pt-BR', {timeZone: 'UTC'});

    const scaleText = 865 - (490 * scalePercentValue);



    return (
        <>
            <div className={styles.base}>
                <img src={`/assets/marketfeed/${coin}feed.png`}/>
            </div>
            <div className={styles.currentPrice}>{currentPrice.fmt}</div>
            <div className={styles.dateText}>{changePercent.fmt} - {today}</div>
            <div className={styles.valueText}>valores em reais</div>
            <div className={styles.highPrice}>{fiftyTwoWeekHigh.fmt}</div>
            <div className={styles.lowPrice}>{fiftyTwoWeekLow.fmt}</div>
            <div className={styles.currentText} style={{top:scaleText}}>valor atual <span>---------------</span></div>
        </>
    );
}