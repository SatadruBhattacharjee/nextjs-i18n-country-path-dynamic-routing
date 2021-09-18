import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getI18nPaths } from "../../../getI18nPaths";
import i18nextConfig from "../../../next-i18next.config";

export default function Luxury({ locale }) {
  const {
    query: { country },
  } = useRouter();
  const { t, i18n } = useTranslation("luxury");
  return (
    <h1>
      {t("title")}: {locale} {country}
    </h1>
  );
}

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
});

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ["common", "luxury"],
      i18nextConfig
    )),
    locale,
  },
});
