export enum CompanyType {
	'Biuro nieruchomości' = 1,
	'Deweloper' = 2,
	'Firma' = 3,
}

export interface Company {
	name?: string;
	id?: number;
	type?: CompanyType;
}
export interface Offer {
	id?: number;
	title?: string;
	slug?: string;
	price?: number;
	area?: number;
	province?: string;
	city?: string;
	company?: Company;
	floors_num?: number;
	rooms_num?: number;
	images?: string[];
}

export interface Article {
	title: string;
	id: number;
	slug?: string;
	category?: string;
	imgUrl: string;
}
