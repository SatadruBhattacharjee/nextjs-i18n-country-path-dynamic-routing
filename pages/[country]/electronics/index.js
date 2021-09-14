import { useRouter } from "next/router"

export default function Electronics() {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  return (
    <h1>Electronics Locale: {locale}</h1>
  )
}