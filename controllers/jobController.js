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

//delete jobs
const deleteJob = async (req, res) => {
  res.send("delete jobs");
};

//get all jobs
const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: jobs.length, numOfPages: 1 });
};

//update jobs
const updateJob = async (req, res) => {
  res.send("update job");
};

//show jobs stats
const showStats = async (req, res) => {
  res.send("show job stats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
