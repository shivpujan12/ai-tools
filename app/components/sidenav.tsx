import Link from "next/link";
import styles from "../styles/sidnav.module.css";
import {unstable_noStore as noStore} from 'next/cache';
import data from "@/app/data.json";
export default async function SideNav() {
    noStore();
    /*const req = await fetch(`http://localhost:3000/data.json`);
    const data = await req.json();*/
    return (
        <div className={`${styles.sideNav} border`}>
            <div>
                {
                    data.map((d: any, i: any) => {
                        console.log(Object.values(d));
                        return (
                            <div key={i} className={`${styles.category}`}>
                                <Link href={`#${Object.keys(d)}`}>{Object.keys(d)}</Link></div>
                        )
                    })
                }
            </div>
        </div>
    );
}
