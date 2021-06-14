import styles from './drawExpressEntry.module.css';

interface DrawExpressEntry {
    draw: number,
    backgroundImage: string,
    dateRound: string,
    programTitle?: string,
    roundPoints: string,
    invitations: string,
    tieBrake: string
}

export default function DrawExpressEntry(DrawExpressEntry: DrawExpressEntry) {

    const {
        draw,
        backgroundImage,
        dateRound,
        programTitle,
        roundPoints,
        invitations,
        tieBrake
    } = DrawExpressEntry

    let pgColor;

    switch (programTitle) {
        case "Canadian Experience Class":
            pgColor = styles.cec;
            break;
        case "Provincial Nominee Program":
            pgColor = styles.pnp;
            break;
        case "Federal Skilled Trades":
            pgColor = styles.fst;
            break;
        case "Federal Skilled Worker":
            pgColor = styles.fsw;
            break;
        default:
            pgColor = '';
    }

    return (
        <>
            <div style={{backgroundImage:`url(${backgroundImage})`}} className={styles.base}>
                <img src={`/assets/draw/draw.png`}/>
            </div>
            <div className={styles.draw}>{draw}</div>
            <div className={styles.dateRound}>{dateRound}</div>
            <div className={`${styles.programTitle} ${pgColor}`}>{programTitle}</div>
            <div className={`${styles.roundPoints} ${pgColor}`}>{roundPoints}</div>
            <div className={`${styles.points} ${pgColor}`}>Points</div>
            <div className={styles.invitations}>{invitations}</div>
            <div className={`${styles.dateRound} ${styles.tieBrake}`}>{tieBrake}</div>
        </>
    );
}