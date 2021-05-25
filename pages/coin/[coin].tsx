import {GetServerSideProps} from "next";
import CoinFeed from "@components/coinfeed";


export default function CoinDay({ coinData }: any) {

    const {coin, symbol, currentPrice, changePercent, fiftyTwoWeekHigh, fiftyTwoWeekLow, scalePercentValue} = coinData
    const today = new Date().toLocaleDateString('pt-BR', {timeZone: 'UTC'});

    return (
        <>
            <CoinFeed coinData={coinData} />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const coin = params?.coin?.toString() || "usd";

    const uri = `https://query2.finance.yahoo.com/v7/finance/quote?formatted=true&lang=pt-BR&region=BR&symbols=${coin}BRL=X`;
    const res = await fetch(uri);
    const data = await res.json();
    const baseData = data.quoteResponse.result[0]

    function scalePercent(highValue, lowValue, currentVaule) {
        const sizeScale = highValue-lowValue;
        const currentScale = currentVaule-lowValue;
        return currentScale/sizeScale
    }
    // console.log(baseData)

    const scalePercentValue = scalePercent(
        baseData.fiftyTwoWeekHigh.raw,
        baseData.fiftyTwoWeekLow.raw,
        baseData.regularMarketPrice.raw
    );

    return {
        props: {
            coinData: {
                coin,
                symbol: baseData.symbol,
                currentPrice: baseData.regularMarketPrice,
                changePercent: baseData.regularMarketChangePercent,
                fiftyTwoWeekHigh: baseData.fiftyTwoWeekHigh,
                fiftyTwoWeekLow: baseData.fiftyTwoWeekLow,
                scalePercentValue
            }
        }
    };
};