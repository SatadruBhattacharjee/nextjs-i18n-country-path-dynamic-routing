import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useRouter } from "next/router";

import i18nextConfig from "../../next-i18next.config";
import { getI18nPaths } from "../../getI18nPaths";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { StaticI18nLink } from "../../components/StaticI18nLink";

const Homepage = ({ locale }) => {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const { country } = router.query;

  return (
    <>
      <main>
        <Header heading={t("h1")} title={t("title")} />
        <div>
          <StaticI18nLink
            href={"/" + country}
            locale={i18n.language === "en" ? "ar" : "en"}
          >
            <button>{t("change-locale")}</button>
          </StaticI18nLink>
          <Link href="/luxury">
            <button type="button">{t("to-second-page")}</button>
          </Link>
          <Link href={"/" + locale + "/" + country + "/luxury"}>
            <a>{t("Luxury")}</a>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
});

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ["common", "footer"],
      i18nextConfig
    )),
    locale,
  },
});

export default Homepage;
