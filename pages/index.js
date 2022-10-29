import Head from "next/head";
import Link, { links } from "../components/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HNG9 first task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.main_link}>
          {links.map((link) => (
            <Link id={link.id} key={link.id} href={link.href}>
              {link.subText}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
