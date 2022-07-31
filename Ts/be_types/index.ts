/* Do not change, this code is generated from Golang structs */
/* eslint-disable */

export interface BE_Terrain {
    dimensions?: string;
    type_id?: number;
    media_mask_id?: number[];
    access_mask_id?: number[];
    vicinity_mask_id?: number[];
    location_id?: number;
    fence?: boolean;
}
export interface BE_Hall {
    height?: number;
    heating?: boolean;
    office_space?: boolean;
    social_facilities?: boolean;
    ramp?: boolean;
    access_mask_id?: number[];
    structure_id?: number;
    media_mask_id?: number[];
    use_mask_id?: number[];
    parking_type_id?: number;
    flooring_id?: number;
    construction_status_id?: number;
    security_mask_id?: number[];
    fence_id?: number;
}
export interface BE_Garage {
    heating?: boolean;
    lighting?: boolean;
    localization_id?: number;
    structure_id?: number;
}
export interface BE_Commercial {
    free_from?: string;
    furnished?: boolean;
    terrain_area?: number;
    build_year?: number;
    property_use_mask_id?: number[];
    extras_mask_id?: number[];
    floor_id?: number;
    building_type_id?: number;
    construction_status_id?: number;
    media_mask_id?: number[];
    security_mask_id?: number[];
}
export interface BE_Room {
    furnished?: boolean;
    room_place?: boolean;
    rooms_num?: number;
    rent?: number;
    rent_currency_id?: number;
    deposit?: number;
    deposit_currency_id?: number;
    women_in_flat?: number;
    men_in_flat?: number;
    women_in_room?: number;
    men_in_room?: number;
    balcony?: boolean;
    free_from?: string;
    non_smokers_only?: boolean;
    persons_mask_id?: number[];
    building_type_id?: number;
    media_mask_id?: number[];
    equipment_mask_id?: number[];
    preferred_sex_id?: number;
    preferred_profession_id?: number;
}
export interface BE_House {
    terrain_area?: number;
    build_year?: number;
    rooms_num?: number;
    free_from?: string;
    furnished?: boolean;
    rent?: number;
    rent_currency_id?: number;
    price_include_rent?: boolean;
    building_type_id?: number;
    building_material_id?: number;
    construction_status_id?: number;
    roof_type_id?: number;
    type_id?: number;
    deposit?: number;
    deposit_currency_id?: number;
    floors_num_id?: number;
    garret_type_id?: number;
    windows_type_id?: number;
    media_mask_id?: number[];
    heating_mask_id?: number[];
    fence_mask_id?: number[];
    extras_mask_id?: number[];
    access_mask_id?: number[];
    vicinity_mask_id?: number[];
    security_mask_id?: number[];
    location_id?: number;
    roofing_id?: number;
}
export interface BE_Flat {
    building_floors_num?: number;
    rooms_num?: number;
    build_year?: number;
    free_from?: string;
    furnished?: boolean;
    rent?: number;
    rent_currency_id?: number;
    price_include_rent?: boolean;
    rent_to_students?: boolean;
    deposit?: number;
    deposit_currency_id?: number;
    building_type_id?: number;
    building_material_id?: number;
    building_ownership_id?: number;
    construction_status_id?: number;
    floor_no_id?: number;
    extras_mask_id?: number[];
    heating_id?: number;
    windows_type_id?: number;
    security_mask_id?: number[];
    media_mask_id?: number[];
    equipment_mask_id?: number[];
}
export interface BE_Category {
    id?: number;
    name?: string;
    description?: string;
    parent_id?: number;
    slug: string;
    subcategories?: BE_Category[];
    companies?: BE_Company[];
    articles?: BE_Article[];
    translation?: {[key: string]: string};
}
export interface BE_Article {
    id?: number;
    title?: string;
    body?: string;
    description?: string;
    user_id?: number;
    categories?: BE_Category[];
    media?: {[key: string]: string};
    companies?: BE_Company[];
    invests?: BE_CompanyInvest[];
    slug_10?: string;
    slug?: string;
    media_add?: string[];
    media_delete?: number[];
    active?: boolean;
    logo_url?: string;
    logo_bh?: string;
    category_id?: number[];
}
export interface BE_CompanyInvest {
    id?: number;
    name?: string;
    price?: number;
    area?: number;
    description?: string;
    status_id?: number;
    status?: BE_DStatus;
    centroid?: BE_Centroid;
    box?: number[][2];
    zip_code?: string;
    floors_num?: number;
    building_num?: number;
    building_type?: string;
    building_construction_status?: string;
    build_year?: string;
    facilities?: string[];
    market_type?: string;
    standard?: string;
    available_from?: string;
    media?: string;
    company_id?: number;
    company?: BE_Company;
    articles?: BE_Article[];
    slug?: string;
    commercial_invest?: boolean;
    flat_invest?: boolean;
    house_invest?: boolean;
    offer_count?: number;
    min_offer_area?: number;
    max_offer_area?: number;
    min_offer_price?: number;
    max_offer_price?: number;
    min_price_per_meter?: number;
    max_price_per_meter?: number;
    room_height?: string;
    finishing_standard?: string;
    property_type?: string;
    storage_rooms?: string;
    parking_places?: string;
    heating?: string;
    others?: string;
    visitors?: number;
    phone_num_clicks?: number;
    messages?: number;
    logo_url?: string;
    logo_bh?: string;
    media_add?: string[];
    media_delete?: number[];
}
export interface BE_DCompanyType {
    id?: number;
    value?: string;
    translation: {[key: string]: string};
    key?: string;
}
export interface BE_Company {
    id?: number;
    name?: string;
    owner_id?: number;
    bucket_access_key?: string;
    demo_web_address?: string;
    acc_valid_to: Date;
    at_valid_to: Date;
    at_avail_chars?: number;
    email?: string;
    phone?: string;
    description?: string;
    body?: string;
    type_id?: number;
    type?: BE_DCompanyType;
    regon?: string;
    vat_num?: string;
    country?: string;
    city?: string;
    street?: string;
    flat_num?: string;
    house_num?: string;
    zip_code?: string;
    web_url?: string;
    logo_url?: string;
    logo_bh?: string;
    contact_email?: string;
    contact_phone?: string;
    contact_name?: string;
    contact_country?: string;
    contact_city?: string;
    contact_street?: string;
    contact_flat_num?: string;
    contact_house_num?: string;
    contact_zip_code?: string;
    media?: {[key: string]: string};
    email_verified_at?: Date;
    company_verified_at?: Date;
    payment_prefix?: string;
    slug: string;
    subscribed_to?: Date;
    raise_count?: number;
    promote_week_count?: number;
    promote_month_count?: number;
    media_add?: {[key: string]: any}[];
    media_delete?: string[];
    is_banned?: boolean;
    is_hidden?: boolean;
    terms?: Date;
    payment_data_id: number;
    token_id: string;
}
export interface BE_User {
    id?: number;
    email?: string;
    password?: string;
    role_id: number;
    company_id: number;
    company?: BE_Company;
    visible_name?: string;
    first_name?: string;
    last_name?: string;
    last_login: Date;
    lang?: string;
    company_name?: string;
    phone?: string;
    country?: string;
    city?: string;
    street?: string;
    flat_num?: string;
    house_num?: string;
    zip_code?: string;
    is_licensed?: boolean;
    logo_url?: string;
    logo_bh?: string;
    raise_count?: number;
    promote_week_count?: number;
    promote_month_count?: number;
    views?: number;
    messages?: number;
    calls?: number;
    description?: string;
    specialization?: string;
    slug?: string;
    tz: string;
    payment_first_name?: string;
    payment_last_name?: string;
    payment_phone?: string;
    payment_country?: string;
    payment_city?: string;
    payment_street?: string;
    payment_flat_num?: string;
    payment_house_num?: string;
    payment_zip_code?: string;
    is_banned?: boolean;
    is_hidden?: boolean;
    terms?: Date;
}
export interface BE_DStatus {
    id?: number;
    value_pl?: string;
}
export interface BE_Centroid {
    x: number;
    y: number;
}
export interface BE_Offer {
    id?: number;
    agency?: string;
    creation_date?: string;
    external_id?: string;
    title?: string;
    description?: string;
    centroid?: BE_Centroid;
    box?: number[][2];
    country_name?: string;
    country_code?: string;
    flat_num?: string;
    house_num?: string;
    object_name_id?: number;
    offer_type_id?: number;
    market_type_id?: number;
    price_currency_id?: number;
    building_num?: string;
    price_type_id?: number;
    price?: number;
    area?: number;
    rooms_num?: number;
    status_id?: number;
    d_status?: BE_DStatus;
    photo?: {[key: string]: string};
    user_id?: number;
    user?: BE_User;
    company_id?: number;
    company?: BE_Company;
    agent_id?: number;
    agent?: BE_User;
    agent_license?: string;
    company_invest_id?: number;
    company_invest?: BE_CompanyInvest;
    created_at?: Date;
    active_since?: Date;
    active_to?: Date;
    promoted_to?: Date;
    is_imported: boolean;
    visitors?: number;
    hits?: number;
    phone_num_clicks?: number;
    messages?: number;
    floors_num?: string;
    photo_add?: string[];
    photo_delete?: number[];
    phone_nums?: string[];
    details?: {[key: string]: any};
    video?: string;
    panorama?: string;
    virtual_walk?: string;
    main_language?: string;
    other_languages?: string[];
    translations?: {[key: string]: string};
    slug?: string;
    location_id?: number;
    city_id?: number;
    city_name?: string;
    city_slug?: string;
    city_centroid?: BE_Centroid;
    quarter_id?: number;
    street_id?: number;
    street_name?: string;
    province_id?: number;
    province_name?: string;
    province_slug?: string;
    district_id?: number;
    district_name?: string;
    flat?: BE_Flat;
    house?: BE_House;
    room?: BE_Room;
    commercial?: BE_Commercial;
    garage?: BE_Garage;
    hall?: BE_Hall;
    terrain?: BE_Terrain;
}
export interface BE_Message {
    id?: number;
    name?: string;
    phone?: string;
    message?: string;
    message_from?: string;
    message_to_user?: number;
    user?: BE_User;
    message_to_company?: number;
    company?: BE_Company;
    invest_id?: number;
    company_invest?: BE_CompanyInvest;
    offer_id?: number;
    offer?: BE_Offer;
    created_at: Date;
    is_read?: boolean;
}
export enum DLanguage {
	'enum|d_language|af' = 'af',
	'enum|d_language|sq' = 'sq',
	'enum|d_language|am' = 'am',
	'enum|d_language|ar' = 'ar',
	'enum|d_language|hy' = 'hy',
	'enum|d_language|az' = 'az',
	'enum|d_language|eu' = 'eu',
	'enum|d_language|be' = 'be',
	'enum|d_language|bn' = 'bn',
	'enum|d_language|bs' = 'bs',
	'enum|d_language|bg' = 'bg',
	'enum|d_language|ca' = 'ca',
	'enum|d_language|ceb' = 'ceb',
	'enum|d_language|zh-CN' = 'zh-CN',
	'enum|d_language|zh-TW' = 'zh-TW',
	'enum|d_language|co' = 'co',
	'enum|d_language|hr' = 'hr',
	'enum|d_language|cs' = 'cs',
	'enum|d_language|da' = 'da',
	'enum|d_language|nl' = 'nl',
	'enum|d_language|en' = 'en',
	'enum|d_language|eo' = 'eo',
	'enum|d_language|et' = 'et',
	'enum|d_language|fi' = 'fi',
	'enum|d_language|fr' = 'fr',
	'enum|d_language|fy' = 'fy',
	'enum|d_language|gl' = 'gl',
	'enum|d_language|ka' = 'ka',
	'enum|d_language|de' = 'de',
	'enum|d_language|el' = 'el',
	'enum|d_language|gu' = 'gu',
	'enum|d_language|ht' = 'ht',
	'enum|d_language|ha' = 'ha',
	'enum|d_language|haw' = 'haw',
	'enum|d_language|iw' = 'iw',
	'enum|d_language|hi' = 'hi',
	'enum|d_language|hmn' = 'hmn',
	'enum|d_language|hu' = 'hu',
	'enum|d_language|is' = 'is',
	'enum|d_language|ig' = 'ig',
	'enum|d_language|id' = 'id',
	'enum|d_language|ga' = 'ga',
	'enum|d_language|it' = 'it',
	'enum|d_language|ja' = 'ja',
	'enum|d_language|jw' = 'jw',
	'enum|d_language|kn' = 'kn',
	'enum|d_language|kk' = 'kk',
	'enum|d_language|km' = 'km',
	'enum|d_language|ko' = 'ko',
	'enum|d_language|ku' = 'ku',
	'enum|d_language|ky' = 'ky',
	'enum|d_language|lo' = 'lo',
	'enum|d_language|la' = 'la',
	'enum|d_language|lv' = 'lv',
	'enum|d_language|lt' = 'lt',
	'enum|d_language|lb' = 'lb',
	'enum|d_language|mk' = 'mk',
	'enum|d_language|mg' = 'mg',
	'enum|d_language|ms' = 'ms',
	'enum|d_language|ml' = 'ml',
	'enum|d_language|mt' = 'mt',
	'enum|d_language|mi' = 'mi',
	'enum|d_language|mr' = 'mr',
	'enum|d_language|mn' = 'mn',
	'enum|d_language|my' = 'my',
	'enum|d_language|ne' = 'ne',
	'enum|d_language|no' = 'no',
	'enum|d_language|ny' = 'ny',
	'enum|d_language|ps' = 'ps',
	'enum|d_language|fa' = 'fa',
	'enum|d_language|pl' = 'pl',
	'enum|d_language|pt' = 'pt',
	'enum|d_language|pa' = 'pa',
	'enum|d_language|ro' = 'ro',
	'enum|d_language|ru' = 'ru',
	'enum|d_language|sm' = 'sm',
	'enum|d_language|gd' = 'gd',
	'enum|d_language|sr' = 'sr',
	'enum|d_language|st' = 'st',
	'enum|d_language|sn' = 'sn',
	'enum|d_language|sd' = 'sd',
	'enum|d_language|si' = 'si',
	'enum|d_language|sk' = 'sk',
	'enum|d_language|sl' = 'sl',
	'enum|d_language|so' = 'so',
	'enum|d_language|es' = 'es',
	'enum|d_language|su' = 'su',
	'enum|d_language|sw' = 'sw',
	'enum|d_language|sv' = 'sv',
	'enum|d_language|tl' = 'tl',
	'enum|d_language|tg' = 'tg',
	'enum|d_language|ta' = 'ta',
	'enum|d_language|te' = 'te',
	'enum|d_language|th' = 'th',
	'enum|d_language|tr' = 'tr',
	'enum|d_language|uk' = 'uk',
	'enum|d_language|ur' = 'ur',
	'enum|d_language|uz' = 'uz',
	'enum|d_language|vi' = 'vi',
	'enum|d_language|cy' = 'cy',
	'enum|d_language|xh' = 'xh',
	'enum|d_language|yi' = 'yi',
	'enum|d_language|yo' = 'yo',
	'enum|d_language|zu' = 'zu',
}

export enum DCompanyType {
	'enum|d_company_type|developer' = 2,
	'enum|d_company_type|office' = 1,
	'enum|d_company_type|partner' = 3,
}

export enum DRole {
	'enum|d_role|meneger' = 4,
	'enum|d_role|author' = 2,
	'enum|d_role|admin' = 1,
	'enum|d_role|advertiser' = 5,
	'enum|d_role|agent' = 3,
}

export enum DObjectName {
	'enum|d_object_name|garage' = 7,
	'enum|d_object_name|flat' = 1,
	'enum|d_object_name|commercial' = 5,
	'enum|d_object_name|room' = 4,
	'enum|d_object_name|house' = 2,
	'enum|d_object_name|terrain' = 3,
	'enum|d_object_name|hall' = 6,
}

export enum DStatus {
	'enum|d_status|aktywne' = 2,
	'enum|d_status|archiwalne' = 5,
	'enum|d_status|nie istnieje' = 9,
	'enum|d_status|niewidoczne' = 10,
	'enum|d_status|zarezerwowane' = 12,
	'enum|d_status|zablokowane' = 4,
	'enum|d_status|tymczasowe' = 1,
	'enum|d_status|nieaktywne' = 3,
}

export enum DCurrencies {
	'enum|d_currencies|USD' = 'USD',
	'enum|d_currencies|EUR' = 'EUR',
	'enum|d_currencies|PLN' = 'PLN',
	'enum|d_currencies|GBP' = 'GBP',
	'enum|d_currencies|CZK' = 'CZK',
}

export enum Dictionaries {
	'enum|media_mask|416' = 416,
	'enum|type|421' = 421,
	'enum|building_material|36' = 36,
	'enum|localization|110' = 110,
	'enum|extras_mask|112' = 112,
	'enum|type|422' = 422,
	'enum|building_material|39' = 39,
	'enum|building_material|42' = 42,
	'enum|building_type|50' = 50,
	'enum|building_type|398' = 398,
	'enum|equipment_mask|361' = 361,
	'enum|floor|9' = 9,
	'enum|floor|10' = 10,
	'enum|building_type|52' = 52,
	'enum|building_type|54' = 54,
	'enum|building_type|56' = 56,
	'enum|floor_no|77' = 77,
	'enum|floor_no|87' = 87,
	'enum|security_mask|100' = 100,
	'enum|price_type|345' = 345,
	'enum|security_mask|127' = 127,
	'enum|building_material|142' = 142,
	'enum|property_use_mask|25' = 25,
	'enum|property_use_mask|29' = 29,
	'enum|building_type|154' = 154,
	'enum|construction_status|155' = 155,
	'enum|extras_mask|167' = 167,
	'enum|fence_mask|174' = 174,
	'enum|access_mask|181' = 181,
	'enum|media_mask|189' = 189,
	'enum|media_mask|190' = 190,
	'enum|roof_type|192' = 192,
	'enum|roofing|196' = 196,
	'enum|security_mask|208' = 208,
	'enum|garret_type|450' = 450,
	'enum|building_material|40' = 40,
	'enum|building_type|55' = 55,
	'enum|construction_status|59' = 59,
	'enum|floor_no|82' = 82,
	'enum|floor_no|84' = 84,
	'enum|media_mask|418' = 418,
	'enum|heating|91' = 91,
	'enum|media_mask|99' = 99,
	'enum|security_mask|102' = 102,
	'enum|building_material|147' = 147,
	'enum|vicinity_mask|368' = 368,
	'enum|equipment_mask|362' = 362,
	'enum|floors_num|178' = 178,
	'enum|location|182' = 182,
	'enum|persons_mask|351' = 351,
	'enum|media_mask|185' = 185,
	'enum|roofing|200' = 200,
	'enum|type|209' = 209,
	'enum|structure|381' = 381,
	'enum|building_type|433' = 433,
	'enum|vicinity_mask|214' = 214,
	'enum|construction_status|435' = 435,
	'enum|heating_mask|227' = 227,
	'enum|extras_mask|117' = 117,
	'enum|garret_type|449' = 449,
	'enum|access_mask|443' = 443,
	'enum|flooring|120' = 120,
	'enum|parking_type|139' = 139,
	'enum|structure|396' = 396,
	'enum|media_mask|16' = 16,
	'enum|use_mask|446' = 446,
	'enum|media_mask|17' = 17,
	'enum|property_use_mask|27' = 27,
	'enum|security_mask|30' = 30,
	'enum|building_material|45' = 45,
	'enum|security_mask|103' = 103,
	'enum|security_mask|105' = 105,
	'enum|offer_type|343' = 343,
	'enum|offer_type|344' = 344,
	'enum|building_material|140' = 140,
	'enum|building_type|153' = 153,
	'enum|floor_no|90' = 90,
	'enum|floor|14' = 14,
	'enum|extras_mask|114' = 114,
	'enum|type|424' = 424,
	'enum|floor|4' = 4,
	'enum|vicinity_mask|371' = 371,
	'enum|building_type|399' = 399,
	'enum|media_mask|20' = 20,
	'enum|media_mask|354' = 354,
	'enum|persons_mask|348' = 348,
	'enum|media_mask|21' = 21,
	'enum|property_use_mask|26' = 26,
	'enum|preferred_profession|353' = 353,
	'enum|preferred_sex|405' = 405,
	'enum|property_use_mask|28' = 28,
	'enum|extras_mask|161' = 161,
	'enum|security_mask|33' = 33,
	'enum|extras_mask|163' = 163,
	'enum|fence_mask|172' = 172,
	'enum|floors_num|177' = 177,
	'enum|security_mask|205' = 205,
	'enum|heating_mask|225' = 225,
	'enum|construction_status|129' = 129,
	'enum|construction_status|130' = 130,
	'enum|structure|392' = 392,
	'enum|location|412' = 412,
	'enum|type|420' = 420,
	'enum|localization|109' = 109,
	'enum|localization|111' = 111,
	'enum|price_type|346' = 346,
	'enum|floor|13' = 13,
	'enum|building_material|41' = 41,
	'enum|type|427' = 427,
	'enum|building_type|401' = 401,
	'enum|equipment_mask|360' = 360,
	'enum|building_ownership|49' = 49,
	'enum|extras_mask|74' = 74,
	'enum|extras_mask|75' = 75,
	'enum|floor_no|80' = 80,
	'enum|floor_no|81' = 81,
	'enum|floor_no|85' = 85,
	'enum|heating|93' = 93,
	'enum|heating|96' = 96,
	'enum|market_type|220' = 220,
	'enum|building_material|141' = 141,
	'enum|building_type|149' = 149,
	'enum|fence_mask|173' = 173,
	'enum|media_mask|188' = 188,
	'enum|type|210' = 210,
	'enum|windows_type|217' = 217,
	'enum|building_type|430' = 430,
	'enum|media_mask|383' = 383,
	'enum|media_mask|385' = 385,
	'enum|parking_type|134' = 134,
	'enum|structure|395' = 395,
	'enum|use_mask|445' = 445,
	'enum|building_type|431' = 431,
	'enum|construction_status|436' = 436,
	'enum|floor|1' = 1,
	'enum|floor|6' = 6,
	'enum|building_material|37' = 37,
	'enum|building_type|53' = 53,
	'enum|construction_status|58' = 58,
	'enum|equipment_mask|60' = 60,
	'enum|equipment_mask|62' = 62,
	'enum|extras_mask|67' = 67,
	'enum|extras_mask|70' = 70,
	'enum|extras_mask|71' = 71,
	'enum|structure|379' = 379,
	'enum|access_mask|407' = 407,
	'enum|floor_no|89' = 89,
	'enum|building_type|434' = 434,
	'enum|media_mask|414' = 414,
	'enum|extras_mask|113' = 113,
	'enum|vicinity_mask|369' = 369,
	'enum|floor|11' = 11,
	'enum|vicinity_mask|370' = 370,
	'enum|floor|12' = 12,
	'enum|equipment_mask|358' = 358,
	'enum|media_mask|356' = 356,
	'enum|preferred_profession|352' = 352,
	'enum|flooring|121' = 121,
	'enum|media_mask|387' = 387,
	'enum|parking_type|135' = 135,
	'enum|heating|95' = 95,
	'enum|windows_type|107' = 107,
	'enum|windows_type|108' = 108,
	'enum|building_material|145' = 145,
	'enum|building_type|152' = 152,
	'enum|construction_status|159' = 159,
	'enum|location|184' = 184,
	'enum|roofing|199' = 199,
	'enum|heating_mask|221' = 221,
	'enum|heating_mask|223' = 223,
	'enum|heating_mask|226' = 226,
	'enum|building_ownership|48' = 48,
	'enum|extras_mask|72' = 72,
	'enum|floor_no|86' = 86,
	'enum|media_mask|98' = 98,
	'enum|security_mask|104' = 104,
	'enum|building_material|146' = 146,
	'enum|construction_status|158' = 158,
	'enum|floors_num|175' = 175,
	'enum|roofing|198' = 198,
	'enum|security_mask|203' = 203,
	'enum|windows_type|216' = 216,
	'enum|location|410' = 410,
	'enum|media_mask|417' = 417,
	'enum|building_type|400' = 400,
	'enum|equipment_mask|357' = 357,
	'enum|persons_mask|349' = 349,
	'enum|persons_mask|350' = 350,
	'enum|fence|118' = 118,
	'enum|structure|380' = 380,
	'enum|building_type|429' = 429,
	'enum|floor|5' = 5,
	'enum|media_mask|18' = 18,
	'enum|building_material|38' = 38,
	'enum|building_material|44' = 44,
	'enum|equipment_mask|65' = 65,
	'enum|extras_mask|73' = 73,
	'enum|building_material|148' = 148,
	'enum|extras_mask|166' = 166,
	'enum|fence_mask|171' = 171,
	'enum|location|183' = 183,
	'enum|heating_mask|231' = 231,
	'enum|access_mask|441' = 441,
	'enum|access_mask|442' = 442,
	'enum|security_mask|125' = 125,
	'enum|property_use_mask|24' = 24,
	'enum|building_type|428' = 428,
	'enum|building_type|432' = 432,
	'enum|building_type|402' = 402,
	'enum|floor|8' = 8,
	'enum|media_mask|355' = 355,
	'enum|preferred_sex|404' = 404,
	'enum|media_mask|15' = 15,
	'enum|preferred_sex|406' = 406,
	'enum|security_mask|31' = 31,
	'enum|security_mask|32' = 32,
	'enum|security_mask|35' = 35,
	'enum|equipment_mask|63' = 63,
	'enum|equipment_mask|64' = 64,
	'enum|extras_mask|66' = 66,
	'enum|floor_no|79' = 79,
	'enum|floor_no|83' = 83,
	'enum|floor_no|88' = 88,
	'enum|media_mask|97' = 97,
	'enum|windows_type|106' = 106,
	'enum|building_material|143' = 143,
	'enum|construction_status|156' = 156,
	'enum|extras_mask|160' = 160,
	'enum|roof_type|194' = 194,
	'enum|roofing|202' = 202,
	'enum|security_mask|206' = 206,
	'enum|vicinity_mask|211' = 211,
	'enum|windows_type|218' = 218,
	'enum|heating_mask|224' = 224,
	'enum|heating_mask|229' = 229,
	'enum|flooring|122' = 122,
	'enum|media_mask|389' = 389,
	'enum|security_mask|124' = 124,
	'enum|use_mask|447' = 447,
	'enum|access_mask|409' = 409,
	'enum|type|426' = 426,
	'enum|extras_mask|115' = 115,
	'enum|building_type|397' = 397,
	'enum|extras_mask|116' = 116,
	'enum|floor|7' = 7,
	'enum|equipment_mask|359' = 359,
	'enum|building_material|43' = 43,
	'enum|building_ownership|47' = 47,
	'enum|construction_status|57' = 57,
	'enum|extras_mask|68' = 68,
	'enum|extras_mask|76' = 76,
	'enum|market_type|219' = 219,
	'enum|building_type|150' = 150,
	'enum|building_type|151' = 151,
	'enum|extras_mask|162' = 162,
	'enum|extras_mask|164' = 164,
	'enum|floors_num|176' = 176,
	'enum|access_mask|180' = 180,
	'enum|media_mask|187' = 187,
	'enum|security_mask|207' = 207,
	'enum|heating_mask|222' = 222,
	'enum|heating_mask|228' = 228,
	'enum|heating_mask|230' = 230,
	'enum|garret_type|448' = 448,
	'enum|construction_status|131' = 131,
	'enum|fence|119' = 119,
	'enum|media_mask|386' = 386,
	'enum|media_mask|388' = 388,
	'enum|media_mask|390' = 390,
	'enum|parking_type|136' = 136,
	'enum|security_mask|126' = 126,
	'enum|use_mask|444' = 444,
	'enum|heating|92' = 92,
	'enum|media_mask|191' = 191,
	'enum|vicinity_mask|213' = 213,
	'enum|windows_type|215' = 215,
	'enum|media_mask|415' = 415,
	'enum|type|423' = 423,
	'enum|security_mask|34' = 34,
	'enum|building_type|51' = 51,
	'enum|extras_mask|69' = 69,
	'enum|building_material|144' = 144,
	'enum|extras_mask|165' = 165,
	'enum|fence_mask|168' = 168,
	'enum|fence_mask|169' = 169,
	'enum|roofing|195' = 195,
	'enum|roofing|197' = 197,
	'enum|security_mask|204' = 204,
	'enum|location|411' = 411,
	'enum|media_mask|419' = 419,
	'enum|type|425' = 425,
	'enum|vicinity_mask|367' = 367,
	'enum|construction_status|133' = 133,
	'enum|media_mask|382' = 382,
	'enum|security_mask|128' = 128,
	'enum|structure|391' = 391,
	'enum|structure|393' = 393,
	'enum|construction_status|437' = 437,
	'enum|floor|3' = 3,
	'enum|media_mask|22' = 22,
	'enum|equipment_mask|61' = 61,
	'enum|floor_no|78' = 78,
	'enum|media_mask|186' = 186,
	'enum|roof_type|193' = 193,
	'enum|roofing|201' = 201,
	'enum|media_mask|413' = 413,
	'enum|building_type|403' = 403,
	'enum|media_mask|384' = 384,
	'enum|parking_type|137' = 137,
	'enum|parking_type|138' = 138,
	'enum|media_mask|23' = 23,
	'enum|building_ownership|46' = 46,
	'enum|heating|94' = 94,
	'enum|security_mask|101' = 101,
	'enum|construction_status|157' = 157,
	'enum|fence_mask|170' = 170,
	'enum|access_mask|179' = 179,
	'enum|vicinity_mask|212' = 212,
	'enum|access_mask|408' = 408,
	'enum|construction_status|132' = 132,
	'enum|security_mask|123' = 123,
	'enum|structure|394' = 394,
	'enum|structure|378' = 378,
	'enum|floor|2' = 2,
	'enum|media_mask|19' = 19,
}
