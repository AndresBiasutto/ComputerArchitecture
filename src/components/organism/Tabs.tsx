import {  useEffect, useState } from "react";
import MTopTabs from "../molecule/MTopTabs";
import MTabContent from "../molecule/MTabContent";
import MTabNav from "../molecule/MTabNav";
import type { IDataProps } from "../../interfaces/IDataProps";

const Tabs: React.FC<IDataProps> = ({ data, children, onEnviarMensaje }) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    onEnviarMensaje(activeTab)
  }, [activeTab, onEnviarMensaje])
  
  const transformedTabs = data.map(tab => ({
    title: tab.title ?? "",
    content: tab.content ?? ""
  }));

  return (
    <div className="w-full flex justify-center items-start ">
      <div className="text-center">
        <MTopTabs active={activeTab} setActive={setActiveTab} tabs={transformedTabs} />
        <MTabContent active={activeTab} tabs={data} children={children} />
        <MTabNav active={activeTab} setActive={setActiveTab} tabs={transformedTabs} />
      </div>
    </div>
  );
};

export default Tabs;
