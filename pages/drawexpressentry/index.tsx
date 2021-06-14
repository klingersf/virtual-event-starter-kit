import DrawExpressEntry from "@components/drawExpressEntry";
import {NextApiRequest, NextApiResponse} from "next";

export default function DrawExp() {

    const backgroundImage = `https://images.unsplash.com/photo-1519832979-6fa011b87667?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1335&q=80`;
    // const backgroundImage = `/assets/draw/cad_bg1.jpg`;

    const dateRound =  `June 10, 2021 at 12:29:11 UTC`;
    const programTitle =  `canadian experience class`;
    const roundPoints = `3368`;
    const invitations = `6000`;
    const tieBrake = `April 28, 2021 at 05:45:14 UTC`;

    return (
        <div>
            {/*<DrawExpressEntry DrawExpressEntry={backgroundImage, dateRound, programTitle, roundPoints. invitations, tieBrake}/>*/}
            <DrawExpressEntry
                backgroundImage={backgroundImage}
                dateRound={dateRound}
                programTitle={programTitle}
                roundPoints={roundPoints}
                invitations={invitations}
                tieBrake={tieBrake}
            />
    </div>
);
}

// export const getServerSideProps: (request: NextApiRequest, response: NextApiResponse) => Promise<{
//     props: { stockData: any }
// }> = async (request: NextApiRequest, response: NextApiResponse) => {
//
//     const stock = request.query?.stock?.toString() || "";
//     const trend = request.query?.trend?.toString() || "up";
//     const highValue = request.query?.h?.toString() || 0;
//
//     const trendText = trend == "up" ? "máxima" : "mínima";
//
//     const text: string = highValue == 0 ? `${trendText} histórica` : `${trendText} de 52 semanas`;
//     const type: any = (stock.indexOf(".sa") > -1) ? "br" : "us";
//     let imgID: string = type == "br" ? stock.substr(0, 4) : stock;
//     imgID = imgID.indexOf("-") > -1 ? imgID.replace('-', '.') : imgID ;
//
//     const uri = `https://query2.finance.yahoo.com/v7/finance/quote?formatted=true&lang=pt-BR&region=BR&symbols=${stock}`;
//     const res = await fetch(uri);
//     const quoteData = await res.json();
//     const yfData = quoteData['quoteResponse']['result'][0];
//
//     let code: string = type == "br"
//         ? yfData.symbol.substr(0, 5)
//         : yfData.symbol;
//     code = (stock.indexOf("11.sa") > -1) ? yfData.symbol.substr(0, 6) : code;
//     const price: number = (parseFloat((+yfData.regularMarketPrice.raw).toFixed(2)))
//     const high: number = (parseFloat((+yfData.fiftyTwoWeekHigh.raw).toFixed(2)))
//     const low: number = (parseFloat((+yfData.fiftyTwoWeekLow.raw).toFixed(2)))
//     const name: string = yfData.longName;
//
//     const data = {
//         type,
//         imgID,
//         name,
//         code,
//         high,
//         price,
//         text,
//         low,
//         trend
//     }
//
//     return {
//         props: {
//             stockData: data
//         } // will be passed to the page component as props -
//     };
// };
