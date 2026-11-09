import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

const InviteMemberCard = () => {
  return (
    <div className="max-w-sm mx-auto px-4 w-full">
      <Card>
        <CardContent>
          <Empty className="h-56 border border-dashed">
            <EmptyHeader>
              <EmptyMedia>
                <div className="flex -space-x-2">
                  <Avatar size="lg">
                    <AvatarImage
                      src="https://cdn.21st.dev/assets/localized/c5ee2e124ea7334450d30a46607f793534f567e97d4b708cda110a06aeed4953.webp"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <Avatar size="lg">
                    <AvatarImage
                      src="https://cdn.21st.dev/assets/localized/2bc5f22fa3400c61a2161d14e3dce5a0804badebfc1b3d9cbe844feaa3b72180.webp"
                      alt="@maxleiter"
                    />
                  </Avatar>
                  <Avatar size="lg">
                    <AvatarImage
                      src="https://cdn.21st.dev/assets/localized/61fda783ca2662349458bad61a434038016f05d6a14bd7c5a314f48c8ee8be03.webp"
                      alt="@evilrabbit"
                    />
                  </Avatar>
                </div>
              </EmptyMedia>
              <EmptyTitle>No Team Members</EmptyTitle>
              <EmptyDescription>
                Invite your team to collaborate on this project.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button size="sm" className="cursor-pointer hover:bg-primary/80">
                Invite Members
              </Button>
            </EmptyContent>
          </Empty>
        </CardContent>
      </Card>
    </div>
  );
};

export default InviteMemberCard;
