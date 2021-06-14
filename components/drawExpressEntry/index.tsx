import styles from './drawExpressEntry.module.css';

interface DrawExpressEntry {
    backgroundImage: string,
    dateRound: string,
    programTitle?: string,
    roundPoints: string,
    invitations: string,
    tieBrake: string
}

export default function DrawExpressEntry(DrawExpressEntry: DrawExpressEntry) {

    const {
        backgroundImage,
        dateRound,
        programTitle,
        roundPoints,
        invitations,
        tieBrake
    } = DrawExpressEntry

    const pgColor = styles.cec;

    return (
        <>
            <div style={{backgroundImage:`url(${backgroundImage})`}} className={styles.base}>
                <img src={`/assets/draw/draw.png`}/>
            </div>
            <div className={styles.dateRound}>{dateRound}</div>
            <div className={`${styles.programTitle} ${pgColor}`}>{programTitle}</div>
            <div className={`${styles.roundPoints} ${pgColor}`}>{roundPoints}</div>
            <div className={`${styles.points} ${pgColor}`}>Points</div>
            <div className={styles.invitations}>{invitations}</div>
            <div className={`${styles.dateRound} ${styles.tieBrake}`}>Tie-Breaking Rule: {tieBrake}</div>
        </>
    );
}