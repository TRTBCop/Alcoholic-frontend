export interface AlcHistoryDay {
  id: string;
  write_date: string;
  alcohol_list: AlcHistoryDrunked[];
  memo: string;
}

export interface AlcHistoryDrunked {
  alcohol_name: string;
  alcohol_type: string;
  drunked: number;
  alcohol_intake: number;
  alcohol_image: string;
}
