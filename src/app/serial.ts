export class Serial{
    constructor(
        public id: number,
        public path: string,
        public title: string,
        public description: string,
        public episodes : number,
        public seasons : number,
        public imgUrl: string,
    ){}
}
// export interface ISerial{
//     id: number;
//     title: string;
//     description: string;
//     episodes : number;
//     seasons : number;
//     imgUrl: string;
// }
