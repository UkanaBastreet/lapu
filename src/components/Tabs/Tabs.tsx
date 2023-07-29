import React, { FC, ReactNode, useState } from "react";

import s from "./Tabs.module.scss";
import { Button } from "../Button/Button";

// interface TabsProps {
//   children?: React.ReactNode[];
//   titles: string[];
//   width?: string;
//   height?: string;
// }

// export const Tabs: React.FC<TabsProps> = ({
//   children,
//   width,
//   height,
//   titles,
//   ...props
// }) => {
//   const [index, setIndex] = useState(0);
//   return (
//     <>
//       <div className={s.Tabs} style={{ width, height }}>
//         <ul className={s.header}>
//           {titles.map((title, id) => (
//             <li
//               className={[s.tab, id === index ? s.active : ""].join(" ")}
//               onClick={() => setIndex(id)}
//               key={id}
//             >
//               <Button>{title}</Button>
//               {/* <span>{title}</span>   */}
//             </li>
//           ))}
//         </ul>
//         <div className={s.body}>{children?.length && children[index]}</div>
//       </div>
//     </>
//   );
// };

interface TabProps {
  children: ReactNode;
  label: string;
}

const Tab: FC<TabProps> = ({ children, label }) => {
  return <div>{children}</div>;
};

interface TabsProps {
  children: ReactNode[];
  // children: (typeof Tab)[];
}

const Tabs: FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className={s.Tabs}>
      <ul className={s.header}>
        {children.map((child, index) => {
          return (
            <li
              className={[s.tab, index === activeTab ? s.active : ""].join(" ")}
              key={index}
              onClick={() => setActiveTab(index)}
            >
              {/*
          // @ts-ignore */}
              <Button className={s.TabButton}>{child.props.label}</Button>
            </li>
          );
        })}
      </ul>
      <div>{children[activeTab]}</div>
    </div>
  );
};

export { Tabs, Tab };
