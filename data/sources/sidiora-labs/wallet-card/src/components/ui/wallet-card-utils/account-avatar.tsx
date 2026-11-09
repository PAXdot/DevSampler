import { cn } from "@/lib/utils";
import type { WalletAccount } from "@/components/ui/wallet-card-utils/types";
import { diceBearGlassUrl } from "@/components/ui/wallet-card-utils/utils";

export function AccountAvatar({
  account,
  className,
}: {
  account: WalletAccount;
  className?: string;
}) {
  if (account.avatar) return <>{account.avatar}</>;
  return (
    <img
      src={diceBearGlassUrl(account.id || account.address)}
      alt={account.name}
      className={cn("h-7 w-7 shrink-0 rounded-full bg-muted", className)}
    />
  );
}
