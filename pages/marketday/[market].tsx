import ListTopStocks from "@components/listtopstocks";
import TagsMarket from "@components/tagsmarket";
import {GetServerSideProps} from "next";

export default function DayMarket({ stocksData, market }: any) {

    if (stocksData.error) {
        return (
            <>
                <h1>404 - {stocksData.error}</h1>
            </>
        );
    }
    const {date, up, down} = stocksData
    return (
        <>
            <ListTopStocks topType={"altas"} stockList={up} market={market} />
            <ListTopStocks topType={"baixas"} stockList={down} market={market} />
            <TagsMarket />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const market = params?.market?.toString() || null;
    // const uri = `http://localhost:3000/api/stocks/${market}`;
    const uri = `https://2handyn.vercel.app/api/stocks/${market}`;

    const res = await fetch(uri);
    const data = await res.json();

    return {
        props: {
            market,
            stocksData: data
        } // will be passed to the page component as props
    };
};