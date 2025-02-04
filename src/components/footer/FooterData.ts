// 定義footer的數據結構
export interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

// Footer的內容數據
export const footerData: FooterSection[] = [
  {
    title: "Support",
    links: [
      { label: "Help Centre", href: "/help" },
      { label: "AirCover", href: "/aircover" },
      { label: "Anti-discrimination", href: "/anti-discrimination" },
      { label: "Disability support", href: "/disability" },
      { label: "Cancellation options", href: "/cancellation" },
    ],
  },
  {
    title: "Hosting",
    links: [
      { label: "List your home", href: "/host" },
      { label: "AirCover for Hosts", href: "/host-aircover" },
      { label: "Hosting resources", href: "/resources" },
      { label: "Community forum", href: "/forum" },
      { label: "Host responsibly", href: "/responsible-hosting" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Newsroom", href: "/news" },
      { label: "Careers", href: "/careers" },
      { label: "Investors", href: "/investors" },
      { label: "Gift cards", href: "/gift" },
      { label: "Emergency stays", href: "/emergency" },
    ],
  },
];
