import styles from "../styles/sidnav.module.css";
import { unstable_noStore as noStore } from 'next/cache';
export default async function SideNav() {
    noStore();
    const req = await fetch(`http://localhost:3001/data.json`);
    const data = await req.json();
  return (
    <div className={`${styles.sideNav} border`}>
        <div>
      {
        data.map((d:any,i:any)=>{
            console.log(Object.values(d));
            return (
                <div key={i} className={`${styles.category}`}>{Object.keys(d)}</div>
            )
        })
      }
      </div>
    </div>
  );
}
