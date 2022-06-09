import Job from "../models/job.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, unAuthError } from "../errors/index.js";

//create jobs
const createJob = async (req, res) => {
  const { position, company } = req.body;

  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
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
