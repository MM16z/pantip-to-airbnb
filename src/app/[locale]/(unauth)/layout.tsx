import { unstable_setRequestLocale } from 'next-intl/server';

import Navbar from '@/components/navbar/Navbar';

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}
