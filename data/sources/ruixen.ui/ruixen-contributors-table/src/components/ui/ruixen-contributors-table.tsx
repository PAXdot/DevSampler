"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Eye } from "lucide-react";

type Contributor = {
  name: string;
  email: string;
  avatar: string;
  role: string;
};

type Project = {
  id: string;
  title: string;
  repo: string;
  status: "Active" | "Inactive" | "In Progress";
  team: string;
  tech: string;
  createdAt: string;
  contributors: Contributor[];
};

const data: Project[] = [
    {
      id: "1",
      title: "ShadCN Clone",
      repo: "https://github.com/ruixenui/ruixen-buttons",
      status: "Active",
      team: "UI Guild",
      tech: "Next.js",
      createdAt: "2024-06-01",
      contributors: [
        {
          name: "Srinath G",
          email: "srinath@example.com",
          avatar: "https://cdn.21st.dev/assets/mirror/33/331e4760fa2f7f7834e35a787ea289f11d6ec2d2773ceb3bce7b98a2a49f10da.jpg",
          role: "UI Lead",
        },
        {
          name: "Kavya M",
          email: "kavya@example.com",
          avatar: "https://cdn.21st.dev/assets/mirror/c6/c638637ffda9f22b79ca10c2a690acf947d9303b9c2a3f751aec52c81d8cbe0f.png",
          role: "Designer",
        },
      ],
    },
    {
      id: "2",
      title: "RUIXEN Components",
      repo: "https://github.com/ruixenui/ruixen-buttons",
      status: "In Progress",
      team: "Component Devs",
      tech: "React",
      createdAt: "2024-05-22",
      contributors: [
        {
          name: "Arjun R",
          email: "arjun@example.com",
          avatar: "https://cdn.21st.dev/assets/mirror/c8/c815e7dad88f6183cbc75d466e65087c41cd9fe2dff70565e8fba2a9b291bcc2.jpg",
          role: "Developer",
        },
        {
          name: "Divya S",
          email: "divya@example.com",
          avatar: "https://cdn.21st.dev/assets/mirror/73/73ccf020cb96ad84ddff87e87b1ee262e7d3a5858dada6558c09cbc1657f9eb3.png",
          role: "QA",
        },
        {
          name: "Nikhil V",
          email: "nikhil@example.com",
          avatar: "https://cdn.21st.dev/assets/mirror/07/073e171f5f717c8f2a38ad2cbcccbc8682bfe2e9ddd1eb59039487d23b932e72.jpg",
          role: "UX",
        },
      ],
    },
    {
      id: "3",
      title: "CV Jobs Platform",
      repo: "https://github.com/ruixenui/ruixen-buttons",
      status: "Active",
      team: "CV Core",
      tech: "Spring Boot",
      createdAt: "2024-06-05",
      contributors: [
        {
          name: "Manoj T",
          email: "manoj@example.com",
          avatar: "https://cdn.21st.dev/assets/mirror/9a/9aa753f01672ee57327c688af7f52526f6d9d30fd82cfe80a9af990dce7212ed.jpg",
          role: "Backend Lead",
        },
      ],
    },
    {
      id: "4",
      title: "Ruixen UI Docs",
      repo: "https://github.com/ruixenui/ruixen-buttons",
      status: "Active",
      team: "Tech Writers",
      tech: "Markdown + Docusaurus",
      createdAt: "2024-04-19",
      contributors: [
        {
          name: "Sneha R",
          email: "sneha@example.com",
          avatar: "https://cdn.21st.dev/assets/mirror/03/03298da7ce3d5641fa55aed72e86383c2bddcfe0acdcbde3a3f15a3f1570cd46.jpg",
          role: "Documentation",
        },
        {
          name: "Vinay K",
          email: "vinay@example.com",
          avatar: "https://cdn.21st.dev/assets/mirror/b1/b197d4975317fe15f245831f500349cdab95cbd8f049214c8af91fdc6313b2cb.jpg",
          role: "Maintainer",
        },
      ],
    },
    {
      id: "5",
      title: "Job Portal Analytics",
      repo: "https://github.com/ruixenui/ruixen-buttons",
      status: "Active",
      team: "Data Squad",
      tech: "Python",
      createdAt: "2024-03-30",
      contributors: [
        {
          name: "Aarav N",
          email: "aarav@example.com",
          avatar: "https://cdn.21st.dev/assets/mirror/fd/fdf27e61415ee2734f63088a992bfcc6983968d0b8a1428cbcfdfb5ae2c9fa00.png",
          role: "Data Engineer",
        },
      ],
    },
    {
      id: "6",
      title: "Real-time Chat",
      repo: "https://github.com/ruixenui/ruixen-buttons",
      status: "Active",
      team: "Infra",
      tech: "Socket.io",
      createdAt: "2024-06-03",
      contributors: [
        {
          name: "Neha L",
          email: "neha@example.com",
          avatar: "https://cdn.21st.dev/assets/mirror/45/458d3c35fcc048163800390583d82e827653ceacecb9a10435d4620add15362e.jpg",
          role: "DevOps",
        },
        {
          name: "Raghav I",
          email: "raghav@example.com",
          avatar: "https://cdn.21st.dev/assets/mirror/a3/a30fbb2f83a2983a14d56838f254c21b081bfd7b11ab130276a326154d712159.png",
          role: "NodeJS Engineer",
        },
      ],
    },
    {
      id: "7",
      title: "RUX Theme Builder",
      repo: "https://github.com/ruixenui/ruixen-buttons",
      status: "Active",
      team: "Design Systems",
      tech: "Tailwind CSS",
      createdAt: "2024-05-10",
      contributors: [
        {
          name: "Ishita D",
          email: "ishita@example.com",
          avatar: "https://cdn.21st.dev/assets/mirror/2f/2f7c45c679b90555d8a9806557705b358be133b3c0730ea0c354ef7a6896e399.png",
          role: "Design Engineer",
        },
      ],
    },
    {
      id: "8",
      title: "Admin Dashboard",
      repo: "https://github.com/ruixenui/ruixen-buttons",
      status: "Active",
      team: "Dashboard Core",
      tech: "Remix",
      createdAt: "2024-05-28",
      contributors: [
        {
          name: "Rahul B",
          email: "rahul@example.com",
          avatar: "https://cdn.21st.dev/assets/mirror/c3/c37cada22a73e1c2e77c660259084605cd9be48c1de2c799c27f39ade5981c17.jpg",
          role: "Fullstack",
        },
      ],
    },
    {
      id: "9",
      title: "OpenCV Blog Engine",
      repo: "https://github.com/ruixenui/ruixen-buttons",
      status: "Active",
      team: "Platform",
      tech: "Node.js",
      createdAt: "2024-01-18",
      contributors: [
        {
          name: "Sanya A",
          email: "sanya@example.com",
          avatar: "https://cdn.21st.dev/assets/mirror/b4/b47f7ccdec9e2409628d0e86b3f8112d4652d112f170a0bed4703cc50b5729ed.png",
          role: "API Developer",
        },
        {
          name: "Harshit V",
          email: "harshit@example.com",
          avatar: "https://cdn.21st.dev/assets/mirror/6c/6c1b712d2db2207f6370dfda137cc631118b03972a734e37bf4b38c755a8bee8.png",
          role: "Platform Architect",
        },
      ],
    },
    {
      id: "10",
      title: "Dark Mode Toggle Package",
      repo: "https://github.com/ruixenui/ruixen-buttons",
      status: "Active",
      team: "Component Devs",
      tech: "TypeScript",
      createdAt: "2024-06-02",
      contributors: [
        {
          name: "Meera C",
          email: "meera@example.com",
          avatar: "https://cdn.21st.dev/assets/mirror/2c/2cfd71d8a5838d687a5e655b55e80971c204708965fcfc40da721c2bb907cc24.png",
          role: "Package Maintainer",
        },
      ],
    },
  ];
  

const allColumns = [
  "Project",
  "Repository",
  "Team",
  "Tech",
  "Created At",
  "Contributors",
  "Status",
] as const;

function ContributorsTable() {
  const [visibleColumns, setVisibleColumns] = useState<string[]>([...allColumns]);
  const [statusFilter, setStatusFilter] = useState("");
  const [techFilter, setTechFilter] = useState("");

  const filteredData = data.filter((project) => {
    return (
      (!statusFilter || project.status === statusFilter) &&
      (!techFilter || project.tech.toLowerCase().includes(techFilter.toLowerCase()))
    );
  });

  const toggleColumn = (col: string) => {
    setVisibleColumns((prev) =>
      prev.includes(col)
        ? prev.filter((c) => c !== col)
        : [...prev, col]
    );
  };

  return (
        <div className="container my-10 space-y-4 p-4 border border-border rounded-lg bg-background shadow-sm overflow-x-auto">
      <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
        <div className="flex gap-2 flex-wrap">
          <Input
            placeholder="Filter by technology..."
            value={techFilter}
            onChange={(e) => setTechFilter(e.target.value)}
            className="w-48"
          />
          <Input
            placeholder="Filter by status..."
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-48"
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            {allColumns.map((col) => (
              <DropdownMenuCheckboxItem
                key={col}
                checked={visibleColumns.includes(col)}
                onCheckedChange={() => toggleColumn(col)}
              >
                {col}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Table className="w-full">
        <TableHeader>
          <TableRow>
            {visibleColumns.includes("Project") && <TableHead className="w-[180px]">Project</TableHead>}
            {visibleColumns.includes("Repository") && <TableHead className="w-[220px]">Repository</TableHead>}
            {visibleColumns.includes("Team") && <TableHead className="w-[150px]">Team</TableHead>}
            {visibleColumns.includes("Tech") && <TableHead className="w-[150px]">Tech</TableHead>}
            {visibleColumns.includes("Created At") && <TableHead className="w-[120px]">Created At</TableHead>}
            {visibleColumns.includes("Contributors") && <TableHead className="w-[150px]">Contributors</TableHead>}
            {visibleColumns.includes("Status") && <TableHead className="w-[100px]">Status</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.length ? (
            filteredData.map((project) => (
              <TableRow key={project.id}>
                {visibleColumns.includes("Project") && (
                  <TableCell className="font-medium whitespace-nowrap">{project.title}</TableCell>
                )}
                {visibleColumns.includes("Repository") && (
                  <TableCell className="whitespace-nowrap">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {project.repo.replace("https://", "")}
                    </a>
                  </TableCell>
                )}
                {visibleColumns.includes("Team") && <TableCell className="whitespace-nowrap">{project.team}</TableCell>}
                {visibleColumns.includes("Tech") && <TableCell className="whitespace-nowrap">{project.tech}</TableCell>}
                {visibleColumns.includes("Created At") && <TableCell className="whitespace-nowrap">{project.createdAt}</TableCell>}
                {visibleColumns.includes("Contributors") && (
                  <TableCell className="min-w-[120px]">
                    <div className="flex -space-x-2">
                      <TooltipProvider>
                        {project.contributors.map((contributor, idx) => (
                          <Tooltip key={idx}>
                            <TooltipTrigger asChild>
                              <Avatar className="h-8 w-8 ring-2 ring-white hover:z-10">
                                <AvatarImage src={contributor.avatar} alt={contributor.name} />
                                <AvatarFallback>{contributor.name[0]}</AvatarFallback>
                              </Avatar>
                            </TooltipTrigger>
                            <TooltipContent className="text-sm">
                              <p className="font-semibold">{contributor.name}</p>
                              <p className="text-xs text-muted-foreground">{contributor.email}</p>
                              <p className="text-xs italic">{contributor.role}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </TooltipProvider>
                    </div>
                  </TableCell>
                )}
                {visibleColumns.includes("Status") && (
                  <TableCell className="whitespace-nowrap">
                    <Badge
                      className={cn(
                        "whitespace-nowrap",
                        project.status === "Active" && "bg-green-500 text-white",
                        project.status === "Inactive" && "bg-gray-400 text-white",
                        project.status === "In Progress" && "bg-yellow-500 text-white",
                      )}
                    >
                      {project.status}
                    </Badge>
                  </TableCell>
                )}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={visibleColumns.length} className="text-center py-6">
                No results found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default ContributorsTable;