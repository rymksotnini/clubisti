import {Sort} from './sort';


export class Pageable {
  sort: Sort;
  offset: number;
  pageSize: number;
  pageNumber: number;
  paged: boolean;
  unpaged: boolean;

}

export class InfoPage {
  totalElements: number;
  last: boolean;
  totalPages: number;
  number: number;
  size: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
