import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const { handleSubmit, register, reset } = useForm();

  async function submit(data) {
    await axios.post("/api/email", {
      email: data.email,
    });

    setSubmitted(true);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>✧CAHYATI PRESS✧</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/tbr2ntx.css" />
        <link
          rel="preload"
          href="/fonts/clifton.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <div className="page-container">
        <header>
          <div className="container">
            <div className="title">Cahyati Press</div>
          </div>
        </header>
        <div className="coming-soon">
          <div className="about">
            <p>
              Cahyati Press is a publishing and printing experiment. It is an
              attempt at taking the pressure off of bookmaking; a long distance
              collaboration between Bali and Brisbane by two long-time friends,
              Avi and Kat.
            </p>
            <p>
              <a
                href="https://instagram.com/cahyati.press"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>{" "}
              /{" "}
              <a
                href="http://cahyatipress.substack.com/"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                Newsletter
              </a>{" "}
              /{" "}
              <a
                href="https://wa.me/6287811102900?text=I%27d%20like%20to%20make%20an%20appointment%20please"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                Make an appointment
              </a>
            </p>
            <br />
            <p>COMING 10/23:</p>
            <p>ACA & ICA IN PESTA KERAMAT</p>
            <p>QUEERS SHOOT BACK! ESSAYS ON RADICAL QUEER CINEMA</p>
          </div>
        </div>
        <div className="form">
          {submitted && <p>Thanks! We&apos;ll keep you posted.</p>}
          {!submitted && (
            <form onSubmit={handleSubmit(submit)}>
              <label htmlFor="email" className="label-name">
                Let&apos;s stay in touch:
              </label>
              <div className="email-input-group">
                <input
                  type="text"
                  className="email-input"
                  id="email"
                  {...register("email")}
                  placeholder="friend_of_cahyati@gmail.com"
                />
                <input type="submit" className="button" value="ENTER" />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
