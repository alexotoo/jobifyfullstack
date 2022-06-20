import StatsInfo from "./StatsInfo";

const StatsItem = ({ count, title, icon, color, bcg, id }) => {
  if (id === 1) {
    return (
      <StatsInfo
        color={color}
        title={title}
        icon={icon}
        count={count}
        bcg={bcg}
      />
    );
  } else if (id === 2) {
    return (
      <StatsInfo
        color={color}
        title={title}
        icon={icon}
        count={count}
        bcg={bcg}
      />
    );
  } else if (id === 3) {
    return (
      <StatsInfo
        color={color}
        title={title}
        icon={icon}
        count={count}
        bcg={bcg}
      />
    );
  }
};
export default StatsItem;
