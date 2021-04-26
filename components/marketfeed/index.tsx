import styles from './marketfeed.module.css';

function listCodes(stocks: any, position: any) {
    const {top, left} = position
    let listStocks = [];
    for (let i = 0; i < 5; i++) {
        listStocks.push(<div key={i} className={styles.stocksCode} style={{top:top[i], left:left[i]}}>{stocks[i].code}</div>);
    }
    return listStocks;
}

function valueBR(value: any) {
    const valueBR =  value.toLocaleString('pt-BR', { minimumFractionDigits: 2})
    return valueBR;
}

const upPosition = {
    top: [400, 510, 595, 670, 760],
    left: [390, 170, 300, 100, 210],
    market: [20, 4],
    variation: [200, 100]
}

const downPosition = {
    top: [180, 260, 390, 425, 510],
    left: [660, 520, 720, 440, 800],
    market: [570, 4],
    variation: [780, 230]
}

export default function MarketFeed({stockList, market, marketDay}: any) {
    const {marketValue, marketChange, marketVariation} = marketDay
    const signal = marketVariation >= 0 ? "+" : "" ;
    const position = marketVariation >= 0 ? upPosition : downPosition ;
    const variationImg = marketVariation >= 0 ? "up" : "down" ;
    // const market =
    return (
        <>
            <div className={styles.base}>
                <img src={`/assets/marketfeed/${variationImg}1.png`}/>
            </div>
            <div className={styles.market} style={{top:position.market[0], left:position.market[1]}}>{market}</div>
            <div className={styles.variation}
                 style={{top:position.variation[0], left:position.variation[1]}}>{signal}{valueBR(marketVariation)}%</div>
            <div className={styles.price}>{valueBR(marketValue)}</div>
            <div className={styles.change}>{signal}{valueBR(marketChange)}</div>
            {listCodes(stockList, position)}
        </>
    );
}