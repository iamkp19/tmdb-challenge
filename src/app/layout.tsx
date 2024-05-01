import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// https://api.themoviedb.org/3/movie/top_rated?api_key=fa6276d45541edb31de6a6fee6659b15
// https://api.themoviedb.org/3/movie/popular?api_key=fa6276d45541edb31de6a6fee6659b15
// https://api.themoviedb.org/3/person/popular?api_key=fa6276d45541edb31de6a6fee6659b15

const obj: {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
} = {
  adult: false,
  backdrop_path: "/FUnAVgaTs5xZWXcVzPJNxd9qGA.jpg",
  genre_ids: [878, 28, 18, 12],
  id: 934632,
  original_language: "en",
  original_title: "Rebel Moon — Part Two: The Scargiver",
  overview:
    "The rebels gear up for battle against the ruthless forces of the Motherworld as unbreakable bonds are forged, heroes emerge — and legends are made.",
  popularity: 1868.352,
  poster_path: "/cxevDYdeFkiixRShbObdwAHBZry.jpg",
  release_date: "2024-04-19",
  title: "Rebel Moon — Part Two: The Scargiver",
  video: false,
  vote_average: 6.124,
  vote_count: 558,
};
