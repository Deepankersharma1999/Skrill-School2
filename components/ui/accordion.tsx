"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { MinusIcon, PlusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-none p-4", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 transition-all ",
          isOpen ? "bg-orange-500 rounded-t-2xl p-5" : "p-4", // Only the top rounded when open
          className
        )}
        {...props}
        onClick={handleToggle}
      >
        {children}
        {
          isOpen
            ? <MinusIcon className="text-[8px] transition-transform duration-100 bg-white rounded-full" />
            : <PlusIcon className="text-[8px] transition-transform duration-100 bg-white rounded-full" />
        }
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        "overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        "bg-orange-500 rounded-b-2xl p-5"
      )}
      {...props}
    >
      <div className={cn(className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
})

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
