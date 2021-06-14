import styles from "@components/form.module.css";
import Link from 'next/link'

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
                <Link href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds.html#wb-auto-4" passHref={true}>
                    List of Draws
                </Link>
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