import * as React from "react";

export interface HasToggleFavorites {
  toggleFavorites: (
    selection: string,
    favoriteSelection: string
  ) => boolean | undefined;
}

export interface HasGetNewCall {
  getNewCall: (selection: string) => void;
}

export interface HasSelection {
  selection: string
}

export interface HasFavoritesArrays {
  favoriteCompliment: string[];
  favoriteAdvice: string[];
}
