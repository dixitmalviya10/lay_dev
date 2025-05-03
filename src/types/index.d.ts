import type { ReactNode, Dispatch, SetStateAction } from "react";

type ChildContainerProps = {
  children: ReactNode;
};

interface TNavigateLink extends ChildContainerProps {
  navTo: string;
}

type Visible = { visible: boolean };

type SetVisible = {
  setVisible: Dispatch<SetStateAction<boolean>>;
};

interface ManageOverlays {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

interface InfoCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  highlightText: string;
  subtext: string;
  textColor: string;
  bgColor: string;
}

interface ProductForm {
  name: string;
  sku: string;
  category: string;
  costPrice: number;
  sellingPrice: number;
  currentQty: number;
}

interface ProductDialogProps extends ManageOverlays {
  dialogType: string;
  productData: ProductForm & { id: number | null };
}

type DeleteModalProps = Omit<ProductDialogProps, "dialogType">;

export type {
  ChildContainerProps,
  TNavigateLink,
  Visible,
  SetVisible,
  ManageOverlays,
  InfoCardProps,
  ProductForm,
  ProductDialogProps,
  DeleteModalProps,
};
