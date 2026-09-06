import localFont from "next/font/local"

export const heebo = localFont({
  src: [
    {
      path: "../../public/fonts/heebo-hebrew-300-normal.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/heebo-hebrew-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/heebo-hebrew-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/heebo-hebrew-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/heebo-latin-300-normal.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/heebo-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/heebo-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/heebo-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-heebo",
  display: "swap",
})

export const frankRuhlLibre = localFont({
  src: [
    {
      path: "../../public/fonts/frank-ruhl-libre-hebrew-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/frank-ruhl-libre-hebrew-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/frank-ruhl-libre-hebrew-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/frank-ruhl-libre-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/frank-ruhl-libre-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/frank-ruhl-libre-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-frank-ruhl-libre",
  display: "swap",
})
