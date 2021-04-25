import {GetServerSideProps, GetStaticProps} from 'next';
import StoryCad from "@components/cad";


export default function StoryCadPage({ data }: any) {
    return <StoryCad storyCad={data}/>;
}

export const getServerSideProps: GetServerSideProps = async () => {
    const uri = "https://wpkcontabilidade.com/beta1/cad";
    const res = await fetch(uri);
    const data = await res.json();
    // console.log(data);

    return {
        props: {
            data
        } // will be passed to the page component as props
    };
};
