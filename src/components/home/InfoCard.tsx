import React from "react";
import { InfoCardProps } from "../../types";

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  value,
  icon,
  highlightText,
  subtext,
  textColor,
  bgColor,
}) => {
  return (
    <div className="shadow-1 p-4 bg-white border-round-lg col">
      <div className="flex justify-content-between align-items-start mb-3">
        <div className="flex flex-column gap-3">
          <span className="text-secondary">{title}</span>
          <span>{value}</span>
        </div>
        <div
          className={`${textColor} ${bgColor} w-2rem h-2rem border-round-md flex justify-content-center align-items-center`}>
          {icon}
        </div>
      </div>
      <div className="text-secondary">
        <span className="text-success">{highlightText}</span> {subtext}
      </div>
    </div>
  );
};
