import {env} from 'cloudflare:workers';
import {getChatGPTUser} from '../app/chatgpt-auth';
export function db(){if(!env.DB)throw Error('Database unavailable');return env.DB;}
export async function isAdmin(){const user=await getChatGPTUser();const allowed=(env as unknown as {ADMIN_EMAILS?:string}).ADMIN_EMAILS?.split(',').map(x=>x.trim().toLowerCase())||[];return !!user&&allowed.includes(user.email.toLowerCase());}
export function sameOrigin(request:Request){return request.headers.get('origin')===new URL(request.url).origin;}
