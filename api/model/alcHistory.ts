export interface AlcHistoryWeek {
  id: string;
  write_date: string;
  alcohol_list: AlcHistoryDay[];
}

export interface AlcHistoryDay {
  alcohol_name: string;
  alcohol_type: string;
  drunked: number;
  alcohol_intake: number;
  alcohol_image: string;
}
