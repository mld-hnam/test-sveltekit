import type { PageServerLoad } from './$types';
import type {Config} from "@sveltejs/adapter-vercel";

export const config: Config = {
    isr: {
        expiration: 15
    }
}
export const load: PageServerLoad = () => {
    return {
        time: new Date()
    }
}
