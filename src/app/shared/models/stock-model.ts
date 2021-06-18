class Stock {
  id: number | undefined;
  name: string | undefined;
  price: number | undefined;
  minimum: number | undefined;
  exclusiveMinimum: boolean | undefined;
  date: string | undefined;
  variation: number = 0;
}

export default Stock;
