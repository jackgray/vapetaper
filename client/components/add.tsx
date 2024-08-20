import React from "react";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input"

export default function Add() {
  return (
    <Popover placement="bottom" showArrow offset={10}>
      <PopoverTrigger>
        <Button color="primary">✏️</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px]">
        {(titleProps) => (
          <div className="px-1 py-2 w-full">
            <p className="text-small font-bold text-foreground" {...titleProps}>
              Add a new purchase
            </p>
            <div className="mt-2 flex flex-col gap-2 w-full">
              <Input defaultValue="Airbar" label="Brand Name" size="sm" variant="bordered" />
              <Input defaultValue="Mini" label="Model Name" size="sm" variant="bordered" />
              <Input defaultValue="today" label="Purchase Date" size="sm" variant="bordered" />
              <Button color="primary">+</Button>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
