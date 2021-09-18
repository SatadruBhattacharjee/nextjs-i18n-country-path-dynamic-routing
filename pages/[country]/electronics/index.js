import { useRouter } from "next/router";
import { getI18nPaths } from "../../../getI18nPaths";

export default function Electronics({ locale }) {
  const {
    query: { country },
  } = useRouter();
  return (
    <h1>
      Electronics Locale: {locale} {country}
    </h1>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: getI18nPaths(),
    fallback: false,
  };
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      locale,
    },
  };
}
