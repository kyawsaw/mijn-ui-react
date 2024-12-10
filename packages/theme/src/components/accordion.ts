import { tv, VariantProps } from "tailwind-variants"

const accordionStyles = tv({
  slots: {
    base: "",
    item: "border-b-main-border border-b",
    trigger: "group flex w-full items-center justify-between py-3",
    icon: "h-4 w-4 shrink-0 text-muted-text duration-400 ease-in-out group-data-[state=open]:rotate-180",
    content:
      "overflow-hidden text-sm transition-[height] data-[state=closed]:animate-accordion-close data-[state=open]:animate-accordion-open",
    contentChild: "pb-3 pt-0",
  },
  variants: {
    variant: {
      default: {},
      surface: {
        base: "bg-surface rounded-xl px-4 pb-4 pt-2 shadow-sm",
      },
      outlined: {
        base: "border-main-border rounded-xl border px-4 pb-4 pt-2",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export type AccordionVariantProps = VariantProps<typeof accordionStyles>
export { accordionStyles }
