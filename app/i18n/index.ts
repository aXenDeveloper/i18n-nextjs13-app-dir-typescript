import { createInstance, i18n } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { configI18n, CONFIG_i18N_DEFAULT_NS } from '../../config';

const initI18next = async (lng: string, ns?: string | string[], group?: string): Promise<i18n> => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./langs/${language}/${group ? `${group}/` : ''}${namespace}.json`)
      )
    )
    .init(configI18n(lng, ns));

  return i18nInstance;
};

export const useTranslation = async (lng: string, ns?: string | string[], group?: string) => {
  const currentNs = ns ? (Array.isArray(ns) ? [CONFIG_i18N_DEFAULT_NS, ...ns] : ns) : undefined;
  const i18nextInstance = await initI18next(lng, currentNs, group);

  return {
    t: i18nextInstance.getFixedT(lng, currentNs),
    i18n: i18nextInstance
  };
};
