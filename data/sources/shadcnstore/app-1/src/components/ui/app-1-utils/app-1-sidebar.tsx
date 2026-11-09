'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/app-1-utils/sidebar'

import { app1Nav, app1Team, app1User } from "@/components/ui/app-1-utils/app-1-data"

function BrandMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M26 24.75C26.4142 24.75 26.75 24.4142 26.75 24C26.75 23.5858 26.4142 23.25 26 23.25V24.75ZM26 23.25H11V24.75H26V23.25ZM8.75 21V15H7.25V21H8.75ZM11 23.25C9.75736 23.25 8.75 22.2426 8.75 21H7.25C7.25 23.0711 8.92893 24.75 11 24.75V23.25Z"
        fill="currentColor"
      />
      <path
        d="M1.5 3.25C1.08579 3.25 0.75 3.58579 0.75 4C0.75 4.41421 1.08579 4.75 1.5 4.75V3.25ZM1.5 4.75H6V3.25H1.5V4.75ZM7.25 6V21H8.75V6H7.25ZM6 4.75C6.69036 4.75 7.25 5.30964 7.25 6H8.75C8.75 4.48122 7.51878 3.25 6 3.25V4.75Z"
        fill="currentColor"
      />
      <path
        d="M22 21.75C22.4142 21.75 22.75 21.4142 22.75 21C22.75 20.5858 22.4142 20.25 22 20.25V21.75ZM22 20.25H11V21.75H22V20.25ZM8.75 18V12H7.25V18H8.75ZM11 20.25C9.75736 20.25 8.75 19.2426 8.75 18H7.25C7.25 20.0711 8.92893 21.75 11 21.75V20.25Z"
        fill="currentColor"
      />
      <path
        d="M27.2057 19.754C27.0654 20.1438 26.6357 20.346 26.246 20.2057C25.8562 20.0654 25.654 19.6357 25.7943 19.246L27.2057 19.754ZM30.0361 9.67744L29.3305 9.4234L29.3305 9.4234L30.0361 9.67744ZM25.7943 19.246L29.3305 9.4234L30.7418 9.93148L27.2057 19.754L25.7943 19.246ZM28.1543 7.75L8 7.75V6.25L28.1543 6.25V7.75ZM29.3305 9.4234C29.6237 8.60882 29.0201 7.75 28.1543 7.75V6.25C30.059 6.25 31.3869 8.13941 30.7418 9.93148L29.3305 9.4234Z"
        fill="currentColor"
      />
      <path
        d="M13.5 21.75C13.0858 21.75 12.75 21.4142 12.75 21C12.75 20.5858 13.0858 20.25 13.5 20.25V21.75ZM26.7111 19.009L27.4174 19.2613L27.4174 19.2613L26.7111 19.009ZM13.5 20.25H23.8858V21.75H13.5V20.25ZM26.0048 18.7568L27.7937 13.7477L29.2063 14.2523L27.4174 19.2613L26.0048 18.7568ZM23.8858 20.25C24.8367 20.25 25.6849 19.6522 26.0048 18.7568L27.4174 19.2613C26.8843 20.7537 25.4706 21.75 23.8858 21.75V20.25Z"
        fill="currentColor"
      />
      <path d="M21.1694 10.5806L14.5651 17.1849" stroke="currentColor" />
      <path d="M22.1694 14.5806L18.5632 18.1868" stroke="currentColor" />
      <circle cx="13.1" cy="26.1" r="1.7" stroke="currentColor" />
      <circle cx="22.1" cy="26.1" r="1.7" stroke="currentColor" />
    </svg>
  )
}

/**
 * Built on the Sidebar primitive rather than a hand-rolled fixed panel: it brings the mobile
 * sheet, the focus trap and the `sidebar_state` cookie for free. SidebarInset must stay a direct
 * sibling of Sidebar.
 */
export function App1Sidebar() {
  const { setOpenMobile } = useSidebar()

  return (
    <Sidebar>
      <SidebarHeader>
        <a
          href="#dashboard"
          className="flex min-h-11 items-center gap-2 rounded-lg px-2 font-semibold"
          onClick={() => setOpenMobile(false)}
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary p-1.5 text-primary-foreground">
            <BrandMark className="size-full" />
          </span>
          ShadcnStore
        </a>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <nav aria-label="Dashboard">
              <SidebarMenu>
                {app1Nav.map(item => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      isActive={item.current}
                      render={
                        <a
                          href={item.href}
                          aria-current={item.current ? 'page' : undefined}
                          onClick={() => setOpenMobile(false)}
                        />
                      }
                    >
                      <item.icon />
                      <span>{item.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </nav>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Presence fills what would otherwise be a column of dead space under seven nav links. */}
        <SidebarGroup>
          <SidebarGroupLabel>Your team</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {app1Team.map(member => (
                <SidebarMenuItem key={member.name}>
                  <SidebarMenuButton render={<a href="#team" onClick={() => setOpenMobile(false)} />}>
                    <span className="relative shrink-0">
                      <Avatar className="size-6">
                        <AvatarImage src={member.avatar} alt="" className="object-[50%_15%]" />
                        <AvatarFallback className="text-[10px]">{member.initials}</AvatarFallback>
                      </Avatar>
                      {member.online ? (
                        <span
                          aria-hidden
                          className="absolute right-0 bottom-0 size-2 rounded-full border-2 border-sidebar bg-primary"
                        />
                      ) : null}
                    </span>
                    <span className="truncate">{member.name}</span>
                    <span className="ml-auto shrink-0 text-xs opacity-70">{member.role}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="min-h-12">
              <Avatar className="size-7">
                <AvatarImage src={app1User.avatar} alt="" className="object-[50%_15%]" />
                <AvatarFallback>{app1User.initials}</AvatarFallback>
              </Avatar>
              <span className="min-w-0 flex-1 text-left">
                <span className="block truncate font-medium">{app1User.name}</span>
                <span className="block truncate text-xs opacity-70">{app1User.email}</span>
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default App1Sidebar
