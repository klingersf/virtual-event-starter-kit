import styles from './listtopstocks.module.css';

function listFive(stocks: any, type: string, market: string) {
    const typelist = type == "altas" ? "up" : "down";
    let listStocks = [];
    for (let i = 0; i < 5; i++) {
        listStocks.push(<li key={i}><a href={`https://2handyn.vercel.app/api/${market}/${typelist}`}>{stocks[i].resultPercentageValue} - {stocks[i].code} - {stocks[i].companyName}</a></li>);
    }
    return listStocks;
}

export default function ListTopStocks({topType, stockList, market}: any) {
    return (
        <>
            <h1><a href={`https://2handyn.vercel.app/api/market/${market}`}>Maiores {topType} do dia:</a></h1>
            <ul className={styles.listStocks}>
                {listFive(stockList, topType, market)}
            </ul>
        </>
    );
}