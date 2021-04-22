import {useRouter} from "next/router";
import styles from './shortlinks.module.css';
import {any} from "prop-types";

export default function ShortLinks() {

    return (
        <div>
            <ul className={styles.mylinks}>
                <li><a href={'https://2handyn.vercel.app/ibov/up'}>UP - ibov</a></li>
                <li><a href={'https://2handyn.vercel.app/ibov/down'}>DOWN - ibov</a></li>
                <li><a href={'https://2handyn.vercel.app/sp500/up'}>UP - sp500</a></li>
                <li><a href={'https://2handyn.vercel.app/sp500/down'}>DOWN - sp500</a></li>
            </ul>
        </div>
    );
}
