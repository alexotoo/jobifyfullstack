const createJob = async (req, res) => {
  res.send("create jobs");
};
const deleteJob = async (req, res) => {
  res.send("delete jobs");
};
const getAllJobs = async (req, res) => {
  res.send("hellooo all jobs");
};
const updateJob = async (req, res) => {
  res.send("update job");
};
const showStats = async (req, res) => {
  res.send("show job stats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
