import { FileTextIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/v-breadcrumb-10-utils/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/v-breadcrumb-10-utils/breadcrumb";
import { Frame, FramePanel } from "@/components/ui/v-breadcrumb-10-utils/frame";

export function Pattern() {
  return (
    <Frame>
      <FramePanel>
        <Breadcrumb>
          <BreadcrumbList className="gap-3">
            <BreadcrumbItem>
              <BreadcrumbLink
                className="flex items-center gap-2 text-foreground"
                href="#"
              >
                <Avatar className="size-6">
                  <AvatarImage src="https://cdn.21st.dev/assets/mirror/75/750f6ec055e825533be5a5f62844312beeb7f41870eac9fa7d1e168f9f352246.png" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator className="text-muted-foreground/60">
              /
            </BreadcrumbSeparator>

            <BreadcrumbItem>
              <BreadcrumbLink className="flex items-center gap-3" href="#">
                <Avatar className="size-6">
                  <AvatarImage
                    className="object-cover"
                    src="https://cdn.21st.dev/assets/mirror/51/513d06f542692036ff0bb17938f04b3efd60567ba2cae08049469d21f18e0524.jpg"
                  />
                  <AvatarFallback>MP</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium text-foreground leading-tight">
                    shadcn
                  </span>
                  <span className="text-muted-foreground leading-tight">
                    ui@shadcn.com
                  </span>
                </div>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator className="text-muted-foreground/60">
              /
            </BreadcrumbSeparator>

            <BreadcrumbItem>
              <BreadcrumbPage className="flex items-center gap-2.5">
                <span className="flex size-6 items-center justify-center rounded-md bg-sky-100 text-sky-500 dark:bg-sky-500/10 dark:text-sky-400">
                  <FileTextIcon className="size-3.5" />
                </span>
                <div className="flex flex-col">
                  <span className="font-medium text-foreground leading-tight">
                    Document
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground leading-tight">
                    agents.md
                  </span>
                </div>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </FramePanel>
    </Frame>
  );
}

export default Pattern;
