import {ProjectStatus} from './enum/ProjectStatus';
import {Category} from './Category';



export class Project{

  id: number;

  name: string;

  lastUpdatedSum: number;

  shortDescription: string;

  amount: number;

  createdAt: Date;

  updatedAt: Date;

  status: ProjectStatus;

  categories: Category[];

   minDonationAmount: number;

  maxDonationAmount: number;

}
