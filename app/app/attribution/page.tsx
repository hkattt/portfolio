import pb from "../utils/pocketbaseClient";

import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Attributions from "../components/Attributions/Attributions";

import styles from "./page.module.scss";
import { AttributionProps } from "../types/props";

export default async function AttributionsPage() {
  let attributions: AttributionProps[] = [];

  try {
    const attributionsRecord = await pb.collection("attributions").getFullList();

    attributions = attributionsRecord.map((attributionRecord) => (
      {
        image: {
          src: attributionRecord["src"],
          alt: attributionRecord["alt"],
          width: 0,
          height: 0
        },
        icon: {
          title: attributionRecord["icon_title"],
          href: attributionRecord["icon_href"]
        },
        license: {
          title: attributionRecord["license_title"],
          href: attributionRecord["license_href"]
        }
      }
    ));
  } catch (err) {
    console.error("Error fetching data:", err);
  } 
  return (
    <>
      <Header/>
      <main className={styles.attribution}>
        <Attributions attributions={attributions}/>
      </main> 
      <Footer/>
    </>
  )
}