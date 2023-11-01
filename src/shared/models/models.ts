
interface pagination {
    total: number,
    limit: number,
    offset:number ,
    total_pages: number,
    current_page: number,
    next_url:string
}
interface info {
    license_text: string,
    license_links:Array<string>,
    version: number
}

interface config{
    iiif_url: string,
    website_url: string
}

interface thumbnail{
    lqip: string,
    width: number,
    height: number,
    alt_text: string
}
export interface data{
    
    id: number,
    title: string,
    artist_display?:string,
    image_id: string,
    date_start?:number,
    date_end?:number,
    description?:string,
    artist_titles?:Array<string>,
    category_titles:Array<string>,
    thumbnail?:thumbnail,
    publication_history?:string,
    exhibition_history?:string,

}

export interface result{
    pagination?:pagination,
    data:Array<data> ,
    info:info,
    config:config
}

export interface result1{
    pagination?:pagination,
    data:data ,
    info:info,
    config:config
}
