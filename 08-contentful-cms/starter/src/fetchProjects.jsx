import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

// init contentful client
const client = createClient({
  space: 'f6gclpjtnunw',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

// custom hook to fetch and manage projects data
const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      // fetch projects from contentful
      const response = await client.getEntries({ content_type: 'projects' });
      // transform response data
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, img, id };
      });

      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // fetch data on component mount
  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};

export { useFetchProjects };
// debug code (commented out)
// client.getEntries({ content_type: 'projects' }).then((response) => {
//   console.log(response);
// });
