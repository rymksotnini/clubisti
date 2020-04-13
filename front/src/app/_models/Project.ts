import {ProjectStatus} from './enum/ProjectStatus';
import {Category} from './Category';



export class Project{

  id: number;

  name: string;

  last_updated_sum: number;

  shortDescription: string;

  amount: number;

  created_at: Date;

  updated_at: Date;

  status: ProjectStatus;

  categories: Category[];

  min_donation_amount: number;

  max_donation_amount: number;

}
