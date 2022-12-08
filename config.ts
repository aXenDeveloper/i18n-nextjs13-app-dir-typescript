import { InitOptions } from 'i18next';

// i18n configuration
export const CONFIG_i18N_FALLBACK_LNG = 'en';
export const CONFIG_i18N_LANGUAGES = [CONFIG_i18N_FALLBACK_LNG, 'pl'];
export const CONFIG_i18N_COOKIE = 'aXenDev_lang';
export const CONFIG_i18N_DEFAULT_NS = 'global';

export const configI18n = (
  lng: string = CONFIG_i18N_FALLBACK_LNG,
  ns: string | string[] = CONFIG_i18N_DEFAULT_NS
): InitOptions => ({
  // debug: true,
  supportedLngs: CONFIG_i18N_LANGUAGES,
  fallbackLng: CONFIG_i18N_FALLBACK_LNG,
  lng,
  fallbackNS: CONFIG_i18N_DEFAULT_NS,
  defaultNS: CONFIG_i18N_DEFAULT_NS,
  ns
});
