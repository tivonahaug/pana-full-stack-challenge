export const SortByEnum = {
  BEST: 'BEST',
  PRICE_LOW: 'PRICE_LOW',
  PRICE_HIGH: 'PRICE_HIGH',
  TIME_OF_DAY_ASC: 'TIME_OF_DAY_ASC',
  TIME_OF_DAY_DESC: 'TIME_OF_DAY_DESC',
};

// <Select /> component options need to have
// a "value" field and a "label" property to render properly
export const SortByOptions = [
  {
    value: SortByEnum.BEST,
    label: 'Best',
  },
  {
    value: SortByEnum.PRICE_LOW,
    label: 'Price (low)',
  },
  {
    value: SortByEnum.PRICE_HIGH,
    label: 'Price (high)',
  },
  {
    value: SortByEnum.TIME_OF_DAY_ASC,
    label: 'Time of Day (earlier)',
  },
  {
    value: SortByEnum.TIME_OF_DAY_DESC,
    label: 'Time of Day (later)',
  },
];
