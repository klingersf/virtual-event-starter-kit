import DrawExpressEntry from "@components/drawExpressEntry";
import {NextApiRequest, NextApiResponse} from "next";

interface DrawData {
    backgroundImage: string,
    draw: number,
    dateRound: string,
    programTitle?: string,
    roundPoints: string,
    invitations: string,
    tieBrake: string
}

export default function DrawExp({drawData}: { drawData: DrawData }) {

    const {
        draw,
        backgroundImage,
        dateRound,
        programTitle,
        roundPoints,
        invitations,
        tieBrake
    } = drawData

    return (
        <div>
            <DrawExpressEntry
                draw={draw}
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

export const getServerSideProps: (request: NextApiRequest, response: NextApiResponse) => Promise<{
    props: { drawData: any }
}> = async (request: NextApiRequest, response: NextApiResponse) => {

    const draw = request.query?.draw?.toString() || 0;

    const uri = `https://2handyn.vercel.app/api/expressentry/getdraw/${draw}`;
    const res = await fetch(uri);
    const respDrawData = await res.json();

    const drawData = {
        backgroundImage: `https://images.unsplash.com/photo-1519832979-6fa011b87667?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1335&q=80`,
        ...respDrawData
    }

    return {
        props: {
            drawData
        } // will be passed to the page component as props -
    };
};
