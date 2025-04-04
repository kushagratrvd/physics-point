"use client"

import { MessageCircle } from "lucide-react"
import { useEffect } from "react"

export default function ContactButton() {
  // Initialize OpenWidget when the component mounts
  useEffect(() => {
    // Define OpenWidget configuration
    window.__ow = window.__ow || {}
    window.__ow.organizationId = "6f7cde1c-e3d4-4346-bb44-9821b742cd00"
    window.__ow.integration_name = "manual_settings"
    window.__ow.product_name = "openwidget"

    // Load the OpenWidget script
    const script = document.createElement("script")
    script.src = "https://cdn.openwidget.com/openwidget.js"
    script.async = true
    document.head.appendChild(script)

    // Clean up on unmount
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  // Function to open the widget when button is clicked
  const openWidget = () => {
    if (window.OpenWidget) {
      window.OpenWidget.call("open")
    }
  }

  return (
    
      <MessageCircle className="h-6 w-6" />
    
  )
}

