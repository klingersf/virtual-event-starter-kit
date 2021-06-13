import styles from './drawExpressEntry.module.css';

export default function DrawExpressEntry() {

    // const backgroundImage = `https://instagram.fsdu12-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/59405114_2283464521927665_4362481337709707618_n.jpg?tp=1&_nc_ht=instagram.fsdu12-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=KW74iSTDC2QAX8sNEwQ&tn=b4BohomBYenciarl&edm=AABBvjUBAAAA&ccb=7-4&oh=0b463b53bf95e68a80aa67e890d92db2&oe=60CBC8F1&_nc_sid=83d603`;
    // const backgroundImage = `https://dolarcanadense.com/ScienceWorld_Stadium_top.jpg`;
    // const backgroundImage = `https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1299&q=80`;
    // const backgroundImage = `https://images.unsplash.com/photo-1501114676295-bbbcc7a12466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80`;
    const backgroundImage = `https://images.unsplash.com/photo-1519832979-6fa011b87667?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1335&q=80`;
    // const backgroundImage = `/assets/draw/cad_bg1.jpg`;
    
    const dateRound =  `June 10, 2021 at 12:29:11 UTC`;
    const programTitle =  `canadian experience class`;
    const roundPoints = 3368;
    const invitations = 6000;
    const tieBrake = `April 28, 2021 at 05:45:14 UTC`;

    const pgColor = styles.cec;

    return (
        <>
            <div style={{backgroundImage:`url(${backgroundImage})`}} className={styles.base}>
                <img src={`/assets/draw/draw.png`}/>
            </div>
            {/*<div className={styles.stocksCode}>{code}</div>*/}
            {/*<div className={styles.price}>{stockValue.toLocaleString('pt-BR', { minimumFractionDigits: 2})}</div>*/}
            {/*<div className={styles.company}>{name}</div>*/}
            {/*<div className={styles.msg}>atingiu</div>*/}
            <div className={styles.dateRound}>{dateRound}</div>
            <div className={`${styles.programTitle} ${pgColor}`}>{programTitle}</div>
            <div className={`${styles.roundPoints} ${pgColor}`}>{roundPoints}</div>
            <div className={`${styles.points} ${pgColor}`}>Points</div>
            <div className={styles.invitations}>{invitations}</div>
            <div className={`${styles.dateRound} ${styles.tieBrake}`}>Tie-Brake Rule: {tieBrake}</div>
            {/*<div className={styles.logo}>*/}
            {/*    <img className={styles.logoimg} src={linkImg}/>*/}
            {/*</div>*/}
        </>
    );
}