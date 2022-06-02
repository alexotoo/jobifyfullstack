import DashboardLayout from "../../src/components/DashboardLayout";

const stats = () => {
  return <div>stats</div>;
};

stats.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default stats;
