import { CookieBanner } from "@/shared/components/CookieBanner";
import { SkipLink } from "@/shared/components/SkipLink";
import { WhatsAppFAB } from "@/shared/components/client/WhatsAppFAB";
import { Navbar } from "@/features/navigation/components/Navbar";
import { UtilityBar } from "@/features/navigation/components/UtilityBar";
import { Footer } from "@/features/shell/components/Footer";

type SiteShellProps = {
  children: React.ReactNode;
};

export async function SiteShell({ children }: SiteShellProps): Promise<React.JSX.Element> {
  return (
    <>
      <SkipLink />
      <UtilityBar />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <Footer />
      <CookieBanner />
      <WhatsAppFAB />
    </>
  );
}
