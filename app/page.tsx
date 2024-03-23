import style from "./page.module.css";
import {unstable_noStore as noStore} from "next/cache";
import Category from "./components/category";
import SideNav from "@/app/components/sidenav";

export default async function Home() {
  noStore();
  const req = await fetch(`http://localhost:3000/data.json`);
  const data = await req.json();

  return (
      <>
        <SideNav/>
        <div className={style.pageContent}>
          {data.map((d: any, i: any) => {
            return (
              <div  key={i}>
                <Category title={Object.keys(d)} data={Object.values(d)} />
              </div>
            );
          })}
        </div>
      </>
  );
}

export const runtime = 'edge' // 'nodejs' (default) | 'edge'





