'use client';

import { useState } from 'react';
import { useTranslationClient } from '../../../i18n/client';

interface Props {
  lng: string;
}

export const Counter = ({ lng }: Props) => {
  const { t } = useTranslationClient(lng, ['buttons']);

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{t('count', { count })}</h2>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
    </div>
  );
};
