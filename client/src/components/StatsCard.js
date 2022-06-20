import { useAppContext } from "../context/contextApp";
import { IoHandLeft, IoBagCheckSharp, IoRefreshCircle } from "react-icons/io5";
import StatsItem from "./StatsItem";

const StatsCard = () => {
  const { stats } = useAppContext();

  console.log(stats);
  const defaultStats = [
    {
      id: 1,
      title: "pending applications",
      count: stats.pending || 0,
      icon: <IoRefreshCircle size={"80%"} />,
      color: "color.200",
      bcg: "color.300",
    },
    {
      id: 2,
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: <IoBagCheckSharp size={"80%"} />,
      color: "color.100",
      bcg: "color.200",
    },
    {
      id: 3,
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <IoHandLeft size={"80%"} />,
      color: "color.500",
      bcg: "color.400",
    },
  ];

  console.log(defaultStats);
  return (
    <div className="grid_jobs">
      {defaultStats.map((item, index) => {
        return <StatsItem key={index} {...item} />;
      })}
    </div>
  );
};
export default StatsCard;
