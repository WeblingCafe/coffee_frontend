export interface IOrderListHeader {
        value: string;
        columnName: keyof IOrderList;
}

export interface IOrderList {
    time: string;
    recipientId: string;
    menuId: string;
    category: string;
    personalCup: boolean;
    request: string;
    cancel?: boolean;
    call?: boolean;
}
  

