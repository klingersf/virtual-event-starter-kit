import styles from './shortlinks.module.css';
import FormHigh from "@components/formhigh";

export default function ShortLinks() {

    return (
        <div>
            <div>
                <ul className={styles.mylinks}>
                    <li><a href={'https://2handyn.vercel.app/marketday/ibov'}>IBOV</a></li>
                    <li><a href={'https://2handyn.vercel.app/marketday/sp500'}>SP500</a></li>
                    <li><a href={'https://2handyn.vercel.app/api/ibov/up'}>UP - ibov</a></li>
                    <li><a href={'https://2handyn.vercel.app/api/ibov/down'}>DOWN - ibov</a></li>
                    <li><a href={'https://2handyn.vercel.app/api/sp500/up'}>UP - sp500</a></li>
                    <li><a href={'https://2handyn.vercel.app/api/sp500/down'}>DOWN - sp500</a></li>
                    <li><a href={'https://2handyn.vercel.app/api/storycad/up'}>CAD - up</a></li>
                    <li><a href={'https://2handyn.vercel.app/api/storycad/down'}>CAD - down</a></li>
                    <li><a href={'https://2handyn.vercel.app/api/highfeed/'}>high</a></li>
                    <li><a href={'https://2handyn.vercel.app/api/52feed/'}>feed</a></li>
                </ul>
            </div>
            <div className={styles.centerlinks}>
                <FormHigh typehigh={"highfeed"}/>
            </div>
            <div className={styles.centerlinks}>
                <FormHigh typehigh={"52feed"}/>
            </div>
            <div className={styles.centerlinks}>
                <FormHigh typehigh={"lowfeed"}/>
            </div>
            <div className={styles.centerlinks}>
                <FormHigh typehigh={"low52feed"}/>
            </div>
        </div>

    );
}
