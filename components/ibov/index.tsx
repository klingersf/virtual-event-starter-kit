import {useRouter} from "next/router";
import styles from './ibov.module.css';
import {any} from "prop-types";

export default function IbovImage({ ibovData }: any) {
    const { query } = useRouter();
    const up = ibovData[0];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const down = ibovData.filter(isDown);
    const stock = query.username != "up" ? down[0] : up;

    function isDown (value: any, index: any, array: any) {
        if (value.resultType == 1)
            return value;
    }

    return (
        <div className={ stock.resultType == 0 ? styles.bull : styles.bear}>
            <div className={styles.page}>
                {/*<h2>Teste_ {query.username}</h2>*/}
                <div className={styles.variation}>{stock.resultPercentageValue}<span>%</span></div>
                <div className={styles.stockname}>{stock.companyName}</div>
                <div className={stock.resultType == 0 ? styles.tickerBull : styles.tickerBear}>{stock.code}</div>
                <div className={stock.resultType == 0 ? styles.priceBull : styles.priceBear}>{stock.beforeMarket}</div>
            </div>
        </div>

    );
}
