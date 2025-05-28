import CardPage from "@/components/Cardpage";
import FooterPage from "@/components/Footerpage";
import HeroPage from "@/components/Heropage.js";

// import discoverWeb from "./webdesigndiscover/page.js";
import WebDesignDiscover from "./webdesigndiscover/page.js";

export default function Home() {
  return (
  <>
  
<HeroPage />
      <CardPage />
      <FooterPage />
      <WebDesignDiscover />
  
  </>
  );
}
