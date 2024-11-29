"use client";

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuItem, MenuItems } from "@headlessui/react";
import { Filter, Plus, Minus } from "lucide-react";
import Catalog from "./Catalog";
import MobileModal from "./MobileModal";

interface SortOption {
  name: string;
  href: string;
  current: boolean;
}

interface SubCategory {
  name: string;
  href: string;
}

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

const sortOptions: SortOption[] = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const subCategories: SubCategory[] = [
  { name: "Melodi Cinta", href: "#" },
  { name: "Ikatan Abadi", href: "#" },
  { name: "Cakrawala Emas", href: "#" },
  { name: "Paduan Bahagia", href: "#" },
  { name: "Perjalanan Abadi", href: "#" },
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

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const Example: React.FC = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <section>
      <MobileModal mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen} />

      <main className="mx-auto max-w-6xl">
        <div className="sticky bg-background top-16 z-10 flex gap-4 flex-col md:flex-row items-baseline md:justify-between border-b border-gray-200 py-8 px-2">
          <h1 className="text-4xl font-bold text-gray-900 whitespace-nowrap">New Arrivals</h1>
          <div className="w-full">
            <Menu as="div" className="relative text-left">
              <div className="md:hidden overflow-x-auto">
                <ul role="list" className="flex gap-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name} className="flex whitespace-nowrap">
                      <a href={category.href} className="hover:text-primary">
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4 justify-end mt-2 px-2 md:px-0">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.name} value={option.name}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <button type="button" onClick={() => setMobileFiltersOpen(true)} className="sm:ml-6 lg:hidden">
                  <span className="sr-only">Filters</span>
                  <Filter aria-hidden="true" className="h-5 w-5" />
                </button>
              </div>
              <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md shadow-2xl ring-1 ring-black/5 focus:outline-none">
                <div className="py-1 bg-white">
                  {sortOptions.map((option) => (
                    <MenuItem key={option.name}>
                      <a href={option.href} className={classNames(option.current ? "font-medium text-gray-900" : "text-gray-500", "block px-4 py-2 text-sm")}>
                        {option.name}
                      </a>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pb-24">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <form className="hidden lg:block border-r p-4">
              <div className="sticky top-0">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>
                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <Plus aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                          <Minus aria-hidden="true" className="size-5 [.group:not([data-open])_&]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </div>
            </form>
            <div className="lg:col-span-3 py-6">
              <Catalog />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Example;
