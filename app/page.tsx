import Image from "next/image";
import style from "./page.module.css";
import NavBar from "./components/navbar";
import { unstable_noStore as noStore } from "next/cache";
import Category, { Tool } from "./components/category";

export default async function Home() {
  noStore();
  const req = await fetch(`http://localhost:3001/data.json`);
  const data = await req.json();

  return (
    <div className={style.main}>
      {data.map((d: any, i: any) => {
        return (
          <div  key={i}>
            <Category title={Object.keys(d)} data={Object.values(d)} />
          </div>
        );
      })}
    </div>
  );
}




