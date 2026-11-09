import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

const tasks = [
  {
    title: "Schedule meeting with",
    badge: { text: "Today", color: "bg-error" },
    avatars: [
      "https://cdn.21st.dev/assets/localized/b020aa24ee57ae2e65d4dc3bb0c614323b4a628e35d086788ae732ed812f7aab.jpg",
      "https://cdn.21st.dev/assets/localized/959bccaa33380a77a212b6b91d1cf4e7cd4f5fd36a30c7c8853ef11b315bdb07.jpg",
      "https://cdn.21st.dev/assets/localized/65b6494996ce0c948031c81bb50235c6338a447c747ec906381d4207e89a022b.jpg",
    ],
  },
  {
    title: "Give Purchase report to",
    badge: { text: "Yesterday", color: "bg-primary" },
    avatars: [
      "https://cdn.21st.dev/assets/localized/c58208f737e7c6a752a1f1175c002f80db14dae3cd81e3b12131345b8e88905d.jpg",
      "https://cdn.21st.dev/assets/localized/d617dace179afe86fb22045bf74f2c12a734154379272478cbac386298d4e9da.jpg",
    ],
  },
  {
    title: "Book flight for holiday",
    badge: { text: "1 week", color: "bg-primary" },
    date: "26 Jun 2024",
  },
  {
    title: "Forward all tasks",
    badge: { text: "2 weeks", color: "bg-secondary" },
    date: "26 Jun 2024",
  },
  {
    title: "Receive shipment",
    badge: { text: "2 weeks", color: "bg-success" },
    avatars: [
      "https://cdn.21st.dev/assets/localized/4c14163478f726fb2b50efc70b348e59bab3bb1abea599a7e49f0fc7337d0135.jpg",
      "https://cdn.21st.dev/assets/localized/9c1430390800d8eecccb60197fc5c6f3db27da1bfd4035826450238607836f53.jpg",
      "https://cdn.21st.dev/assets/localized/09e470e74fd17a0ec1cd6c2f6f1ab77e850ad46993877591d2dce5824de4bfd2.jpg",
    ],
  },
];

const TaskLists = () => {
  return (
    <Card className="pb-4 p-0">
      <h3 className="text-lg font-semibold text-dark dark:text-white p-7">
        Task List
      </h3>

      <div className="flex flex-col gap-6 px-7 pb-6">
        {tasks.map((task, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Checkbox id={`task-${index}`} />
              <label
                htmlFor={`task-${index}`}
                className="flex-1 text-sm font-medium cursor-pointer"
              >
                {task.title}
              </label>
              <Badge className={`${task.badge.color} text-white`}>
                {task.badge.text}
              </Badge>
            </div>

            <div className="pl-7 flex items-center gap-2">
              {task.date && (
                <p className="text-xs text-muted-foreground">{task.date}</p>
              )}
              {task.avatars && (
                <div className="flex -space-x-2">
                  {task.avatars.map((src, i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={i}
                      src={src}
                      alt="user"
                      width={30}
                      height={30}
                      className="rounded-full border border-white dark:border-gray-800"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TaskLists;
