import Storefront from '../storefront';
import {notFound} from 'next/navigation';
const titles:Record<string,string>={products:'Hardware, Paint & Building Supplies in Harare', 'bulk-orders':'Bulk Supplies for Your Project','how-it-works':'How to Request a Quotation',about:'About Naipa Investments Trading',contact:'Contact Philtom',quotation:'Your Quotation List'};
export async function generateMetadata({params}:{params:Promise<{page:string}>}){const {page}=await params;return {title:`${titles[page]||'Philtom'} | Philtom`,description:'Source hardware, paint, tools, furniture and building supplies from Mbare Magaba, Harare. Request a personalised quotation.'}}
export default async function Page({params}:{params:Promise<{page:string}>}){const {page}=await params;if(!titles[page])notFound();return <Storefront page={page}/>}

