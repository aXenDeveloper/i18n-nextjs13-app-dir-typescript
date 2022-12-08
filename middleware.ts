import { NextRequest, NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
import { CONFIG_i18N_COOKIE, CONFIG_i18N_FALLBACK_LNG, CONFIG_i18N_LANGUAGES } from './config';

acceptLanguage.languages(CONFIG_i18N_LANGUAGES);

export const config = {
  matcher: '/:lng*'
};

export function middleware(req: NextRequest) {
  let lng;
  const cookies = req.cookies.get(CONFIG_i18N_COOKIE);
  if (cookies) {
    lng = acceptLanguage.get(cookies.value);
  }
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'));
  if (!lng) lng = CONFIG_i18N_FALLBACK_LNG;

  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(`/${lng}`, req.url));
  }

  const referer = req.headers.get('referer');
  if (referer) {
    const refererUrl = new URL(referer);
    const lngInReferer = CONFIG_i18N_LANGUAGES.find(l => refererUrl.pathname.startsWith(`/${l}`));
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(CONFIG_i18N_COOKIE, lngInReferer);
    return response;
  }

  return NextResponse.next();
}
