import HomeClient from './HomeClient';

export const metadata = {
  title: "Unicoat Abrasive Industries | Aluminum Oxide | Steel Shot | Glass Beads | Steel Grit | Garnet Sand Manufacturers, Suppliers, Traders, Exporters in Ahmedabad, Gujarat, India",
  description: "Top manufacturers & suppliers of Aluminum Oxide, Steel Shots, Glass Beads, Steel Grits & Garnet Sand in Ahmedabad, Gujarat – Unicoat Abrasives.",
  keywords: "Aluminum Oxide, Steel Shot, Glass Beads, Steel Grit, Garnet Sand Manufacturers, Suppliers, Traders, Exporters in Ahmedabad, Gujarat, India",
  metadataBase: new URL('https://unicoatabrasives.com'), // Assuming this is the domain, or keep existing if unknown but likely needs change
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Unicoat Abrasive Industries | Premium Industrial Abrasives Manufacturer",
    description: "Top manufacturers & suppliers of Aluminum Oxide, Steel Shots, Glass Beads, Steel Grits & Garnet Sand in Ahmedabad, Gujarat – Unicoat Abrasives.",
    url: "https://unicoatabrasives.com",
    siteName: "Unicoat Abrasives",
    images: [
      {
        url: "/favicon.png",
        width: 32,
        height: 32,
        alt: "Unicoat Abrasives",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: "index, follow",
  other: {
    'google-site-verification': 'mqay6uyCjBoVMPhrG2G1qmvop2Asg98cUc_N4yN4VYo',
  },
}

export default function Home() {
  return <HomeClient />;
}