import RootShell from '../RootShell';
import { metadataFor } from '../content';

export const metadata = metadataFor('ru');
export { viewport } from '../RootShell';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="ru">{children}</RootShell>;
}
