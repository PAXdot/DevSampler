import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/v-breadcrumb-6-utils/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/v-breadcrumb-6-utils/breadcrumb";

export function Pattern() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="flex items-center gap-2" href="#">
            <Avatar className="size-5 rounded-sm">
              <AvatarImage src="https://cdn.21st.dev/assets/mirror/75/750f6ec055e825533be5a5f62844312beeb7f41870eac9fa7d1e168f9f352246.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            Vercel
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink className="flex items-center gap-2" href="#">
            <Avatar className="size-5">
              <AvatarImage src="https://cdn.21st.dev/assets/mirror/51/513d06f542692036ff0bb17938f04b3efd60567ba2cae08049469d21f18e0524.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            @shadcn
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Projects</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default Pattern;
