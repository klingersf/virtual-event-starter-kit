import styles from './marketfeed.module.css';

function listCodes(stocks: any, type: string, market: string, top: number, right: number) {
    const typelist = type == "altas" ? "up" : "down";
    let listStocks = [];
    for (let i = 0; i < 5; i++) {
        listStocks.push(<li key={i}><a href={`https://2handyn.vercel.app/api/${market}/${typelist}`}>{stocks[i].resultPercentageValue} - {stocks[i].code} - {stocks[i].companyName}</a></li>);
    }
    return listStocks;
}

export default function MarketFeed({stockList, market, teste}: any) {
    console.log(teste);
    return (
        <>
            <div className={styles.base}>
                <img src={`/assets/marketfeed/up1.png`}/>
            </div>
            <div className={styles.market}>IBOV</div>
            <div className={styles.variation}>+0,97%</div>
            <div className={styles.price}>120.530,06</div>
            <div className={styles.change}>+1158,59</div>
            <div className={styles.stocksCode} style={{top:400, right:400}}>{teste}</div>
            <div className={styles.stocksCode} style={{top:510, right:600}}>DFGJ3</div>
            <div className={styles.stocksCode} style={{top:600, right:480}}>KHGY3</div>
            <div className={styles.stocksCode} style={{top:670, right:700}}>ORTE3</div>
            <div className={styles.stocksCode} style={{top:760, right:570}}>NSRT3</div>
        </>
    );
}