import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export default function SideNavigation() {
  const contents = {
    groups: [
      {
        items: [
          { label: "Home", icon: HiChartPie },
          {
            label: "Listings",
            icon: HiShoppingBag,
            children: [{ label: "Featured" }, { label: "Others" }],
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
                      <Sidebar.Item key={childKey} href="#">
                        {child.label}
                      </Sidebar.Item>
                    ))}
                  </div>
                </Sidebar.Collapse>
              ) : (
                <Sidebar.Item key={itemKey} href="#" icon={item.icon}>
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
