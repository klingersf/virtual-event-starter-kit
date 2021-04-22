import {GetServerSideProps, GetStaticProps} from 'next';
import IbovImage from '@components/ibov';


export default function IbovOnlyPage({ data }: any) {
    return <IbovImage ibovData={data}/>;
}

export const getServerSideProps: GetServerSideProps = async () => {
    // const uri = "https://statusinvest.com.br/acao/getaltabaixa?IndiceCode=ibovespa";
    const uri = "https://statusinvest.com.br/stock/getaltabaixa?IndiceCode=sp-500";
    const res = await fetch(uri);
    const data = await res.json();
    // console.log(data);

    return {
        props: {
            data
        } // will be passed to the page component as props
    };
};
