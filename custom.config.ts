interface IHeader {
  logo: string;
  darkLogo: string;
  menu: {
    title: string;
    link: string;
  }[];
  megaMenu: boolean | string[];
}
interface IFooter {
  logo: string;
  darkLogo: string;
  footerLinks: {
    title: string;
    links: {
      title: string;
      link: string;
      target?: string;
    }[];
  }[];
}

export default {
  header: {
    logo: "/img/briofy.png",
    darkLogo: "/img/briofy.png",
    menu: [
      { title: "sample1", link: "/sample1" },
      { title: "sample2", link: "/sample2" },
    ],
    megaMenu: false,
  } as IHeader,

  footer: {
    logo: "/img/briofy.png",
    darkLogo: "/img/briofy.png",
    footerLinks: [
      {
        title: "Quick Access",
        links: [
          { title: "About", link: "/about" },
          { title: "Contact", link: "/contact" },
          { title: "Pricing", link: "/pricing" },
          { title: "News", link: "/blog/news" },
          { title: "Blog", link: "/blog" },
          { title: "Careers", link: "/careers" },
          { title: "Privacy Policy", link: "/privacy" },
          { title: "Cookies Policy", link: "/cookies" },
          { title: "Terms Of Service", link: "/terms" },
        ],
      },
      {
        title: "Products",
        links: [
          { title: "Marketplace", link: "/marketplace" },
          { title: "Bridge", link: "/bridge" },
          { title: "Bazaar", link: "/bazaar" },
          { title: "Financial Engineering", link: "/financial-engineering" },
          { title: "Algo Trading", link: "/algo-trading" },
          { title: "Cloud Trading", link: "/cloud-trading" },
          { title: "Trading Framework", link: "/cloud-trading" },
          { title: "License System", link: "/license-system" },
          { title: "Open API", link: "/open-api" },
        ],
      },
      {
        title: "Support",
        links: [
          { title: "F.A.Q", link: "/faq" },
          { title: "Documentation", link: "/documentation" },
          { title: "How To", link: "/how-to" },
          { title: "API Docs", link: "/docs/api" },
          {
            title: "Status System",
            link: "https://status.trader4.net",
            target: "_blank",
          },
          { title: "Use Cases", link: "/use-cases" },
          { title: "Brand Book", link: "/brand-book" },
          { title: "DMCA", link: "/dmca" },
          { title: "Do Not Sell My Info", link: "/do-not-sell-my-info" },
        ],
      },
      {
        title: "More",
        links: [
          { title: "Download Android", link: "/mobile/android" },
          { title: "Download iOS", link: "/mobile/ios" },
          { title: "Think and Grow Rich", link: "/think-and-grow-rich" },
          { title: "Rich Dad Poor Dad", link: "/rich-dad-poor-dad" },
          { title: "Open Source", link: "/open-source" },
          { title: "#trader4", link: "/hashtag-trader4" },
          { title: "Bug Bounty", link: "/bug-bounty" },
          { title: "Disclaimer", link: "/disclaimer" },
          { title: "CSR", link: "/csr" },
        ],
      },
      {
        title: "Our Family",
        links: [
          { title: "Briofy", link: "https://briofy.net", target: "_blank" },
          { title: "Werify", link: "https://werify.net", target: "_blank" },
          { title: "Bulutly", link: "https://bulutly.net", target: "_blank" },
          { title: "AzPays", link: "https://azpays.net", target: "_blank" },
          { title: "Streamfy", link: "https://streamfy.net", target: "_blank" },
          { title: "Learnfy", link: "https://learnfy.net", target: "_blank" },
          { title: "Mehrify", link: "https://mehrify.net", target: "_blank" },
          { title: "Carefy", link: "https://carefy.net", target: "_blank" },
          {
            title: "More from Briofy",
            link: "https://briofy.net/products",
            target: "_blank",
          },
        ],
      },
    ] as IFooter["footerLinks"],
  },
};
