"use client";

import * as React from "react";
import {
  sortFn_basic,
  sortFn_datetime,
  columnVisibilityFeature,
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  tableFeatures,
  useTable,
  createSortedRowModel,
  rowSortingFeature,
  columnFilteringFeature,
  createFilteredRowModel,
  createPaginatedRowModel,
  rowPaginationFeature,
  rowSelectionFeature,
} from "@tanstack/react-table";

const TABLE_FEATURES = tableFeatures({
  columnVisibilityFeature,
  rowSortingFeature,
  columnFilteringFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  sortedRowModel: createSortedRowModel(),
  filteredRowModel: createFilteredRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  sortFns: {
    datetime: sortFn_datetime,
    basic: sortFn_basic,
  },
});
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/table-2-utils/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/table-2-utils/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/table-2-utils/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IconPlaceholder } from "@/components/ui/table-2-utils/icon-placeholder";

type PaymentStatus = "Paid" | "Pending" | "Overdue" | "Refunded";

type Invoice = {
  id: string;
  client: string;
  initials: string;
  avatar: string;
  project: string;
  amount: number;
  method: string;
  due: string;
  status: PaymentStatus;
};

const statusConfig: Record<
  PaymentStatus,
  { variant: "default" | "secondary" | "destructive" | "outline"; dot: string }
> = {
  Paid: { variant: "default", dot: "bg-primary-foreground" },
  Pending: { variant: "secondary", dot: "bg-muted-foreground" },
  Overdue: { variant: "destructive", dot: "bg-destructive" },
  Refunded: { variant: "outline", dot: "bg-muted-foreground" },
};

const invoices: Invoice[] = [
  {
    id: "INV-0041",
    client: "Miriam Okafor",
    initials: "MO",
    avatar: "https://cdn.21st.dev/assets/mirror/aa/aae06c24559f1a9f0d8d3a9b65a4af9eca2b28905906ba52df2028ccc2c18336.jpg",
    project: "Brand Refresh",
    amount: 4200,
    method: "Wire Transfer",
    due: "2026-06-30",
    status: "Pending",
  },
  {
    id: "INV-0040",
    client: "Theo Hartmann",
    initials: "TH",
    avatar: "https://cdn.21st.dev/assets/mirror/51/511e8a28ad384d1692e249771c5da88414ce778aec74ea21451d519db92e0038.jpg",
    project: "API Integration",
    amount: 1850,
    method: "Credit Card",
    due: "2026-06-15",
    status: "Paid",
  },
  {
    id: "INV-0039",
    client: "Suki Nakamura",
    initials: "SN",
    avatar: "https://cdn.21st.dev/assets/mirror/19/198d85287fcb883a1bb9f1c885d0c1d764781ea2e3cd33d318cb459a85374c7b.jpg",
    project: "Dashboard UI",
    amount: 6500,
    method: "ACH",
    due: "2026-06-01",
    status: "Overdue",
  },
  {
    id: "INV-0038",
    client: "Elias Ferreira",
    initials: "EF",
    avatar: "https://cdn.21st.dev/assets/mirror/f1/f191acaafe8824e970463d43ca53946b27ef62dc0a2ffd81d4447d2c36979cb4.jpg",
    project: "Mobile App MVP",
    amount: 9000,
    method: "Wire Transfer",
    due: "2026-05-28",
    status: "Paid",
  },
  {
    id: "INV-0037",
    client: "Priya Menon",
    initials: "PM",
    avatar: "https://cdn.21st.dev/assets/mirror/ef/efa4588438ae036b2bd56afe4ce391a270df71729898ae9119d486c68ca943b8.jpg",
    project: "SEO Audit",
    amount: 780,
    method: "Credit Card",
    due: "2026-05-10",
    status: "Refunded",
  },
  {
    id: "INV-0036",
    client: "Dmitri Volkov",
    initials: "DV",
    avatar: "https://cdn.21st.dev/assets/mirror/ac/ac9c53a00de9dbc0d8733c544cb6f33f58bfe72943ec1c90f235716887ade7fa.jpg",
    project: "Data Pipeline",
    amount: 3350,
    method: "ACH",
    due: "2026-04-25",
    status: "Paid",
  },
  {
    id: "INV-0035",
    client: "Amara Diallo",
    initials: "AD",
    avatar: "https://cdn.21st.dev/assets/mirror/53/5318bbb9114e8063402900ae1541911133b3a8b8d53275fafc7d06309581c481.jpg",
    project: "Design System",
    amount: 5400,
    method: "Wire Transfer",
    due: "2026-06-22",
    status: "Pending",
  },
  {
    id: "INV-0034",
    client: "Noah Bergström",
    initials: "NB",
    avatar: "https://cdn.21st.dev/assets/mirror/da/daace32991f4216fa2ec402ffa1f71ee330c87c398063dd890bc3ca8a774c5e9.jpg",
    project: "Marketing Site",
    amount: 2100,
    method: "Credit Card",
    due: "2026-04-18",
    status: "Paid",
  },
  {
    id: "INV-0033",
    client: "Lucia Romano",
    initials: "LR",
    avatar: "https://cdn.21st.dev/assets/mirror/31/3118a54b2d19d72a16199951606fd3adc8476ea37bb80249afbeec493edf5263.jpg",
    project: "Onboarding Flow",
    amount: 3950,
    method: "ACH",
    due: "2026-05-31",
    status: "Overdue",
  },
  {
    id: "INV-0032",
    client: "Kwame Mensah",
    initials: "KM",
    avatar: "https://cdn.21st.dev/assets/mirror/0f/0f13af308f416a759fba7631d1b0f5250d783edd99e9aa0e3e9374841e5206d8.jpg",
    project: "Analytics Setup",
    amount: 1280,
    method: "Credit Card",
    due: "2026-04-09",
    status: "Paid",
  },
  {
    id: "INV-0031",
    client: "Ingrid Larsen",
    initials: "IL",
    avatar: "https://cdn.21st.dev/assets/mirror/77/77b24a6ef5f60a13e6da638506c161e414aabe9c28fde9ddc9416826a9fc6cd4.jpg",
    project: "Accessibility Pass",
    amount: 2650,
    method: "Wire Transfer",
    due: "2026-06-12",
    status: "Pending",
  },
  {
    id: "INV-0030",
    client: "Mateo Castillo",
    initials: "MC",
    avatar: "https://cdn.21st.dev/assets/mirror/6b/6bfe57db510ea4a7faa6b39f90b7ec15658233f079d0bac3ef425859f211b0b2.jpg",
    project: "Checkout Rebuild",
    amount: 7300,
    method: "ACH",
    due: "2026-03-30",
    status: "Refunded",
  },
  {
    id: "INV-0029",
    client: "Yuki Tanaka",
    initials: "YT",
    avatar: "https://cdn.21st.dev/assets/mirror/44/44d7b692dce7679d125396bf6eb4f0ed528dc8b834e73f163115941d1c3218ef.jpg",
    project: "Email Templates",
    amount: 940,
    method: "Credit Card",
    due: "2026-03-22",
    status: "Paid",
  },
  {
    id: "INV-0028",
    client: "Fatima Zahra",
    initials: "FZ",
    avatar: "https://cdn.21st.dev/assets/mirror/b7/b75d060316c98cfd2dec3eab22d1eb010a9d8df4b26d5957d03eff7eb10ded12.jpg",
    project: "Localization",
    amount: 4880,
    method: "Wire Transfer",
    due: "2026-05-19",
    status: "Overdue",
  },
  {
    id: "INV-0027",
    client: "Oscar Lindqvist",
    initials: "OL",
    avatar: "https://cdn.21st.dev/assets/mirror/28/288823a84894781242bf1082936537b8efe5a1fdd4794edffb030444d8a314c9.jpg",
    project: "CMS Migration",
    amount: 6150,
    method: "ACH",
    due: "2026-06-05",
    status: "Pending",
  },
  {
    id: "INV-0026",
    client: "Hana Novak",
    initials: "HN",
    avatar: "https://cdn.21st.dev/assets/mirror/c0/c0343948e45281027b004b3ffe9dcff420da60fd519ffc5fb07aa3234748c0af.jpg",
    project: "Component Audit",
    amount: 1720,
    method: "Credit Card",
    due: "2026-03-14",
    status: "Paid",
  },
  {
    id: "INV-0025",
    client: "Bilal Haddad",
    initials: "BH",
    avatar: "https://cdn.21st.dev/assets/mirror/83/830f976a24975b5bde710b97f173f8172a7ee959e4a778d6af78fa36ed87735f.jpg",
    project: "Search Revamp",
    amount: 5230,
    method: "Wire Transfer",
    due: "2026-05-02",
    status: "Overdue",
  },
  {
    id: "INV-0024",
    client: "Sienna Walsh",
    initials: "SW",
    avatar: "https://cdn.21st.dev/assets/mirror/ff/ff69e06d986306dd387813d2e4f8afda62c6ee5f9fbc7bb83dc69b323b9d3869.jpg",
    project: "Pricing Page",
    amount: 1360,
    method: "Credit Card",
    due: "2026-02-26",
    status: "Paid",
  },
];

const fmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

const dateFmt = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
});

function formatDate(value: string) {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? value : dateFmt.format(parsed);
}

const outstanding = invoices
  .filter((i) => i.status === "Pending" || i.status === "Overdue")
  .reduce((sum, i) => sum + i.amount, 0);

function SortIcon({ sorted }: { sorted: false | "asc" | "desc" }) {
  if (sorted === "asc")
    return (
      <IconPlaceholder
        lucide="ArrowUp"
        tabler="IconArrowUp"
        hugeicons="ArrowUpIcon"
        phosphor="ArrowUp"
        remixicon="RiArrowUpLine"
        className="size-3.5"
        aria-hidden="true"
      />
    );
  if (sorted === "desc")
    return (
      <IconPlaceholder
        lucide="ArrowDown"
        tabler="IconArrowDown"
        hugeicons="ArrowDownIcon"
        phosphor="ArrowDown"
        remixicon="RiArrowDownLine"
        className="size-3.5"
        aria-hidden="true"
      />
    );
  return (
    <IconPlaceholder
      lucide="ChevronsUpDown"
      tabler="IconArrowsVertical"
      hugeicons="ArrowUpDownIcon"
      phosphor="CaretUpDown"
      remixicon="RiExpandUpDownLine"
      className="size-3.5 text-muted-foreground/60"
      aria-hidden="true"
    />
  );
}

const headLabel =
  "text-xs font-semibold tracking-wider text-muted-foreground uppercase";
const sortButton =
  "-mx-1 inline-flex items-center gap-1 rounded-md px-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase transition-colors hover:text-foreground";

const columns: ColumnDef<typeof TABLE_FEATURES, Invoice>[] = [
  {
    id: "select",
    enableSorting: false,
    enableHiding: false,
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        indeterminate={
          table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()
        }
        onCheckedChange={(checked) =>
          table.toggleAllPageRowsSelected(checked === true)
        }
        aria-label="Select all invoices on this page"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(checked) => row.toggleSelected(checked === true)}
        aria-label={`Select ${row.original.id}`}
      />
    ),
  },
  {
    accessorKey: "id",
    header: () => <span className={headLabel}>Invoice</span>,
    cell: ({ row }) => (
      <span className="font-mono text-xs text-muted-foreground">
        {row.original.id}
      </span>
    ),
  },
  {
    accessorKey: "client",
    // A column with no `filterFn` does not filter: the value round-trips
    // through `getFilterValue()`, so the input looks live while the rows never
    // change. Declared explicitly, as the other filtering tables here do.
    filterFn: (row, _id, value: string) =>
      row.original.client.toLowerCase().includes(value.toLowerCase()),
    header: ({ column }) => (
      <button
        type="button"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={sortButton}
      >
        Client
        <SortIcon sorted={column.getIsSorted()} />
      </button>
    ),
    cell: ({ row }) => {
      const invoice = row.original;
      return (
        <div className="flex min-w-0 items-center gap-2.5">
          <Avatar size="sm" className="shrink-0 border border-border">
            <AvatarImage
              src={invoice.avatar}
              alt={invoice.client}
              className="grayscale"
            />
            <AvatarFallback className="text-[10px]">
              {invoice.initials}
            </AvatarFallback>
          </Avatar>
          <span className="truncate text-sm font-medium text-foreground">
            {invoice.client}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "project",
    enableSorting: false,
    header: () => <span className={headLabel}>Project</span>,
    cell: ({ row }) => (
      <span className="block max-w-[140px] truncate text-sm text-muted-foreground">
        {row.original.project}
      </span>
    ),
  },
  {
    accessorKey: "method",
    enableSorting: false,
    header: () => <span className={headLabel}>Method</span>,
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {row.original.method}
      </span>
    ),
  },
  {
    accessorKey: "due",
    sortFn: "datetime",
    header: ({ column }) => (
      <button
        type="button"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={sortButton}
      >
        Due
        <SortIcon sorted={column.getIsSorted()} />
      </button>
    ),
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground tabular-nums">
        {formatDate(row.original.due)}
      </span>
    ),
  },
  {
    accessorKey: "status",
    enableSorting: false,
    header: () => <span className={headLabel}>Status</span>,
    cell: ({ row }) => {
      const cfg = statusConfig[row.original.status];
      return (
        <Badge
          variant={cfg.variant}
          className="gap-1.5 text-[11px] font-medium"
        >
          <span
            className={cn("inline-block size-1.5 shrink-0", cfg.dot)}
            aria-hidden="true"
          />
          {row.original.status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "amount",
    sortFn: "basic",
    header: ({ column }) => (
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={sortButton}
        >
          Amount
          <SortIcon sorted={column.getIsSorted()} />
        </button>
      </div>
    ),
    cell: ({ row }) => (
      <span className="block text-right text-sm font-semibold text-foreground tabular-nums">
        {fmt.format(row.original.amount)}
      </span>
    ),
  },
  {
    id: "actions",
    enableSorting: false,
    enableHiding: false,
    header: () => <span className="sr-only">Actions</span>,
    cell: ({ row }) => (
      <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label={`Actions for ${row.original.id}`}
              >
                <IconPlaceholder
                  lucide="Ellipsis"
                  tabler="IconDots"
                  hugeicons="MoreHorizontalIcon"
                  phosphor="DotsThree"
                  remixicon="RiMoreLine"
                  className="size-4"
                  aria-hidden="true"
                />
              </Button>
            }
          />
          <DropdownMenuContent align="end" className="w-36">
            <DropdownMenuItem>
              <IconPlaceholder
                lucide="Eye"
                tabler="IconEye"
                hugeicons="EyeIcon"
                phosphor="Eye"
                remixicon="RiEyeLine"
                aria-hidden="true"
              />
              View
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconPlaceholder
                lucide="Download"
                tabler="IconDownload"
                hugeicons="DownloadIcon"
                phosphor="Download"
                remixicon="RiDownloadLine"
                aria-hidden="true"
              />
              Download
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
  },
];

export default function TableBlock() {
  const [sorting, setSorting] = React.useState<SortingState>([
    { id: "due", desc: true },
  ]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useTable({
    features: TABLE_FEATURES,
    data: invoices,
    columns,
    getRowId: (row) => row.id,
    state: { sorting, columnFilters, rowSelection },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    initialState: { pagination: { pageIndex: 0, pageSize: 7 } },
  });

  const clientFilter =
    (table.getColumn("client")?.getFilterValue() as string) ?? "";
  const selectedCount = table.getFilteredSelectedRowModel().rows.length;
  const totalCount = table.getFilteredRowModel().rows.length;
  const pageCount = table.getPageCount();

  return (
    <section className="flex min-h-svh w-full items-start justify-center bg-background px-6 py-12 text-foreground">
      <div className="w-full max-w-3xl">
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
              Acme Inc.
            </p>
            <h1 className="font-heading text-xl font-semibold tracking-tight text-foreground">
              Invoices
            </h1>
            <p className="text-sm text-muted-foreground">
              Recent billing activity across all client projects.
            </p>
          </div>
          <div className="flex flex-col items-end gap-0.5">
            <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
              Outstanding
            </span>
            <span className="text-lg font-semibold text-foreground tabular-nums">
              {fmt.format(outstanding)}
            </span>
          </div>
        </div>

        <Separator className="my-5" />

        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="relative">
            <IconPlaceholder
              lucide="Search"
              tabler="IconSearch"
              hugeicons="SearchIcon"
              phosphor="MagnifyingGlass"
              remixicon="RiSearchLine"
              className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              type="search"
              value={clientFilter}
              onChange={(event) =>
                table.getColumn("client")?.setFilterValue(event.target.value)
              }
              placeholder="Filter by client..."
              className="w-52 pl-8 text-sm"
              aria-label="Filter invoices by client"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-foreground">{totalCount}</span>{" "}
            {totalCount === 1 ? "Result" : "Results"}
          </p>
        </div>

        {selectedCount > 0 && (
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-muted/40 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground tabular-nums">
                {selectedCount} Selected
              </span>
              <Button
                variant="ghost"
                size="xs"
                className="text-muted-foreground hover:text-foreground"
                onClick={() => table.resetRowSelection()}
              >
                Clear
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  toast("Download started", {
                    description: `Preparing ${selectedCount} invoices as PDF.`,
                  })
                }
              >
                <IconPlaceholder
                  lucide="Download"
                  tabler="IconDownload"
                  hugeicons="DownloadIcon"
                  phosphor="Download"
                  remixicon="RiDownloadLine"
                  className="size-3.5"
                  aria-hidden="true"
                />
                Download
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  toast("Reminders sent", {
                    description: `Payment reminders sent for ${selectedCount} invoices.`,
                  })
                }
              >
                <IconPlaceholder
                  lucide="Mail"
                  tabler="IconMail"
                  hugeicons="MailIcon"
                  phosphor="Envelope"
                  remixicon="RiMailLine"
                  className="size-3.5"
                  aria-hidden="true"
                />
                Send reminder
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  toast("Marked as paid", {
                    description: `${selectedCount} invoices marked as paid.`,
                  })
                }
              >
                <IconPlaceholder
                  lucide="Check"
                  tabler="IconCheck"
                  hugeicons="Tick02Icon"
                  phosphor="Check"
                  remixicon="RiCheckLine"
                  className="size-3.5"
                  aria-hidden="true"
                />
                Mark as paid
              </Button>
            </div>
          </div>
        )}

        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  className="bg-muted/40 hover:bg-muted/40"
                >
                  {headerGroup.headers.map((header) => {
                    const id = header.column.id;
                    return (
                      <TableHead
                        key={header.id}
                        className={cn(
                          "h-9",
                          id === "select" && "w-10 pl-4",
                          id === "project" && "hidden sm:table-cell",
                          (id === "method" || id === "due") &&
                            "hidden md:table-cell",
                          id === "amount" && "text-right",
                          id === "actions" && "w-10 pr-4",
                        )}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() ? "selected" : undefined}
                    className="border-b border-border/60 transition-colors last:border-b-0 hover:bg-muted/30"
                  >
                    {row.getVisibleCells().map((cell) => {
                      const id = cell.column.id;
                      return (
                        <TableCell
                          key={cell.id}
                          className={cn(
                            id === "select" && "pl-4",
                            id === "project" && "hidden sm:table-cell",
                            (id === "method" || id === "due") &&
                              "hidden md:table-cell",
                            id === "actions" && "pr-4",
                          )}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
              ) : (
                <TableRow className="hover:bg-transparent">
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center text-sm text-muted-foreground"
                  >
                    No invoices match your filter.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between gap-4 border-t border-border bg-muted/20 px-4 py-2.5">
            <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              {totalCount} invoices
            </p>
            <div className="flex items-center gap-1.5">
              <Button
                variant="outline"
                size="icon"
                className="size-7"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                aria-label="Previous page"
              >
                <IconPlaceholder
                  lucide="ChevronLeft"
                  tabler="IconChevronLeft"
                  hugeicons="ArrowLeft01Icon"
                  phosphor="CaretLeft"
                  remixicon="RiArrowLeftSLine"
                  className="size-3.5"
                  aria-hidden="true"
                />
              </Button>
              <span className="px-1 text-xs text-muted-foreground tabular-nums">
                Page {table.state.pagination.pageIndex + 1} of{" "}
                {Math.max(pageCount, 1)}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="size-7"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                aria-label="Next page"
              >
                <IconPlaceholder
                  lucide="ChevronRight"
                  tabler="IconChevronRight"
                  hugeicons="ArrowRight01Icon"
                  phosphor="CaretRight"
                  remixicon="RiArrowRightSLine"
                  className="size-3.5"
                  aria-hidden="true"
                />
              </Button>
            </div>
          </div>
        </div>

        <p className="mt-3 text-[11px] text-muted-foreground">
          Figures shown in USD. Last updated Jun 17, 2026.
        </p>
      </div>
      <Toaster />
    </section>
  );
}
