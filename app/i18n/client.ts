'use client';

import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { configI18n } from '../../config';

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) => import(`./langs/${language}/${namespace}.json`)
    )
  )
  .init(configI18n());

export function useTranslationClient(lng: string, ns?: string | string[]) {
  if (i18next.resolvedLanguage !== lng) i18next.changeLanguage(lng);
  return useTranslation(ns);
}
