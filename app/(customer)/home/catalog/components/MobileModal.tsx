"use client";

import React, { useEffect } from "react";
import { Dialog, DialogBackdrop, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { X, Filter, Plus, Minus } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface MobileModalProps {
  mobileFiltersOpen: boolean;
  setMobileFiltersOpen: (open: boolean) => void;
}

interface SubCategory {
  name: string;
  href: string;
}

const subCategories: SubCategory[] = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];

interface FilterOption {
  value: string;
  label: string;
  checked: boolean;
}

interface Filter {
  id: string;
  name: string;
  options: FilterOption[];
}

const filters: Filter[] = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
];

const MobileModal = ({ mobileFiltersOpen, setMobileFiltersOpen }: MobileModalProps) => {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleViewportChange = (event: MediaQueryListEvent | MediaQueryList) => {
      if (event.matches) {
        setMobileFiltersOpen(false);
      }
    };
    handleViewportChange(mediaQuery);
    mediaQuery.addEventListener("change", handleViewportChange);
    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  return (
    <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
      <SheetContent className="md:hidden p-4 z-[999]">
        <SheetHeader>
          <div className="flex items-center justify-between px-4">
            <h2 className="text-lg font-medium">Filters</h2>
          </div>
          {/* Filters */}
          <form className="h-screen mt-4 border-t border-gray-200">
            <h3 className="sr-only">Categories</h3>
            <ul role="list" className="px-2 py-3 font-medium">
              {subCategories.map((category) => (
                <li key={category.name}>
                  <a href={category.href} className="block px-2 py-3">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>

            {filters.map((section) => (
              <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                <h3 className="-mx-2 -my-3 flow-root">
                  <DisclosureButton className="group flex w-full items-center justify-between px-2 py-3">
                    <span className="font-medium">{section.name}</span>
                    <span className="ml-6 flex items-center">
                      <Plus aria-hidden="true" className="h-5 w-5 group-[data-headlessui-state='open']:hidden" />
                      <Minus aria-hidden="true" className="h-5 w-5 hidden group-[data-headlessui-state='open']:block" />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel className="pt-6">
                  <div className="space-y-6">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex">
                        <input
                          defaultValue={option.value}
                          defaultChecked={option.checked}
                          id={`filter-mobile-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor={`filter-mobile-${section.id}-${optionIdx}`} className="ml-3 min-w-0">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </form>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileModal;
