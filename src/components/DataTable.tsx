import { useState } from "react";
import SortableTh from "./SortableTh";
export interface DataTableColumn<T> {
  header: React.ReactNode;
  asc?: boolean;
  get: (item: T) => React.ReactNode;
  compare?: (a: unknown, b: unknown) => number;
  render?: (value: T) => React.ReactNode;
  className?: string;
}

export interface DataTableProps<T> {
  className?: string;
  columns: DataTableColumn<T>[];
  data: T[];
}

function makeCompare(sampleValue: unknown) {
  if (typeof sampleValue === "number") {
    return (a: unknown, b: unknown) => (a as number) - (b as number);
  }
  if (typeof sampleValue === "string") {
    return (a: unknown, b: unknown) => (a as string).localeCompare(b as string);
  }
  throw new Error("Unsupported sort type");
}

export default function DataTable<T>({
  className,
  columns,
  data,
}: DataTableProps<T>) {
  data = [...data]; // Because sorting is inplace
  const [sortId, setSortId] = useState(0);
  const [sortAsc, setSortAsc] = useState(columns[0]?.asc ?? true);
  const sortCol = columns[sortId];
  function setSort(id: number, asc: boolean) {
    setSortId(id);
    setSortAsc(asc);
  }

  const compare = sortCol.compare ?? makeCompare(sortCol.get(data[0]));
  data.sort((a, b) => compare(sortCol.get(a), sortCol.get(b)));
  if (!sortAsc) data.reverse();

  return (
    <table className={className ?? "simple-table"}>
      <thead>
        <tr>
          {columns.map((col, i) => (
            <SortableTh
              key={i}
              label={col.header}
              sortId={i}
              sort={sortId}
              asc={sortAsc}
              defaultAsc={col.asc}
              onSort={setSort}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i}>
            {columns.map((col, i) => (
              <td key={i} className={col.className}>
                {col.render?.(item) ?? col.get(item)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
