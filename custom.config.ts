interface IHeader {
  logo: string;
  darkLogo: string;
  menu: {
    title: string;
    link: string;
  }[];
  megaMenu: boolean | string[];
}
export default {
  header: {
    logo: "briofy.png",
    darkLogo: "briofy.png",
    menu: [
      { title: "sample1", link: "/sample1" },
      { title: "sample2", link: "/sample2" },
    ],
    megaMenu: false,
  } as IHeader,
};
