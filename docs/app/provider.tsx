"use client";

import { RootProvider } from "fumadocs-ui/provider";
import type { ReactNode } from "react";
import CustomSearchDialog from "@/components/search";

export function Provider({
  children,
}: {
  readonly children: ReactNode;
}): React.ReactElement {
  return (
    <RootProvider
      search={{
        SearchDialog: CustomSearchDialog,
      }}
    >
      {children}
    </RootProvider>
  );
}