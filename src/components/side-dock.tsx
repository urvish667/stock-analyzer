"use client"

import { useState } from "react"
import { Plus, LayoutPanelLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface SideDockProps {
  isOpen: boolean
  onClose: () => void
  onNewTask: () => void
}

export function SideDock({ isOpen, onClose, onNewTask }: SideDockProps) {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Favorite", "Scheduled"]

  const tasks = [
    { id: 1, title: "Analyze AAPL performance", type: "favorite" },
    { id: 2, title: "Compare TSLA vs RIVN", type: "scheduled" },
    { id: 3, title: "Monitor NVDA earnings", type: "favorite" },
    { id: 4, title: "Track MSFT quarterly results", type: "scheduled" },
    { id: 5, title: "Research emerging tech stocks", type: "favorite" },
  ]

  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "All") return true
    return task.type === activeFilter.toLowerCase()
  })

  const handleNewTaskClick = () => {
    onNewTask()
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/20 z-40" onClick={onClose} />}

      {/* Side Panel - Overlaps top bar */}
      <div
        className={cn(
          "fixed left-0 top-0 h-full w-80 bg-background border-r border-border z-50 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
        onMouseLeave={onClose}
      >
        <Card className="h-full rounded-none border-0">
          <CardContent className="p-4 space-y-4 h-full overflow-y-auto">
            {/* Header with Menu Icon and Logo */}
            <div className="flex items-center gap-3 pb-2 border-b border-border">
              <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
                <LayoutPanelLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-lg font-semibold text-primary font-libre-baskerville">BearBullLens</h1>
            </div>

            {/* New Task Button */}
            <Button className="w-full justify-start gap-2" onClick={handleNewTaskClick}>
              <Plus className="h-4 w-4" />
              New Task
            </Button>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  size="sm"
                  className={cn("rounded-full", activeFilter === filter && "bg-primary text-primary-foreground")}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </Button>
              ))}
            </div>

            {/* Tasks List */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">Your Tasks</h4>
              {filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-3 rounded-lg bg-muted/50 hover:bg-muted cursor-pointer transition-colors"
                >
                  <p className="text-sm">{task.title}</p>
                  <p className="text-xs text-muted-foreground capitalize mt-1">{task.type}</p>
                </div>
              ))}
              {filteredTasks.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-8">No tasks found</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
