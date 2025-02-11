import { FaSortUp, FaSortDown, FaSort } from "react-icons/fa";

interface SortableThProps<T> {
  label: string | React.ReactNode;

  sortId: T;
  defaultAsc?: boolean;

  sort: T;
  asc: boolean;

  onSort: (sort: T, asc: boolean) => void;
}

export default function SortableTh<T>({
  label,
  sortId,
  defaultAsc,
  sort,
  asc,
  onSort,
}: SortableThProps<T>) {
  const sortThis = sortId === sort;
  const Arrow = sortThis ? (asc ? FaSortUp : FaSortDown) : FaSort;
  return (
    <th
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        if (sortThis) onSort(sortId, !asc);
        else onSort(sortId, defaultAsc ?? true);
      }}
    >
      <span className="align-middle">{label} </span>
      <Arrow className="inline align-middle" />
    </th>
  );
}
