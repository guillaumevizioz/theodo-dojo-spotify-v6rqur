const apiToken: string = 'BQDXPq2tLPCnN4_3nzy5zpdiobi_VhzlnB4e5Y601BJ412aZ1WK7YaO7cfsghiG8GpjzpMIjNVjoRIUaxiPDdWmdTTojWhowMHff6BllVuvdaS0NaS8IvOQifmY0_ia6G8d71TiPK8ALP_QEk7ElZBr1AGINaI6v7cz4S8eWnc3W_r19R_Swr38k17jGMHJlLur40JoqOC1eZx3J-Pvdn0g';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: unknown[] };

  return data.items;
};
