import { Button } from "@mijn-ui/react-button"
import { Input } from "@mijn-ui/react-input"
import { Label } from "@mijn-ui/react-label"
import {
  Popover,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@mijn-ui/react-popover"
import { RxCross2, RxMixerHorizontal } from "react-icons/rx"

// Making All of the Accordion Components Unstyled
type PopoverExampleProps = {
  unstyled?: boolean
}

const PopoverExample = ({ unstyled = false }: PopoverExampleProps) => {
  return (
    <Popover unstyled={unstyled}>
      <PopoverTrigger className="rounded-full">
        <RxMixerHorizontal size={18} />
      </PopoverTrigger>
      <PopoverContent className="relative w-72 ">
        <div className="flex flex-col justify-center gap-2.5">
          <p className="text-base font-medium">Dimensions</p>

          <fieldset className="flex w-full items-center justify-between gap-2">
            <Label
              className="inline-block w-20 max-w-fit shrink-0 text-nowrap"
              htmlFor="width"
            >
              Width
            </Label>
            <Input
              className="max-w-40"
              classNames={{
                input: "h-8 py-1.5 px-1.5",
              }}
              id="width"
              defaultValue="100%"
            />
          </fieldset>
          <fieldset className="flex w-full items-center justify-between gap-2">
            <Label
              className="inline-block w-20 max-w-fit shrink-0 text-nowrap"
              htmlFor="maxWidth"
            >
              Max. width
            </Label>
            <Input
              className="max-w-40"
              classNames={{
                input: "h-8 py-1.5 px-1.5",
              }}
              id="maxWidth"
              defaultValue="300px"
            />
          </fieldset>
          <fieldset className="flex w-full items-center justify-between gap-2">
            <Label
              className="inline-block w-20 max-w-fit shrink-0 text-nowrap"
              htmlFor="height"
            >
              Height
            </Label>
            <Input
              className="max-w-40"
              classNames={{
                input: "h-8 py-1.5 px-1.5",
              }}
              id="height"
              defaultValue="25px"
            />
          </fieldset>
          <fieldset className="flex w-full items-center justify-between gap-2">
            <Label
              className="inline-block w-20 max-w-fit shrink-0 text-nowrap"
              htmlFor="maxHeight"
            >
              Max. height
            </Label>
            <Input
              className="max-w-40"
              classNames={{
                input: "h-8 py-1.5 px-1.5",
              }}
              id="maxHeight"
              defaultValue="none"
            />
          </fieldset>
        </div>
        <PopoverClose unstyled asChild>
          <Button
            color={"accent"}
            variant={"text"}
            size={"icon"}
            radius={"full"}
            className="absolute right-0 top-0 hover:bg-transparent"
          >
            <RxCross2 />
          </Button>
        </PopoverClose>
        <PopoverArrow className="fill-muted-text" />
      </PopoverContent>
    </Popover>
  )
}

export default PopoverExample
