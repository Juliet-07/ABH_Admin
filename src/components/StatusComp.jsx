import React from "react";

const StatusComponent = ({ status }) => {
  return (
    <>
    {
        status.toLowerCase().includes("low") &&
        <div className="min-w-[100px] h-[25px] rounded-[10px] text-[#9e7500] bg-[#9e75001a] flex items-center justify-center">
        {status}
      </div>
    }
    {
        status.toLowerCase().includes("pending") &&
        <div className="min-w-[100px] h-[25px] rounded-[10px] text-[red] bg-red-100 flex items-center justify-center">
        {status}
      </div>
    }
    {
        status.toLowerCase().includes("rejected") &&
        <div className="min-w-[100px] h-[25px] rounded-[10px] text-[red] bg-red-100 flex items-center justify-center">
        {status}
      </div>
    }
    {
        status.toLowerCase().includes("shipped") &&
        <div className="min-w-[100px] h-[25px] rounded-[10px] text-[blue] bg-blue-100 flex items-center justify-center">
        {status}
      </div>
    }
    {
        status.toLowerCase().includes("delivered") &&
        <div className="min-w-[100px] h-[25px] rounded-[10px] text-[green] bg-green-100 flex items-center justify-center">
        {status}
      </div>
    }
    </>
  );
};

export default StatusComponent;
