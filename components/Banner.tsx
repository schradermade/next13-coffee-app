type BannerProps = {
  btnLabel: string;
  handleOnClick?: () => void;
};

const Banner: React.FC<BannerProps> = ({ btnLabel, handleOnClick }) => {
  return (
    <>
      <div className="container">
        <h1 className="title">
          <span className="title1">Coffee</span>
          <span className="title2">Connoisseur</span>
        </h1>
        <p className="subTitle">Discover your local coffee shops!</p>
        <div className="buttonWrapper">
          <button className="button" onClick={handleOnClick}>
            {btnLabel}
          </button>
        </div>
      </div>
      <style jsx>{`
        .container {
          margin-bottom: 6rem;
          position: relative;
          z-index: 2;
        }

        .title {
          display: flex;
          flex-direction: column;
          letter-spacing: -0.025em;
          font-weight: 800;
          color: var(--text-black);
          font-size: 3rem /* 48px */;
          line-height: 1;
        }

        .title1 {
          color: rgba(249, 250, 251, 1);
        }

        .title2 {
          display: block;
          color: var(--text-purple);
        }

        .subTitle {
          margin-top: 0.75rem;
          font-size: 1.5rem /* 24px */;
          line-height: 2rem /* 32px */;

          color: var(--text-white-100);
        }

        .buttonWrapper {
          margin-top: 1.25rem;
        }

        .button {
          background-color: var(--text-purple-dark);
          cursor: pointer;
          color: white;
          outline: 0;
          border: 0px;

          padding-top: 1rem /* 16px */;
          padding-bottom: 1rem /* 16px */;
          font-size: 1.125rem /* 18px */;
          line-height: 1.75rem /* 28px */;
          padding-left: 2.5rem /* 40px */;
          padding-right: 2.5rem /* 40px */;
        }

        .button:hover {
          background-color: var(--text-purple-dark);
        }

        /** 
  Breakpoints:
  ------------
  sm: min-width: 640px; //small device
  md: min-width: 768px; // medium device
  lg: min-width: 1024px; // large device
  xl: min-width: 1280px; // extra large device
  2xl: min-width: 1536px; // 2 x extra large device
**/

        /** sm breakpoint **/
        @media (min-width: 640px) {
          .title {
            font-size: 3rem /* 48px */;
            line-height: 1;
          }

          .subTitle {
            margin-top: 1.25rem;
            max-width: 36rem;
          }

          .buttonWrapper {
            display: flex;
            margin-top: 2rem;
          }
        }

        /** md breakpoint **/
        @media (min-width: 768px) {
          .title {
            font-size: 3.75rem /* 60px */;
            line-height: 1;
          }

          .subTitle {
            margin-top: 1.25rem;
          }

          .button {
            padding-top: 1rem /* 16px */;
            padding-bottom: 1rem /* 16px */;
            font-size: 1.125rem /* 18px */;
            line-height: 1.75rem /* 28px */;
            padding-left: 2.5rem /* 40px */;
            padding-right: 2.5rem /* 40px */;
          }
        }

        /** lg breakpoint **/
        @media (min-width: 1024px) {
          .container {
            text-align: left;
          }

          .title {
            font-size: 4.5rem /* 72px */;
            line-height: 1;
          }

          .title2 {
            // padding-left: 0.5rem;
          }

          .subTitle {
            margin-left: 0px;
            margin-right: 0px;
          }

          .buttonWrapper {
            justify-content: flex-start;
          }
        }

        /** xl breakpoint **/
        @media (min-width: 1280px) {
          .title2 {
            display: inline;
          }
        }
      `}</style>
    </>
  );
};

export default Banner;
