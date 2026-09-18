export const categories = [
{name:'Paint & Painting',items:['Interior paint','Exterior paint','Primers','Undercoats','Brushes','Rollers','Thinners','Paint accessories'],icon:'paint'},
{name:'Hardware',items:['Nails','Screws','Bolts','Nuts','Hinges','Locks','Brackets','General hardware'],icon:'hardware'},
{name:'Tools',items:['Hammers','Screwdrivers','Spanners','Pliers','Drills','Grinders','Saws','Measuring tools','Construction tools'],icon:'tools'},
{name:'Building Materials',items:['Cement','Adhesives','Sealants','Roofing-related products','Construction accessories','Other building supplies'],icon:'building'},
{name:'Plumbing',items:['Pipes','Fittings','Taps','Valves','Plumbing accessories'],icon:'plumbing'},
{name:'Electrical',items:['Cables','Switches','Sockets','Lighting','Electrical accessories'],icon:'electrical'},
{name:'Furniture',items:['Tables','Chairs','Cabinets','Shelving','Office furniture','Household furniture'],icon:'furniture'},
{name:'Other Supplies',items:['Home improvement products','General merchandise'],icon:'other'}];
export type Product={id:string;name:string;category:string;description:string;image:string;variants:string;unit:string;price:string;availability:string;featured:number};
export type Settings={whatsapp:string;phone:string;email:string;hours:string;address:string};
export const defaultSettings:Settings={whatsapp:'+263772858260',phone:'+263772858260, +263714858260, +263774995871',email:'',hours:'24/7',address:'Mbare Magaba, Harare, Zimbabwe'};

