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
  copyRight: string;
  partOf: string;
  emailAPI: string;
  socials: {
    icon: string;
    link: string;
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
      megaMenu: true,
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
          " py-1 rounded  text-blue-600 dark:text-gray-200 ms-3 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all",
        loginButtonIconName: "mdi:account-circle-outline",
      },
    } as IHeader,

    footer: {
      logo: "/img/briofy.png",
      darkLogo: "/img/briofy.png",
      footerLinks: [],
      emailAPI: "https://api.briofy.net/api/Email/ContactUs",
      copyRight: `<span>© 2017-2023
                          <a href="https://trader4.net" class="hover:underline">Trader4</a>.
                          All Rights Reserved.</span
                        >`,
      partOf: `<p>
      Proudly Part Of
      <a
        href="https://briofy.net"
        target="_blank"
        rel="external"
        class="hover:underline font-semibold"
        >Briofy</a
      >
      Family
    </p>`,
      socials: [
        {
          icon: "mdi:twitter-circle",
          link: "https://twitter.com/briofyapp",
        },

        {
          icon: "mdi:instagram",
          link: "https://www.instagram.com/briofyapp",
        },
        {
          icon: "mdi:linkedin",
          link: "https://www.linkedin.com/company/briofyapp",
        },
        {
          icon: "mdi:youtube",
          link: "https://www.youtube.com/channel/UCQ1Z6X0Z4ZqZ5Z4XZ2Z2Z2A",
        },
        {
          icon: "mdi:github",
          link: "https://github.com/Briofy",
        },
      ],
    } as IFooter,
  },
});
