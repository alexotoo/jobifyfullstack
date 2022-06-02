import DashboardLayout from "../../src/components/DashboardLayout";

const saveJob = () => {
  return <div>saveJob</div>;
};

saveJob.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default saveJob;
