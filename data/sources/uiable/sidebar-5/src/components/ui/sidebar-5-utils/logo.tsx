"use client"

// third-party
import { cn } from "cn"

// project-imports
import branding from "@/components/ui/sidebar-5-utils/branding.json"
import LightLogo from "@/components/ui/sidebar-5-utils/light-logo"
import DarkLogo from "@/components/ui/sidebar-5-utils/dark-logo"

// assets
const brandFavLogo = "https://cdn.21st.dev/assets/localized/1537d1c469685a2245bbc059417ffeaee915e47605eeb5ad6f1c5412e22808ed.svg"

interface LogoProps {
  className?: string
  link?: boolean
  href?: string
}

//  ------------------------------ | SHARED - LOGO | ------------------------------  //

export default function Logo({
  className,
  link = true,
  href = "/",
}: LogoProps) {
  const content = (
    <>
      <div className="hidden dark:block">
        <DarkLogo
          className={cn("group-data-[collapsible=icon]:hidden", className)}
        />
        <img
          src={brandFavLogo}
          alt={`${branding.brandName} Logo`}
          className={cn(
            "hidden group-data-[collapsible=icon]:block",
            className
          )}
        />
      </div>
      <div className="block dark:hidden">
        <LightLogo
          className={cn("group-data-[collapsible=icon]:hidden", className)}
        />
        <img
          src={brandFavLogo}
          alt={`${branding.brandName} Logo`}
          className={cn(
            "hidden group-data-[collapsible=icon]:block",
            className
          )}
        />
      </div>
    </>
  )

  const containerClassName = cn("group flex items-center gap-3", className)

  if (!link) {
    return <div className={containerClassName}>{content}</div>
  }

  return (
    <a
      href={href}
      aria-label={`${branding.brandName} Home`}
      className={containerClassName}
    >
      {content}
    </a>
  )
}
