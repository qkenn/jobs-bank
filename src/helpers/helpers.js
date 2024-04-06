const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

const addJob = async (newJob) => {
  const res = await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });
  return;
};

const deleteJob = async (id) => {
  const res = await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });
};

const updateJob = async (id, updatedJob) => {
  const res = await fetch(`/api/jobs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedJob),
  });
  return;
};

export { jobLoader, addJob, deleteJob, updateJob };
