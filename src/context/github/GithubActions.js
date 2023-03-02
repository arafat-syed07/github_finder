const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const res = await fetch(`${GITHUB_URL}/search/users?${params}`);
  const { items } = await res.json();
  return items;
};

// Get a single user
export const getUser = async (login) => {
  const res = await fetch(`${GITHUB_URL}/users/${login}`);
  if (res.status === 404) {
    window.location = '/notfound';
  } else {
    const data = await res.json();
    return data;
  }
};

// User's Repos details
export const getUserRepo = async (text) => {
  const res = await fetch(
    `${GITHUB_URL}/users/${text}/repos?per_page=20&sort=created:asc`
  );
  const data = await res.json();
  return data;
};
