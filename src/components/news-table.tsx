"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function NewsTable() {
  const newsData = [
    {
      source: "Reuters",
      headline: "Apple reports strong Q4 earnings",
      sentiment: "Positive",
      time: "2h ago",
    },
    {
      source: "Bloomberg",
      headline: "iPhone sales exceed expectations",
      sentiment: "Positive",
      time: "4h ago",
    },
    {
      source: "CNBC",
      headline: "Apple stock reaches new high",
      sentiment: "Positive",
      time: "6h ago",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Source</TableHead>
          <TableHead>Headline</TableHead>
          <TableHead>Sentiment</TableHead>
          <TableHead>Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {newsData.map((news, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{news.source}</TableCell>
            <TableCell>{news.headline}</TableCell>
            <TableCell>
              <Badge variant="default">{news.sentiment}</Badge>
            </TableCell>
            <TableCell>{news.time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
