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

    const idGSX = "176X5hPlYLpKIXhwCFTxTHL4rBJlt4zYnDkmlQm_AelE";
    const urlCanadaImages = `https://apitest-next.vercel.app/api/gsx2json?id=${idGSX}&sheet=1&columns=false&cache=600`;
    const resImg = await fetch(urlCanadaImages);
    const canadaLinkImages = await resImg.json()

    const canadaImage = (dbCanadaImages: string[]) => {
        const dbSize = dbCanadaImages.length;
        const randomNumber = Math.floor(Math.random() * (dbSize - 0 + 1)) + 0;
        return dbCanadaImages[randomNumber].links;
    }
    
    const backgroundImage = canadaImage(canadaLinkImages.data.rows);

    const drawData = {
        backgroundImage,
        ...respDrawData
    }

    return {
        props: {
            drawData
        } // will be passed to the page component as props -
    };
};
