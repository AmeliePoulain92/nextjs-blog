"use client";

import useDebounce from "@newsletter/hooks/useDebounce";
import { getNewslettersBySearch } from "@newsletter/services/newsletter.service";
import { GridNewsletterPreview } from "@newsletter/utils/interfaces";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, CircularProgress, Container } from "@material-ui/core";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Link from "next/link";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [newsletterPreviews, setNewsletterPreviews] =
    useState<GridNewsletterPreview | null>(null);
  const debouncedSearchQuery: string = useDebounce<string>(searchQuery, 500);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Title",
      width: 250,
      renderCell: (params: any) => (
        <Link href={`/${params.row.guid}`} target="_blank">
          {params.row.id}
        </Link>
      ),
    },
    { field: "previewText", headerName: "Preview", width: 400 },
  ];

  useEffect(() => {
    const fetchNewsletterPreviews = async (query: string) => {
      if (!query) return;
      setIsLoading(true);
      const data = await getNewslettersBySearch(query);

      setNewsletterPreviews(data);
      setIsLoading(false);
    };

    fetchNewsletterPreviews(debouncedSearchQuery);
  }, [debouncedSearchQuery]);

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
      {isLoading && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
      {newsletterPreviews?.result?.length ? (
        <DataGrid
          rows={newsletterPreviews?.result || []}
          columns={columns}
          disableRowSelectionOnClick
        />
      ) : null}
    </Container>
  );
};

export default SearchInput;
