import MarketFeed from "@components/marketfeed";
import {GetServerSideProps, NextApiRequest, NextApiResponse} from "next";


export default function MarketFeedPage({ stocksData, market, marketDay }: any) {
  const {up, down} = stocksData

  return (
      <>
        <MarketFeed stockList={up} market={market} marketDay={marketDay} />
      </>
  );
}

export const getServerSideProps: (request: NextApiRequest, response: NextApiResponse) => Promise<{
    props: { market: string | null; marketDay: any ; stocksData: any }
}> = async (request: NextApiRequest, response: NextApiResponse) => {

  const market = request.query?.market?.toString() || null;
  const test = request.query?.test?.toString() || 0;

  const uri = `https://2handyn.vercel.app/api/stocks/${market}`;
  const res = await fetch(uri);
  const data = await res.json();

  const index = market == "sp500" ? "indiceexterior" : "indice";
  const marketUri = market == "sp500" ? "sp-500" : market;
  const uriMarketDay = `https://statusinvest.com.br/${index}/tickerprice?ticker=${marketUri}&type=1`
  const resMarket = await fetch(uriMarketDay);
  const dataMarket = await resMarket.json()

  const prices = market == "sp500" ? dataMarket : dataMarket[0].prices;
  const marketValue = prices[prices.length-1].price;
  const marketChange = (parseFloat(((prices[prices.length-1].price - prices[prices.length-2].price)+(-test)).toFixed(2)));
  const marketVariation = (parseFloat(( marketChange / prices[prices.length-2].price * 100).toFixed(2)));

  const marketDay = {marketValue, marketChange, marketVariation }

  return {
    props: {
      marketDay,
      market,
      stocksData: data
    } // will be passed to the page component as props
  };
};