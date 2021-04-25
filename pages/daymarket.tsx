import ListTopStocks from "@components/listtopstocks";
import TagsMarket from "@components/tagsmarket";

export default function DayMarket() {
    return (
        <>
            <ListTopStocks topType={"altas"} />
            <ListTopStocks topType={"baixas"}/>
            <TagsMarket />
        </>
    );
}
