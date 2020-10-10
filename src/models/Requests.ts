type paginateNames = 'episodes' | 'characters';

export type IIPaginateList<T> = Record<
  paginateNames,
  {
    info: {
      count: number;
      next: number | null;
      prev: number | null;
      pages: number;
    };
    results: T[];
  }
>;
