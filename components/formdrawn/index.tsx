import styles from "@components/form.module.css";

export default function FormDraw() {

    let drawNumber = '';

    function handleSubmit(e: any){
        e.preventDefault();
        window.location.href = `https://2handyn.vercel.app/api/expressentry/draw/${drawNumber}`
    };

    function handleChange(e: any) {
        drawNumber = e.target.value
    }

    return(
        <>
            <div className={styles['form-row']}>
                <form onSubmit={handleSubmit}>
                    <label>
                        Draw:
                        <input className={styles.input} type="text" name="drawNumber" onChange={handleChange}/>
                    </label>
                    <input type="submit" value="gerar" />
                </form>
            </div>
        </>
    );
}