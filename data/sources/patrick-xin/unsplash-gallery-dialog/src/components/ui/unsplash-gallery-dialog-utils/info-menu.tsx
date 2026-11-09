import { InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/unsplash-gallery-dialog-utils/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/unsplash-gallery-dialog-utils/popover";
import { Tabs, TabsListContent, TabsPanel, TabsTab } from "@/components/ui/unsplash-gallery-dialog-utils/tabs";
import { StatsChart } from "@/components/ui/unsplash-gallery-dialog-utils/stats-chart";

export const InfoMenu = () => {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        <InfoIcon /> Info
      </PopoverTrigger>
      <PopoverContent align="end" className="bg-secondary" side="top">
        <Tabs className="w-72" defaultValue="views">
          <TabsPanel value="downloads">
            <StatsChart data="downloads" />
          </TabsPanel>
          <TabsPanel value="views">
            <StatsChart data="views" />
          </TabsPanel>
          <TabsListContent>
            <TabsTab value="downloads">Downloads</TabsTab>
            <TabsTab value="views">Views</TabsTab>
          </TabsListContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
};
