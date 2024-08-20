import React from "react";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input"
import { DatePicker } from "@nextui-org/date-picker";

export default function Retrire() {
  return (
    <Popover placement="bottom" showArrow offset={10}>
      <PopoverTrigger>
        <Button color="primary">Activate</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px]">
        {(titleProps) => (
          <div className="px-1 py-2 w-full">
            <p className="text-small font-bold text-foreground" {...titleProps}>
              Retire a vape that you finished
            </p>
            <div className="mt-2 flex flex-col gap-2 w-full">
              <DatePicker label="Purchase date" className="max-w-[284px]" />
              <DatePicker label="Finish date" className="max-w-[284px]" />
              <Input defaultValue="Airbar" label="Brand Name" size="sm" variant="bordered" />
              <Input defaultValue="Mini" label="Model Name" size="sm" variant="bordered" />
              <Button color="primary">+</Button>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
