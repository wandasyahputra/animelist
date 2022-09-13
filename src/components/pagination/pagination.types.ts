export interface PaginationProps {
  pageLength: number;
  currentPage: number;
  onChange: (n: number) => void;
}