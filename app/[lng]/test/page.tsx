import Link from 'next/link';
import { useTranslation } from '../../i18n';

interface Props {
  params: {
    lng: string;
  };
}

export default async function Page({ params: { lng } }: Props) {
  const { t } = await useTranslation(lng, ['buttons']);

  return (
    <>
      <h1>{t('test2')}</h1>
      <Link href={`/${lng}`}>{t('page')}</Link>
    </>
  );
}
