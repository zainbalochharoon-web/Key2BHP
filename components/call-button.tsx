"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CallSelectionModal } from "@/components/call-selection-modal"

interface CallButtonProps {
  children: React.ReactNode
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  title?: string
  description?: string
}

export function CallButton({
  children,
  className,
  size = "default",
  variant = "default",
  title,
  description,
}: CallButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button size={size} variant={variant} className={className} onClick={() => setIsModalOpen(true)}>
        {children}
      </Button>

      <CallSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
      />
    </>
  )
}
