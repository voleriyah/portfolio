import RootShell from '../../RootShell';
import { metadataFor } from '../../content';

export const metadata = metadataFor('en');
export { viewport } from '../../RootShell';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
