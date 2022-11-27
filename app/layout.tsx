import { headers } from 'next/headers';
import './globals.css';

async function getLanguage() {
  const headersInstance = headers();
  return headersInstance.get('accept-language');
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = await getLanguage();

  console.log(lang);

  return (
    <html lang={lang as string}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
