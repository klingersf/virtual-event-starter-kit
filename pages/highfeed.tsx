import HighFeed from "@components/highfeed";
import {NextApiRequest, NextApiResponse} from "next";

export default function HighFeedPage({ stockData }: any) {

  return (
      <>
        <HighFeed stockData={stockData}/>
      </>
  );
}

async function stockName(stock: string, type: string) {
    if (type == "br") {
        const uriStockBase = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stock}&apikey=myapikey`;
        const resName = await fetch(uriStockBase);
        const dataName = await resName.json();
        return dataName['bestMatches'][0]['2. name'];
    }

    const uriStockBase = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stock}&apikey=myapikey`;
    const resName = await fetch(uriStockBase);
    const dataName = await resName.json();
    return dataName['Name'];
}

export const getServerSideProps: (request: NextApiRequest, response: NextApiResponse) => Promise<{
    props: { stockData: any }
}> = async (request: NextApiRequest, response: NextApiResponse) => {

    const stock = request.query?.stock?.toString() || null;
    const highValue = request.query?.h?.toString() || 0;

    const text: string = highValue == 0 ? "histórica" : "de 52 semanas";
    const type: any = !(stock?.indexOf(".sa") <= -1) ? "br" : "us";
    const imgID: string = type == "br" ? stock.substr(0, 4) : stock;

    const uri = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=myapikey`;
    const res = await fetch(uri);
    const quoteData = await res.json();

    const code: string = type == "br"
        ? quoteData['Global Quote']['01. symbol'].substr(0, 5)
        : quoteData['Global Quote']['01. symbol'];
    const price: number = (parseFloat((+quoteData['Global Quote']['05. price']).toFixed(2)))
    const high: string = (parseFloat((+quoteData['Global Quote']['03. high']).toFixed(2)))

    const name: string = await stockName(stock, type);

    const data = {
        type,
        imgID,
        name,
        code,
        high,
        price,
        text
    }

    return {
        props: {
            // marketDay,
            // market,
            stockData: data
        } // will be passed to the page component as props -
    };
};
