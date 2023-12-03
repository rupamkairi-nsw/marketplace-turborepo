"use client";

import { Tabs, TabsRef } from "flowbite-react";
import {
  HiChartPie,
  HiShoppingBag,
  HiTag,
  HiAdjustments,
  HiClipboardList,
  HiUserCircle,
} from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { routes } from "../constants/routes";
import { Fragment, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function TabContentNavigation() {
  const router = useRouter();

  // const tabsRef = useRef<TabsRef>(null);
  // const [activeTab, setActiveTab] = useState(0);

  const contents = {
    items: [
      { label: "Categories", icon: HiTag, href: routes.categories },
      { label: "Attributes", icon: HiChartPie, href: routes.attributes },
      {
        label: "Groups",
        icon: HiShoppingBag,
        href: routes.attributeGroups,
      },
    ],
  };

  function handleActiveTabChange(href: string) {
    router.push(href);
  }

  return (
    <div>
      <Tabs
        aria-label="Default tabs"
        style="default"
        // ref={tabsRef}
        onActiveTabChange={(tab) => {
          handleActiveTabChange(contents.items[tab]?.href);
        }}
      >
        {contents.items.map((item, itemKey) => (
          <Tabs.Item
            className="shdfsjfdsgfuydsgfuysgadufguasdgfuguasgfdugsdgfyuasafsdhgfjsdgfjgsjdfgjashdgfjdsg"
            key={itemKey}
            title={item.label}
            icon={item.icon}
          />
        ))}
      </Tabs>
    </div>
  );
}
