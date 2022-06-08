import { useState } from "react";
import DashboardLayout from "../../src/components/DashboardLayout";
import { useAppContext } from "../../src/context/contextApp";

const profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      displayAlert();
      return;
    }
    updateUser({ name, email, lastName, location });
  };

  return <div>profile</div>;
};

profile.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default profile;
