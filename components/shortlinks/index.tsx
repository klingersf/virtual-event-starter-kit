import {useRouter} from "next/router";
import styles from './shortlinks.module.css';
import {any} from "prop-types";

export default function ShortLinks() {

    return (
        <div>
            <ul className={styles.mylinks}>
                <li><a href={'https://2handyn.vercel.app/api/ibov/up'}>UP - ibov</a></li>
                <li><a href={'https://2handyn.vercel.app/api/ibov/down'}>DOWN - ibov</a></li>
                <li><a href={'https://2handyn.vercel.app/api/sp500/up'}>UP - sp500</a></li>
                <li><a href={'https://2handyn.vercel.app/api/sp500/down'}>DOWN - sp500</a></li>
                <li><a href={'https://2handyn.vercel.app/api/storycad/up'}>CAD - up</a></li>
                <li><a href={'https://2handyn.vercel.app/api/storycad/down'}>CAD - down</a></li>
            </ul>
        </div>
    );
}
