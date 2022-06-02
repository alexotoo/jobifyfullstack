import DashboardLayout from "../../src/components/DashboardLayout";

function jobs() {
  return <div>jobs here</div>;
}

jobs.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default jobs;
