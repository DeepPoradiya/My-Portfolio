import "./globals.css";
import Header from "../components/Header"; // Corrected import path
import { fontJetBrainsMono } from "@/config/font";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

export const metadata = {
  title: "Creative Frontend Developer Portfolio",
  description:
    "Explore the portfolio of a skilled frontend developer specializing in HTML, CSS, JavaScript, Next.js, React.js, Tailwind CSS, NextUI, MUI, Git, and GitHub. Discover innovative web solutions and user-friendly designs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      <body className={fontJetBrainsMono.className}>
        <Header />
        <StairTransition/>
        <PageTransition> {children}</PageTransition>
      </body>
    </html>
  );
}
