import {
  FileSignature,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

export const plans = [
  {
    title: "Class 3 DSC",
    subtitle: "For Individuals",
    price: "₹1,500",
    icon: FileSignature,
    features: [
      "2 Year Validity",
      "Secure USB Token Support",
      "DGFT / GST Compatible",
      "Fast Approval Process",
    ],
    popular: false,
  },

  {
    title: "Organization DSC",
    subtitle: "Business & Companies",
    price: "₹3,000",
    icon: ShieldCheck,
    features: [
      "2 Year Validity",
      "Company Verification",
      "Director DSC",
      "Priority Support",
    ],
    popular: true,
  },

  {
    title: "DGFT DSC",
    subtitle: "Import & Export",
    price: "₹3,000",
    icon: BadgeCheck,
    features: [
      "2 Year Validity",
      "DGFT Registration",
      "IEC Compatible",
      "USB Token Included",
    ],
    popular: false,
  },

    {
    title: "ICE DSC",
    subtitle: "For Ice Gate",
    price: "₹2,000",
    icon: FileSignature,
    features: [
      "2 Year Validity",
      "Secure USB Token Support",
      "DGFT / GST Compatible",
      "Fast Approval Process",
    ],
    popular: false,
  },
];