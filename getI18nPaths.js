import i18nConfig from "./next-i18next.config";

export const getI18nPaths = () => {
  return i18nConfig.languages
    .map((locale) =>
      i18nConfig.i18n.locales.map((country) => ({
        params: {
          country,
        },
        locale,
      }))
    )
    .flat();
};
