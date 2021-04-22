import {useRouter} from "next/router";
import styles from './cad.module.css';
import {any} from "prop-types";
import UpArrow from "@components/uparrow";
import DownArrow from "@components/downarrow";

function getRandomInt(min: any, max: any) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function StoryCad({ storyCad }: any) {

    const { query } = useRouter();
    const arrowUP = query.username != "up" ? false : true;
    let variation;
    if (arrowUP) {
        variation = <UpArrow />;
    } else {
        variation = <DownArrow />;
    }
    const quotation = parseFloat(storyCad.CAD_BRL.toFixed(2));
    const formatCoin = quotation.toLocaleString('pt-BR', { minimumFractionDigits: 2});
    const randomIMG = getRandomInt(1, 34);

    return (
        <>
        <div className={styles.base}>
            <img src={`/assets/cadstory/${randomIMG}.png`}/>
        </div>
        <div className={styles.quotation}>{formatCoin}</div>
            {variation}
        </>
    );
}
