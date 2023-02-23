import type {Config} from "@sveltejs/adapter-vercel";
import { nanoid } from "nanoid";
import type {RequestHandler} from "@sveltejs/kit";
import {json} from "@sveltejs/kit";

export const config: Config = {
    isr: {
        expiration: 15
    }
}

export const prerender = 'auto';

export const GET = (() => {
    let id = nanoid();

    return json({id});
}) satisfies RequestHandler;
