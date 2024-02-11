import { Tool } from "./category";
import style from "../styles/mycards.module.css"

export default function MyCard({ data }: { data: Tool }) {
    return (
      <div className={`${style.myCard} rounded fw-bold`}>
        <div>{data.name}</div>
      </div>
    );
  }