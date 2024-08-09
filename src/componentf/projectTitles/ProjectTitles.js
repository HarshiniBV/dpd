import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProjectTitles.css';

function ProjectTitles() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.45.119.246:5000/list_projects');
        setProjects(response.data);
      } catch (error) {
        setError(`Error fetching data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="project-titles-container">
      <h1>Project Titles</h1>
      <ul>
        {projects.map((projectArray, outerIndex) => (
          <li key={outerIndex}>
            <h2>Project Set {outerIndex + 1}</h2>
            <ul>
              {projectArray.map((project, innerIndex) => (
                <li key={innerIndex}>
                  {typeof project === 'string' && project.length > 0 ? project : `Project Detail ${innerIndex + 1}: ${project}`}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectTitles;