import Link from 'next/link';
import { useTranslation } from '../../i18n';
import { Counter } from './components/Counter';

interface Props {
  params: {
    lng: string;
  };
}

export default async function Page({ params: { lng } }: Props) {
  const { t } = await useTranslation(lng, ['buttons']);

  return (
    <>
      <h1>{t('name_test')}</h1>
      <Counter lng={lng} />
      <Link href={`/${lng}`}>{t('first_page')}</Link>
    </>
  );
}
