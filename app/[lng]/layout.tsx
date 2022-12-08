import dir from 'i18next';
import { ReactNode } from 'react';
import { CONFIG_i18N_LANGUAGES } from '../../config';

interface Props {
  children: ReactNode;
  params: {
    lng: string;
  };
}

export async function generateStaticParams() {
  return CONFIG_i18N_LANGUAGES.map(lng => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }: Props) {
  return (
    <html lang={lng} dir={dir.dir(lng)}>
      <head />
      <body>{children}</body>
    </html>
  );
}
