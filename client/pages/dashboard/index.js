import DashboardLayout from "../../src/components/DashboardLayout";

const index = ({ data }) => {
  console.log(data);
  return <div>hello index</div>;
};

index.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:8000/api/v1");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
export default index;
