export class Serial{
    public id: number;
    public title: string;
    public description: string;
    public episodes : number;
    public seasons : number;
    public imgUrl: string;

    constructor(
        id: number,
        title: string,
        description: string,
        episodes : number,
        seasons : number,
        imgUrl: string,
    ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.episodes = episodes;
        this.seasons = seasons;
        this.imgUrl = imgUrl;
    }
}
// export interface ISerial{
//     id: number;
//     title: string;
//     description: string;
//     episodes : number;
//     seasons : number;
//     imgUrl: string;
// }
