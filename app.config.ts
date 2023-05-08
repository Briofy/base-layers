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

export default defineAppConfig({
  nuxtIcon: {
    // Default size
    // size: '2em',
    aliases: {
      nuxt: "NuxtIcon",
    },
  },
  config: {
    header: {
      logo: "/img/briofy.png",
      darkLogo: "/img/briofy.png",
      menu: [],
      megaMenu: false,
    } as IHeader,

    footer: {
      logo: "/img/briofy.png",
      darkLogo: "/img/briofy.png",
      footerLinks: [],
    } as IFooter,
  },
});
