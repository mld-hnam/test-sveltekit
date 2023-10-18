import type { Config } from "@sveltejs/adapter-vercel";
import type { PageServerLoad } from "./$types";

export const config: Config = {
  isr: {
    expiration: 15,
  },
};

export const prerender = "auto";

export const load: PageServerLoad = async () => {
  const res = await fetch(`https://randomuser.me/api/`);
  const data = await res.json();
  console.log(data);
  const user = data.results[0];
  return user;
};
