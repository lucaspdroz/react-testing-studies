import React from "react";

export const SideBar = ({ items }: {
    items: {
        name: string;
        href: string;
    }[];
}) => <div>
        {
            items.map(items => (
                <div key={items.href}>
                    <a role="navigation" href={items.href}>{items.name} </a>
                </div>
            ))
        }
    </div>
