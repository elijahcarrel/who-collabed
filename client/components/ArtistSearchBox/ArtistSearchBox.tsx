import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useEffect, useState } from "react";
import { Artist } from "../../api/artist";
import { getMockArtists } from "../../api/mock/mock-api";

interface Props {
  value: Artist;
  onChange: (value: Artist) => any;
  label?: string;
  placeholder?: string;
  className?: string;
}

export const ArtistSearchBox = (props: Props) => {
  const { value, onChange, label, placeholder, className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState<Artist[]>([]);
  const loading = isOpen && options.length === 0 && query.length > 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      if (active) {
        if (query.length === 0) {
          setOptions([]);
        } else {
          setOptions(await getMockArtists(query));
        }
      }
    })();

    return () => {
      active = false;
    };
  }, [loading, query]);

  useEffect(() => {
    if (!isOpen) {
      setOptions([]);
    }
  }, [isOpen]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: 300 }}
      open={isOpen}
      onOpen={() => {
        setIsOpen(true);
      }}
      onClose={() => {
        setIsOpen(false);
      }}
      value={value}
      inputValue={query}
      getOptionLabel={(option: Artist) => option.name || ""}
      options={options}
      loading={loading}
      onChange={(_, newValue: Artist) => {
        onChange(newValue);
      }}
      onInputChange={(_, newQuery: string) => {
        setQuery(newQuery);
      }}
      className={className}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label || "Artist"}
          placeholder={placeholder || "Search for an artist..."}
          fullWidth
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};
