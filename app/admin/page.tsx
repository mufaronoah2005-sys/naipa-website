import {requireChatGPTUser} from '../chatgpt-auth';
import {isAdmin} from '../../lib/server';
import Admin from './panel';
export const dynamic='force-dynamic';
export default async function Page(){await requireChatGPTUser('/admin');if(!await isAdmin())return <main style={{padding:50}}><h1>Administrator access required</h1><p>This account is not authorised to manage Philtom. The business owner must configure the administrator email allowlist.</p><a href="/">Return to the website</a></main>;return <Admin/>}

