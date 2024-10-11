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
    className={cn("rounded-2xl", className)}
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
    <AccordionPrimitive.Header className="flex rounded-t-2xl">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 px-5 transition-all rounded-t-2xl [&[data-state=open]>svg]:rotate-180",
          isOpen ? "bg-orange-500 text-white" : "text-black",
          className
        )}
        {...props}
        onClick={handleToggle}
      >
        {children}
        {
          isOpen
            ? <MinusIcon className="bg-white text-black rounded-full lg:text-[48px] transition-transform duration-200" />
            : <PlusIcon className="bg-white text-black rounded-full lg:text-[48px] transition-transform duration-200" />
        }
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down bg-orange-500 text-white rounded-b-2xl h-20 px-4" // Added rounded-full here
    {...props}
  >
    <div className={cn(className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
