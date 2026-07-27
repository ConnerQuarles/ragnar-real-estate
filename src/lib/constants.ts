export const COMPANY_NAME = "Ragnar Real Estate";
export const AGENT_NAME = "Tyler Lynch";
export const PHONE_DISPLAY = "860-999-3824";
export const PHONE_TEL = "tel:+18609993824";
export const PHONE_SMS = "sms:+18609993824";
export const EMAIL = "tyler@ragnar.realestate";
export const SERVICE_AREA = "Connecticut";
export const LEAD_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/5HhXvMiauehFEJ5BvaXR/webhook-trigger/72b06ceb-a316-4e57-a895-5be27868c2ea";

export interface NavLink {
  label: string;
  path: string;
}

export const NAV_PRIMARY: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "How We Help", path: "/#how-we-help" },
];

export const NAV_FORECLOSURE_GROUP: NavLink[] = [
  { label: "Foreclosure", path: "/foreclosure" },
  { label: "Tax Auction", path: "/tax-auction" },
  { label: "Distressed", path: "/distressed" },
];

export const NAV_PROBATE_GROUP: NavLink[] = [
  { label: "Probate", path: "/probate" },
  { label: "Pre-Probate", path: "/pre-probate" },
  { label: "Inherited", path: "/inherited" },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "Foreclosure", path: "/foreclosure" },
  { label: "Tax Auction", path: "/tax-auction" },
  { label: "Distressed", path: "/distressed" },
  { label: "Probate", path: "/probate" },
  { label: "Pre-Probate", path: "/pre-probate" },
  { label: "Inherited", path: "/inherited" },
  { label: "Sell My Home", path: "/fair-offer" },
];

export const SITUATION_OPTIONS = [
  "Foreclosure",
  "Tax Auction",
  "Distressed",
  "Probate",
  "Pre-Probate",
  "Inherited",
  "Just want a fair offer",
] as const;
