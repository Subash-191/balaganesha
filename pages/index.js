import { padding } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className="styles.index">
        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/TipperTruck.jpg" />
        </div>
        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/crusher.jpg" />
        </div>
      </div>

      <h3 className={styles.about}>About </h3>
      <div style={{ padding: "2px 20px" }} className={styles.about_content}>
        Balaganesha Transports is one of the leading suppliers of various grades
        of bluemetals that are widely acclaimed for their quality and purity.
        First of all, Construction Blue Metal is a broad category of course to
        medium-grained particulate metal used in construction including variety
        of sands, gravels, crushed stones etc..
        <br></br> <br></br>
        Balaganesha Transports is headed by Mr.L.Rajendran, who has vast
        knowledge and experience of 15+ years in the field of Blue Metal
        Supplying. We are able to supply blue metals to any part of the states
        of Tamilnadu and Pondicherry. Ensuring a positive customer experience,
        making available goods and services that are of top-notch quality is
        given prime importance.
        <br></br> <br></br>
        We are transporting M-sand, P-sand, 1/2 inch jally, 1 1/2 inch jally, 3/4
        inch jally Chips jally at 24/7 service.
        <br></br> <br></br>
        Our office is located at 4/5-19 , Erode Main
        Road ,Punnam Chathiram, Karur.
        <br></br> <br></br> <br></br> <br></br>
      </div>
    </div>
  );
}
