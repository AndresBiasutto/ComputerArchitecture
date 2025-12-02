import type { ITabBody } from "../../interfaces/ITabBody";
import ASection from "../molecule/MSection";

const MTabContent: React.FC<ITabBody> = ({ active, tabs, children }) => {
  return (
    <div className="w-full mx-auto">
      {tabs.map(
        (tab, index) =>
          active === index && (
            <ASection title={tab.title} text={tab.content}>
              <ul className=" flex flex-col items-start justify-start p-2 list-disc list-inside font-sharetech font-extralight text-yellow-50">
                {tab.list ? tab.list.map((list) => (
                      <li className=" text-start mt-2" key={list.subTitle}>
                       <span className="text-yellow-100 font-bold">{list.subTitle}</span>  {list.text}
                      </li>
                    ))
                  : null}
              </ul>
              {children}
            </ASection>
          )
      )}
    </div>
  );
};

export default MTabContent;
