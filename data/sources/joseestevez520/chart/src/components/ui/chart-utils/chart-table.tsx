/**
 * The chart's data as a table, for screen readers: the drawing says nothing to them, and the
 * tooltip only one value at a time. Rows and columns come ready from Chart.
 */
interface ChartTableProps {
  caption: string
  columns: string[]
  rows: string[][]
}

export default function ChartTable({ caption, columns, rows }: ChartTableProps) {
  return (
    <table className="sr-only">
      <caption>{caption}</caption>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column} scope="col">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            <th scope="row">{row[0]}</th>
            {row.slice(1).map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
