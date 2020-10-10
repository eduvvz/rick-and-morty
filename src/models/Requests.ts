export type IPaginate<T> = {
  info: {
    count: number;
    next: number | null;
    prev: number | null;
    pages: number;
  };
  results: T[];
};
