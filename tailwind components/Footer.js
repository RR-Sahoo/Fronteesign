// Tailwind components for footer


const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full bg-white ">
      <div className="xl:w-5/7 xl:max-w-custom bg-white text-gray-light xl:mx-auto flex xl:flex-col justify-center md:flex-row xl:justify-between space-y-4 pt-3 pb-3">
        <div className="grid xl:grid-cols-2 xl:flex-grow grid-rows-1 row-start-2">
          <div className="grid xl:grid-flow-col ">
            <div className="flex xl:justify-between justify-evenly mt-1 space-x-2">
              <a href="#" className="font-medium text-sm mb-2">
                {t('About')}
              </a>
              <a href="#" className="font-medium text-sm">
                {t('FAQ')}
              </a>
              <a href="#" className="font-medium text-sm ">
                {t('Contact')}
              </a>
            </div>
            <div className="flex justify-self-start xl:justify-self-auto gap-3 xl:space-x-9 mt-1 xl:ml-12 ml-0">
              <a href="#" className="font-medium text-sm ">
                {t('Terms and Conditions')}
              </a>
              <a href="#" className="font-medium text-sm ">
                {t('Privacy Policy')}
              </a>
            </div>
          </div>
          <div className="grid xl:grid-flow-col row-start-1 xl:col-start-2 my-4 xl:my-0 ">
            <div className="flex justify-center xl:justify-self-end">
              {' '}
              <nav className="flex justify-end items-center space-x-10">
                <a href="#" className="">
                  <span className="sr-only">{t('Instagram')}</span>
                  <svg
                    className="fill-current text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                  >
                    <path
                      d="M7 1.244a21.463 21.463 0 012.8.078 3.607 3.607 0 011.322.233 2.732 2.732 0 011.322 1.322 3.607 3.607 0 01.234 1.323c0 .7.078.933.078 2.8a21.463 21.463 0 01-.078 2.8 3.607 3.607 0 01-.233 1.322 2.732 2.732 0 01-1.322 1.322 3.607 3.607 0 01-1.322.233c-.7 0-.933.078-2.8.078a21.463 21.463 0 01-2.8-.078 3.607 3.607 0 01-1.322-.233 2.732 2.732 0 01-1.322-1.322A3.607 3.607 0 011.322 9.8c0-.7-.078-.933-.078-2.8a21.463 21.463 0 01.078-2.8 3.607 3.607 0 01.233-1.322A2.793 2.793 0 012.1 2.1a1.315 1.315 0 01.778-.544A3.607 3.607 0 014.2 1.322 21.463 21.463 0 017 1.244M7 0a22.981 22.981 0 00-2.878.078 4.8 4.8 0 00-1.711.311 3.045 3.045 0 00-1.244.778 3.045 3.045 0 00-.778 1.244 3.544 3.544 0 00-.311 1.711A22.981 22.981 0 000 7a22.981 22.981 0 00.078 2.878 4.8 4.8 0 00.311 1.711 3.045 3.045 0 00.778 1.244 3.045 3.045 0 001.244.778 4.8 4.8 0 001.711.311A22.981 22.981 0 007 14a22.981 22.981 0 002.878-.078 4.8 4.8 0 001.711-.311 3.263 3.263 0 002.022-2.022 4.8 4.8 0 00.311-1.711C13.922 9.1 14 8.867 14 7a22.981 22.981 0 00-.078-2.878 4.8 4.8 0 00-.311-1.711 3.045 3.045 0 00-.778-1.244 3.045 3.045 0 00-1.244-.778A4.8 4.8 0 009.878.078 22.981 22.981 0 007 0m0 3.422A3.52 3.52 0 003.422 7 3.578 3.578 0 107 3.422m0 5.911A2.292 2.292 0 014.667 7 2.292 2.292 0 017 4.667 2.292 2.292 0 019.333 7 2.292 2.292 0 017 9.333m3.733-6.922a.856.856 0 10.856.856.863.863 0 00-.856-.856"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="">
                  <span className="sr-only">{t('Twitter')}</span>
                  <svg
                    className="fill-current text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="11.356"
                  >
                    <path
                      d="M4.433 11.356A8.094 8.094 0 0012.6 3.189V2.8A6.322 6.322 0 0014 1.322a6.457 6.457 0 01-1.633.467A3.026 3.026 0 0013.611.233a7.134 7.134 0 01-1.789.7A2.778 2.778 0 009.722 0a2.922 2.922 0 00-2.878 2.878 1.516 1.516 0 00.078.622A8.041 8.041 0 011.011.467a2.979 2.979 0 00-.389 1.478 3.09 3.09 0 001.244 2.411 2.622 2.622 0 01-1.322-.389 2.843 2.843 0 002.333 2.8 2.4 2.4 0 01-.778.078 1.324 1.324 0 01-.544-.078 2.947 2.947 0 002.722 2.022A5.872 5.872 0 01.7 10.033a2.153 2.153 0 01-.7-.078 7.341 7.341 0 004.433 1.4"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="">
                  <span className="sr-only">{t('Facebook')}</span>
                  <svg
                    className="fill-current text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="7.311"
                    height="14"
                  >
                    <path
                      d="M4.744 14V7.622h2.178l.311-2.489H4.744V3.578c0-.7.233-1.244 1.244-1.244H7.31V.078C7 .078 6.222 0 5.367 0a3 3 0 00-3.189 3.267v1.866H0v2.489h2.178V14z"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
