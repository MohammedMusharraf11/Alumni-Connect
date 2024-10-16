import React from "react";
import { openSourceRepos } from "../utils/opensource"; // Import the open source repos

const OpenSource = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4 text-secondary">Open Source Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {openSourceRepos.map((repo, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2 text-primary">{repo.name}</h3>
            <p className="text-gray-700 mb-2">{repo.description}</p>
            <div className="mb-3">
              <strong>Languages:</strong>{" "}
              <span className="text-sm text-blue-600">
                {repo.languages.join(", ")}
              </span>
            </div>
            <a
              href={repo.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenSource;
