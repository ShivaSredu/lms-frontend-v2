"use client";
import TabButtonSecondary from "../buttons/TabButtonSecondary";
import useTab from "@/hooks/useTab";
import TabContentWrapper from "../wrappers/TabContentWrapper";
import AdminSchoolList from "./AdminSchoolList";
import AdminSchoolCreate from "./AdminSchoolCreate";

const AdminSchoolTab = () => {
  const { currentIdx, handleTabClick } = useTab();
  const tabbuttons = [
    {
      name: "School List",
      content: <AdminSchoolList />,
    },
    {
      name: "School Create",
      content: <AdminSchoolCreate />,
    },
  ];
  return (
    <div className="p-10px md:px-10 md:py-50px mb-30px bg-whiteColor dark:bg-whiteColor-dark shadow-accordion dark:shadow-accordion-dark rounded-5">
      {/* heading */}
      <div className="mb-6 pb-5 border-b-2 border-borderColor dark:border-borderColor-dark">
        <h2 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark">
          Admin School
        </h2>
      </div>
      <div>
        <div className=" flex flex-wrap mb-10px lg:mb-50px rounded gap-10px">
          {tabbuttons?.map(({ name }, idx) => (
            <TabButtonSecondary
              key={idx}
              name={name}
              currentIdx={currentIdx}
              idx={idx}
              handleTabClick={handleTabClick}
              button={"small"}
            />
          ))}
        </div>
        <div>
          {tabbuttons?.map(({ content }, idx) => (
            <TabContentWrapper
              key={idx}
              isShow={currentIdx === idx ? true : false}
            >
              {content}
            </TabContentWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminSchoolTab;
