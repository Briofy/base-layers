interface IHeader {
  logo: string;
  darkLogo: string;
  menu: {
    title: string;
    link: string;
  }[];
  megaMenu: boolean | string[];
  hideSearchBar: boolean;
  hideLanguageSelector: boolean;
  languageList: {
    lang: string;
    flagSrc: string;
    text: string;
  }[];
  hideThemeSelector: boolean;
  loginButton: {
    title: string;
    hideLoginButton: boolean;
    loginButtonClass: string;
    loginButtonIconName: string;
  };
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
      hideSearchBar: false,
      hideLanguageSelector: false,
      languageList: [
        {
          lang: "en",
          flagSrc: "/img/icon/en.svg",
          text: "English",
        },
        {
          lang: "fa",
          flagSrc: "/img/icon/ir.svg",
          text: "Farsi",
        },
        {
          lang: "ar",
          flagSrc: "/img/icon/ar.svg",
          text: "Arabic",
        },
        {
          lang: "tr",
          flagSrc: "/img/icon/tr.svg",
          text: "Turkish",
        },
      ],
      hideThemeSelector: false,
      loginButton: {
        title: "Login",
        hideLoginButton: false,
        loginButtonClass:
          "sm:px-4 py-1 rounded sm:border ps-2 border-blue-600 text-blue-600 dark:text-gray-200 ms-3 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all",
        loginButtonIconName: "mdi:account-circle-outline",
      },
    } as IHeader,

    footer: {
      logo: "/img/briofy.png",
      darkLogo: "/img/briofy.png",
      footerLinks: [],
    } as IFooter,
  },
});
