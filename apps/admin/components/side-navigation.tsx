"use client";

import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiTag,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { routes } from "../constants/routes";
import { useRouter } from "next/navigation";

export default function SideNavigation() {
  const router = useRouter();

  const contents = {
    groups: [
      {
        items: [
          { label: "Home", icon: HiChartPie, href: routes.home },
          {
            label: "Listings",
            icon: HiShoppingBag,
            href: routes.listings,
            children: [
              { label: "Listings", href: routes.listings },
              { label: "Featured" },
              { label: "Others" },
            ],
          },
          {
            label: "Categories",
            icon: HiTag,
            href: routes.categories,
            children: [
              { label: "Categories", href: routes.categories },
              { label: "Sub Categories", href: routes.subcategories },
            ],
          },
        ],
      },
      {
        // items
      },
    ],
  };

  return (
    <Sidebar aria-label="">
      <Sidebar.Items>
        {contents.groups.map((group, groupKey) => (
          <Sidebar.ItemGroup className="border-t-0 py-4" key={groupKey}>
            {group.items?.map((item, itemKey) =>
              item.children ? (
                <Sidebar.Collapse
                  key={itemKey}
                  icon={item.icon}
                  label={item.label}
                >
                  <div className="pl-6">
                    {item.children.map((child, childKey) => (
                      <Sidebar.Item key={childKey} href={child.href}>
                        {child.label}
                      </Sidebar.Item>
                    ))}
                  </div>
                </Sidebar.Collapse>
              ) : (
                <Sidebar.Item key={itemKey} icon={item.icon} href={item.href}>
                  {item.label}
                </Sidebar.Item>
              )
            )}
          </Sidebar.ItemGroup>
        ))}
      </Sidebar.Items>
    </Sidebar>
  );
}
