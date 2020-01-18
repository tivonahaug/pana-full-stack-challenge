export const SortByEnum = {
  BEST: 'BEST',
  PRICE_LOW: 'PRICE_LOW',
  TIME_OF_DAY: 'TIME_OF_DAY',
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
    value: SortByEnum.TIME_OF_DAY,
    label: 'Time of Day',
  },
];

export const SortByDefaultOption = SortByOptions[0];
