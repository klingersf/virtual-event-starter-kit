import styles from "@components/form.module.css";

export default function FormHigh({typehigh, }) {

    let tickerStock = '';

    function handleSubmit(e){
        e.preventDefault();
        window.location.href = `https://2handyn.vercel.app/api/${typehigh}/${tickerStock}`
    };

    function handleChange(e) {
        tickerStock = e.target.value
    }

    const sendText = typehigh == "highfeed" ? "Máx.Hist." : "52week";

    return(
        <>
            <div className={styles['form-row']}>
                <form onSubmit={handleSubmit}>
                    <label>
                        Ticker:
                        <input className={styles.input} type="text" name={typehigh} onChange={handleChange}/>
                    </label>
                    <input type="submit" value={sendText} />
                </form>
            </div>
        </>
    );
}