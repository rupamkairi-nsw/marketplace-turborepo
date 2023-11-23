import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table } from "flowbite-react";
import { Fragment, useState } from "react";

type Listing = {
  id: number;
  createdAt: string;
  updatedAt: string | null;
  name: string;
};

const listing: Listing[] = [
  {
    id: 1,
    createdAt: "2023-11-19T08:25:12.911Z",
    updatedAt: null,
    name: "Malmo",
  },
  {
    id: 2,
    createdAt: "2023-11-19T08:25:12.911Z",
    updatedAt: null,
    name: "Kalmar",
  },
  {
    id: 3,
    createdAt: "2023-11-19T08:25:12.911Z",
    updatedAt: null,
    name: "Uppsala",
  },
  {
    id: 4,
    createdAt: "2023-11-19T08:25:12.911Z",
    updatedAt: null,
    name: "Orebro",
  },
];

const columnHelper = createColumnHelper<Listing>();

function tableColums(data) {
  const keys = Object.keys(data[0]);
  const columns: ColumnDef<Listing>[] = [];
  keys.forEach((h) => {
    if (h.toLowerCase() === "createdat" || h.toLowerCase() === "updatedat")
      return;

    columns.push(
      columnHelper.accessor(h, {
        header: (info) => info.column.id,
        cell: (info) => info.getValue(),
      })
    );
  });
  return columns;
}

export default function DataTable({ data }: { data: any[] }) {
  console.log(data);

  const [tableData, _] = useState(() => [...data]);

  const table = useReactTable({
    data: tableData,
    columns: tableColums(tableData),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table className="text-black ">
      <Table.Head>
        {table.getHeaderGroups().map((headerGroup) => (
          <Fragment key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Table.HeadCell key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </Table.HeadCell>
            ))}
          </Fragment>
        ))}
      </Table.Head>
      <Table.Body>
        {table.getRowModel().rows.map((row) => (
          <Table.Row key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Table.Cell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
