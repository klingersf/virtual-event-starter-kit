import MarketFeed from "@components/marketfeed";
import {GetServerSideProps, NextApiRequest, NextApiResponse} from "next";
import scrapMarket from "@lib/scrap-market-local";


export default function MarketFeedPage({ stocksData, market, teste }: any) {
  const {up, down} = stocksData
  // console.log(stocksData)

  return (
      <>
        <MarketFeed stockList={up} market={market} teste={teste} />;
      </>
  );
}

export const getServerSideProps: GetServerSideProps = async (request: NextApiRequest, response: NextApiResponse) => {

  const market = request.query?.market?.toString() || null;
  const test = request.query?.test?.toString() || null;
  // const uri = `http://localhost:3000/api/stocks/${market}`;
  const uri = `https://2handyn.vercel.app/api/stocks/${market}`;

  const res = await fetch(uri);
  const data = await res.json();

  const scrap = await scrapMarket();
  // const scrap = await scrapMarketTest();
  console.log(scrap)


  return {
    props: {
      teste: test,
      market,
      stocksData: data
    } // will be passed to the page component as props
  };
};