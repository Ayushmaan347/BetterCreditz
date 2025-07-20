'use client';

import Image from 'next/image';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

// All data in one place
const creditOffers = [
  {
    title: "CreditScoreIQ",
    price: "$1 - 7-day trial | Monthly Membership: $34.99",
    features: [
      "Instantly Access Your 3-Bureau Credit Reports & Scores",
      "Real-Time Credit Monitoring",
      "Reinforced with Identity Theft Protection",
    ],
    imageSrc: "/images/creditscoreiq.png",
    link: "/consultation/billing_form",
  },
  {
    title: "CreditScoreIQ 3",
    price: "$1 - 7-day trial | Monthly Membership: $34.99",
    features: [
      "Instantly Access Your 3-Bureau Credit Reports & Scores",
      "Real-Time Credit Monitoring",
      "Reinforced with Identity Theft Protection",
    ],
    imageSrc: "/images/creditscoreiq.png",
    link: "/consultation/billing_form",
  },
  {
    title: "CreditBuilder IQ",
    price: "$1 - 7-day trial | Monthly Membership: $34.99",
    features: [
      "Instantly Access Your 3-Bureau Credit Reports & Scores",
      "Real-Time Credit Monitoring",
      "Reinforced with Identity Theft Protection",
    ],
    imageSrc: "/images/builder-icon.jpg",
    link: "/consultation/billing_form",
  },
];

// Card component
type Props = {
  title: string;
  price: string;
  features: string[];
  link: string;
  imageSrc: string;
};

function CreditCard({ title, price, features, link, imageSrc }: Props) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between mb-6 max-w-6xl mx-auto">
      <div className="flex items-center space-x-6">
        <div className="w-32 h-20 flex items-center justify-center bg-gray-100 rounded-lg">
          <Image
            src={imageSrc}
            alt={title}
            width={120}
            height={60}
            className="object-contain"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <p className="text-red-700 font-medium mb-2">{price}</p>
          <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
            {features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 md:mt-0">
        <Link href={link}>
          <Button className="bg-green-500 hover:bg-green-600 text-white text-md rounded-full px-8 py-3">
            APPLY NOW
          </Button>
        </Link>
      </div>
    </div>
  );
}

// Main page
export default function ConsultationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="bg-green-100 flex-grow py-10">
        {creditOffers.map((offer, index) => (
          <CreditCard key={index} {...offer} />
        ))}
      </main>

      <Footer />
    </div>
  );
}
