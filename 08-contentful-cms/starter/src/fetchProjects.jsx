import { createClient } from 'contentful';

const client = createClient({
  space: 'f6gclpjtnunw',
  environment: 'master',
  accessToken: 'YWlefzKfzdIdCa5N8_QCzzcHFfrv3u0bw4m3Dz-LIUY',
});

client.getEntries({ content_type: 'projects' }).then((response) => {
  console.log(response);
});

// can be rewritten using async/await

// const fetchProjects = async () => {
//   try {
//     const response = await client.getEntries({ content_type: 'projects' });
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// };

// fetchProjects();
