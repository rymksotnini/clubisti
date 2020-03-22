import {ProjectStatus} from './enum/ProjectStatus';
import {Category} from './Category';



export class Project{

  id: number;

  name: string;

  shortDescription: string;

  amount: number;

  status: ProjectStatus;

  categories: Category[];

}
