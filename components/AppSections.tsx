import { CardGrid } from "@/components/CardGrid";
import { Mark } from "@/components/Marks";
import { groupApps } from "@/lib/apps";
import type { Item } from "@/lib/types";

export function AppSections({
  items,
  heading,
  saved,
  onOpen,
  onToggleSave,
}: {
  items: Item[];
  heading: string;
  saved: Set<string>;
  onOpen: (item: Item) => void;
  onToggleSave: (item: Item) => void;
}) {
  const groups = groupApps(items);

  return (
    <div className="flex flex-col gap-14">
      {groups.map((group) => {
        const count = group.sections.reduce((sum, section) => sum + section.items.length, 0);
        const titled = heading === group.label;
        return (
          <section key={group.id} aria-labelledby={titled ? undefined : `app-group-${group.id}`} className="border-t border-white/10 pt-8 first:border-t-0 first:pt-0">
            {titled ? null : (
              <div className="mb-8">
                <h2 id={`app-group-${group.id}`} className="text-[15px] font-semibold">
                  {group.label}
                </h2>
                <p className="text-[13px] text-white/45">{count.toLocaleString("en")} apps</p>
              </div>
            )}
            <div className="flex flex-col gap-10">
              {group.sections.map((section) => (
                <div key={section.id}>
                  <h3 className="mb-3 flex items-center gap-2 text-[13px] font-medium text-white/80">
                    <Mark name={section.id} className="size-3.5 shrink-0 text-white/55" />
                    {section.label}
                    <span className="text-[12px] font-normal text-white/35 tabular-nums">{section.items.length}</span>
                  </h3>
                  <CardGrid shelf="apps" items={section.items} saved={saved} onOpen={onOpen} onToggleSave={onToggleSave} />
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
