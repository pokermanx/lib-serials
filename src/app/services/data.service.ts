import { Serial } from '../serial';
import { Title } from '../../../node_modules/@angular/platform-browser';
 
export class DataService{
 
    public data: Serial[] = [
        { id:0,
            path: "stranger_things",
            title: "Stranger Things",
            description: "Американський науково-фантастичний серіал, створений братами Даффер для сервісу VOD Netflix. Всі вісім епізодів першого сезону серіалу були опубліковані 15 липня 2016 року на офіційному сайті телеканалу. Сюжет розвивається в 1983 році в штаті Індіана, де таємничим чином зникає маленький хлопчик, а його мати, друзі і шеф місцевої поліції починають пошуки зниклого. Серіал отримав високі оцінки телекритиків, які відзначили атмосферність, акторську гру і відсилання до жанрових фільмів 1980-х років.",
            seasons: 2,
            episodes: 17,
            imgUrl: "http://farofageek.com.br/wp-content/uploads/2017/11/welcome-to-hawkins-780x445.jpg"
        },
        { id:1,
            path: "true_detective",
            title: "True Detective",
            description: "Is an American anthology crime drama television series created and written by Nic Pizzolatto. The series, broadcast by the premium cable network HBO in the United States, premiered on January 12, 2014. Each season of the series is structured as a disparate, self-contained narrative, employing new cast ensembles and following various sets of characters and settings.",
            seasons: 2,
            episodes: 18,
            imgUrl: "https://www.hbo.com/content/dam/hbodata/series/true-detective/episodes/01/true-detective-s1-1920x1080.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg"
        },
        { id:2,
            path: "true_detective",
            title: "the breaking bad",
            description: "Американський драматичний телесеріал, написаний Вінсом Ґілліганом. Продюсерами шоу стали Sony Pictures Television. Серіал транслюється у США і Канаді на кабельному телеканалі АМС. Серіал номінувався на «Еммі» і виграв по дві номінації в 2008, 2009 і 2010 роках, включаючи престижну «Найкращий актор драматичного серіалу»[1]. Перша серія першого сезону вийшла в ефір 20 січня 2008 року. Всього серіал складається з п'яти сезонів. 29 вересня 2013 року вийшов останній епізод.",
            seasons: 5,
            episodes: 62,
            imgUrl: "https://thetechreviewer-thetechrevw.netdna-ssl.com/wp-content/uploads//2013/10/Watch-Breaking-Bad-Online.jpg"
        },
        { id:3,
            path: "true_detective",
            title: "black mirror",
            description: "Black Mirror is a British science fiction anthology television series created by Charlie Brooker, with Brooker and Annabel Jones serving as the programme showrunners. It examines modern society, particularly with regard to the unanticipated consequences of new technologies. Episodes are standalone, usually set in an alternative present or the near future, often with a dark and satirical tone, though some are more experimental and lighter.",
            seasons: 4,
            episodes: 19,
            imgUrl: "https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5a9d7be424a694c21bc5f45c/1520270314719/?format=2500w"
        },
        { id:4,
            path: "",
            title: "mr. robot",
            description: "Американський психологічний серіал, створений Семом Есмаілем. Його головний герой Еліот Алдерсон, інженер кібербезпеки та гакер, страждає від соціофобії та клінічної депресії. Анархіст на ім'я Містео Робот пропонує Алдерсону долучитися до групи активістів, метою якої є знищення всіх грошових боргів шляхом здійснення атак на корпорацію E Corp.Трансляція серіалу почалась 24 червня 2015 на телеканалі USA Network.",
            seasons: 3,
            episodes: 22,
            imgUrl: "https://s1.stc.all.kpcdn.net/putevoditel/projectid_379258/images/tild3038-3939-4534-b036-616535393133__mrrobot.jpg"
        }
        
    ];

    getData(): Serial[] {
        return this.data;
    }
    // addData(id: number, title: string, description: string, episodes: number, seasons: number, imgUrl: string){
    //     this.data.push(new Serial(id, title, description, episodes, seasons, imgUrl));
    // }
}