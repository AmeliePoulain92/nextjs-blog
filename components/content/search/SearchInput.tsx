"use client";

import useDebounce from "@newsletter/hooks/useDebounce";
import { getNewslettersBySearch } from "@newsletter/services/newsletter.service";
import { GridNewsletterPreview } from "@newsletter/utils/interfaces";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, Container, Button } from "@material-ui/core";
import Link from "next/link";
import GridNoResultsOverlay from "./GridNoResultsOverlay";

const SearchInput = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 20,
  });
  const [newsletterPreviews, setNewsletterPreviews] =
    useState<GridNewsletterPreview | null>(null);
  const [rowCountState, setRowCountState] = useState(
    newsletterPreviews?.total || 0
  );
  const debouncedSearchQuery: string = useDebounce<string>(searchQuery, 500);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Title",
      width: 250,
      renderCell: (params: any) => (
        <Link href={`/${params.row.guid}`} target="_blank">
          {params.row.title}
        </Link>
      ),
    },
    { field: "previewText", headerName: "Preview", width: 400 },
    { 
      field: "guid", 
      headerName: "", 
      width: 700,       
      renderCell: (params: any) => (
        <>
          <Button href={`/${params.row.guid}`} target="_blank">
            Insider View
          </Button>
          <Button href={`/${params.row.guid}`} target="_blank">
            Non-Insider View
          </Button>
        </>
    ), },

  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const fetchNewsletterPreviews = async (query: string) => {
      if (!isMounted) return;
      setIsLoading(true);
      const { page, pageSize } = paginationModel;
      const data = await getNewslettersBySearch({
        searchText: query,
        pageSize,
        page: page + 1,
      });

      setNewsletterPreviews(data);
      setIsLoading(false);
    };

    fetchNewsletterPreviews(debouncedSearchQuery);
  }, [debouncedSearchQuery, paginationModel]);

  useEffect(() => {
    setRowCountState((prevRowCountState) =>
      newsletterPreviews?.total !== undefined
        ? newsletterPreviews?.total
        : prevRowCountState
    );
  }, [newsletterPreviews?.total, setRowCountState]);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchQuery(event.currentTarget.value);
  };

  return (
    <Container>
      <TextField
        name="search"
        label="Search"
        variant="filled"
        fullWidth
        value={searchQuery}
        onChange={onSearch}
      />
      <DataGrid
        rowCount={rowCountState}
        rows={newsletterPreviews?.result || []}
        columns={columns}
        loading={isLoading}
        slots={{
          noRowsOverlay: GridNoResultsOverlay,
        }}
        paginationMode="server"
        paginationModel={paginationModel}
        pageSizeOptions={[paginationModel.pageSize]}
        onPaginationModelChange={setPaginationModel}
        autoHeight
        disableRowSelectionOnClick
        keepNonExistentRowsSelected
      />
    </Container>
  );
};

export default SearchInput;
