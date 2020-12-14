export function format(value: string): string {
  return value.toUpperCase();
}

export function getRandom(): number {
  return Math.floor(Math.random() * 100);
}

export function getTemp() {
  return 42;
}

export const data = {
  first: 'Craig',
  last: 'West',
};

export async function getJSON() {
  const response = await fetch('https://randomuser.me/api/?results=1');
  const movies = await response.json();
  return movies;
}

export async function getConferences() {
  const response = await fetch(`https://wpjs.co.uk/enterprise/wp-json/enterprise/v2/get-country-data?code=USA`);
  const conf = await response.json();
  return conf;
}
