import type { StaticImageData } from "next/image";
import foreclosureSurplus from "@/assets/services/foreclosure-surplus.png";
import taxSaleExcessProceeds from "@/assets/services/tax-sale-excess-proceeds.png";
import bankruptcyUnclaimedFunds from "@/assets/services/bankruptcy-unclaimed-funds.png";
import heirEstateRecovery from "@/assets/services/heir-estate-recovery.png";
import businessLlcAssets from "@/assets/services/business-llc-assets.png";
import unclaimedAssets from "@/assets/services/unclaimed-assets.png";

export const serviceImages: Record<string, StaticImageData> = {
  "foreclosure-surplus": foreclosureSurplus,
  "tax-sale-excess-proceeds": taxSaleExcessProceeds,
  "bankruptcy-unclaimed-funds": bankruptcyUnclaimedFunds,
  "heir-estate-recovery": heirEstateRecovery,
  "business-llc-assets": businessLlcAssets,
  "unclaimed-assets": unclaimedAssets,
};
