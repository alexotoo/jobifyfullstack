import DashboardLayout from "../../src/components/DashboardLayout";

const profile = () => {
  return <div>profile</div>;
};

profile.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default profile;
