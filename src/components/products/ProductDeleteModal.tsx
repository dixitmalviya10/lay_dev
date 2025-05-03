import React from "react";
import { DeleteModalProps } from "../../types";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useAppDispatch } from "../../store/store";
import { deleteProduct } from "../../store/slices/productSlice";
import { toast } from "sonner";
import { Trash2, X } from "lucide-react";

const ProductDeleteModal: React.FC<DeleteModalProps> = ({
  visible,
  setVisible,
  productData,
}) => {
  const dispatch = useAppDispatch();
  return (
    <Dialog
      headerClassName="py-3"
      contentClassName="pt-1 pb-3"
      resizable={false}
      draggable={false}
      header="Confirmation"
      visible={visible}
      style={{ width: "30vw" }}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}>
      <div className="mb-4 line-height-3">
        Are you sure you want to delete <strong>{productData.name}</strong> of
        SKU <strong>{productData.sku}</strong>
      </div>

      <div className="flex gap-2 justify-content-end">
        <Button
          icon={<X size={20} className="mr-1" />}
          label="Cancel"
          size="small"
          outlined
          onClick={() => setVisible(false)}
        />
        <Button
          icon={<Trash2 size={20} className="mr-1" />}
          label="Delete"
          size="small"
          severity="danger"
          onClick={() => {
            dispatch(deleteProduct({ id: productData.id }));
            toast.success(`${productData.name} removed successfully`);
            setVisible(false);
          }}
        />
      </div>
    </Dialog>
  );
};

export default ProductDeleteModal;
