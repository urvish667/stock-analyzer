"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface CompareTableProps {
  ticker1: string
  ticker2: string
}

export function CompareTable({ ticker1, ticker2 }: CompareTableProps) {
  const metrics = [
    { metric: "Current Price", ticker1: "$175.43", ticker2: "$2,847.23" },
    { metric: "Market Cap", ticker1: "$2.8T", ticker2: "$1.8T" },
    { metric: "P/E Ratio", ticker1: "28.5", ticker2: "25.2" },
    { metric: "52W High", ticker1: "$198.23", ticker2: "$3,030.93" },
    { metric: "52W Low", ticker1: "$124.17", ticker2: "$2,193.62" },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Metric</TableHead>
          <TableHead>{ticker1}</TableHead>
          <TableHead>{ticker2}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {metrics.map((row, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{row.metric}</TableCell>
            <TableCell>{row.ticker1}</TableCell>
            <TableCell>{row.ticker2}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
