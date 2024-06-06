import { JetBrains_Mono } from "next/font/google";

// Configure the font with desired subsets and weights
export const fontJetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsmono",
});