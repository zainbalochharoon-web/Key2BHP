"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Phone, User, Users } from "lucide-react"

interface CallSelectionModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
}

export function CallSelectionModal({ isOpen, onClose, title, description }: CallSelectionModalProps) {
  const [isConnecting, setIsConnecting] = useState(false)

  const handleCall = (locksmithType: "male" | "female") => {
    setIsConnecting(true)

    const phoneNumber = locksmithType === "male" ? "+447936755530" : "07309903243"

    // Create the tel: link and trigger the call
    const telLink = `tel:${phoneNumber}`
    window.location.href = telLink

    // Reset state and close modal after a short delay
    setTimeout(() => {
      setIsConnecting(false)
      onClose()
    }, 1000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-center text-black">
            {title || "Choose Your Locksmith"}
          </DialogTitle>
          {description && <p className="text-center text-gray-600 mt-2">{description}</p>}
        </DialogHeader>

        <div className="space-y-4 mt-6">
          <Button
            size="lg"
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 text-lg rounded-lg transition-all duration-200 transform hover:scale-105"
            onClick={() => handleCall("male")}
            disabled={isConnecting}
          >
            <User className="h-5 w-5 mr-3" />
            Call Male Locksmith
            <span className="block text-sm font-normal">+44 7936 755530</span>
          </Button>

          <Button
            size="lg"
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 text-lg rounded-lg transition-all duration-200 transform hover:scale-105"
            onClick={() => handleCall("female")}
            disabled={isConnecting}
          >
            <Users className="h-5 w-5 mr-3" />
            Call Female Locksmith
            <span className="block text-sm font-normal">073 0990 3243</span>
          </Button>

          {isConnecting && (
            <div className="text-center text-sm text-gray-600 mt-4">
              <Phone className="h-4 w-4 inline mr-1 animate-pulse" />
              Connecting your call...
            </div>
          )}
        </div>

        <div className="text-center text-xs text-gray-500 mt-4">Available 24/7 for emergency services</div>
      </DialogContent>
    </Dialog>
  )
}
