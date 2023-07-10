"use client";

import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Card from "@/components/Card";
import getAllStores from "@/api/getAllStores";
import { StoreProps } from "@/lib/getStore";

export default async function Home() {
  // const [stores, setStores] = useState<[]>([]);

  const stores = await getAllStores();
  console.log("STORES:", await stores);

  const handleOnBannerBtnClick = () => {
    console.log("button banner clicked");
  };

  return (
    <div className="container">
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Banner
          btnLabel="View stores nearby!"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className="heroImage">
          <Image
            alt="hero"
            src="/static/hero-image.png"
            width={700}
            height={400}
            priority
          />
        </div>
        {stores.length > 0 && (
          <>
            <h2 className="heading2">Portland Coffee Stores</h2>
            <div className="cardLayout">
              {stores.map(
                ({
                  id,
                  name,
                  imgUrl,
                  websiteUrl,
                  address,
                  neighbourhood,
                }: StoreProps) => {
                  return (
                    <Card
                      key={id}
                      name={name}
                      imgUrl={`${imgUrl}`}
                      href={`/coffee-store/${id}`}
                      altDescr={name}
                      // className={card}
                    />
                  );
                }
              )}
            </div>
          </>
        )}
      </main>
      <style jsx>{`
        /** Mobile first development **/

        .container {
          margin-bottom: 14rem /* 224px */;
        }

        .main {
          margin-top: 2.5rem /* 40px */;
          margin-left: auto;
          margin-right: auto;
          max-width: 72rem /* 1152px */;
          padding-left: 1rem /* 16px */;
          padding-right: 1rem /* 16px */;
        }

        .heroImage {
          position: absolute;
          top: 0px;
          z-index: 1;
        }

        .cardLayout {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          column-gap: 1.5rem /* 24px */;
          row-gap: 1.5rem /* 24px */;
        }

        .card {
          justify-content: center;
        }

        .heading2 {
          font-size: 2.25rem;
          line-height: 2.5rem;
          padding-bottom: 2rem;
          margin-top: 2rem;
          color: var(--text-white-100);
        }

        .sectionWrapper {
          margin-top: 5rem;
        }

        /** Breakpoints:
          sm: min-width: 640px;
          md: min-width: 768px;
          lg: min-width: 1024px;
          xl: min-width: 1280px;
          2xl: min-width: 1536px;
        **/

        @media (min-width: 640px) {
          .container {
            padding-left: 1rem /* 16px */;
            padding-right: 1rem /* 16px */;
          }

          .main {
            margin-top: 3rem /* 48px */;
            padding-left: 1.5rem /* 24px */;
            padding-right: 1.5rem /* 24px */;
          }
          .cardLayout {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 768px) {
          .container {
            padding-left: 2.5rem /* 40px */;
            padding-right: 2.5rem /* 40px */;
          }

          .main {
            margin-top: 4rem /* 64px */;
          }

          .heroImage {
            right: 20%;
          }

          .cardLayout {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1024px) {
          .container {
            padding-left: 2.5rem /* 40px */;
            padding-right: 2.5rem /* 40px */;
          }
          .main {
            margin-top: 5rem /* 80px */;
            padding-left: 2rem /* 32px */;
            padding-right: 2rem /* 32px */;
          }
          .heroImage {
            right: 20%;
          }
          .cardLayout {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (min-width: 1280px) {
          .main {
            margin-top: 7rem /* 112px */;
          }

          .cardLayout {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
}
