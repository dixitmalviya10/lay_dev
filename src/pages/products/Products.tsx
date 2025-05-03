import { useAppSelector } from "../../store/store";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import ProductFormModal from "../../components/products/ProductFormModal";
import { useState } from "react";
import { CirclePlus, Eye, SquarePen, Trash } from "lucide-react";
import { ProductForm } from "../../types";
import { formatCurrency } from "../../utils/formatCurrency";
import ProductDeleteModal from "../../components/products/ProductDeleteModal";

const Products = () => {
  const { products } = useAppSelector((state) => state.product);
  const [visible, setVisible] = useState<boolean>(false);
  const [productData, setProductData] = useState<
    ProductForm & { id: number | null }
  >();
  const [dialogType, setDialogType] = useState<string>("VIEW");

  const handleProduct = (
    rowData: ProductForm & { id: number | null },
    dataType: string = "VIEW"
  ) => {
    setVisible(true);
    setProductData(rowData);
    setDialogType(dataType);
  };

  const actionTemplate = (rowData: ProductForm & { id: number | null }) => (
    <div className="flex gap-1">
      <Button
        onClick={() => handleProduct(rowData, "VIEW")}
        icon={<Eye size={20} />}
        rounded
        outlined
        className="icon-btn-sm"
        aria-label="View"
        severity="info"
      />
      <Button
        onClick={() => handleProduct(rowData, "EDIT")}
        icon={<SquarePen size={20} />}
        rounded
        outlined
        className="icon-btn-sm"
        aria-label="Edit"
      />
      <Button
        onClick={() => handleProduct(rowData, "DELETE")}
        icon={<Trash size={20} />}
        rounded
        outlined
        className="icon-btn-sm"
        aria-label="Delete"
        severity="danger"
      />
    </div>
  );

  return (
    <>
      <div className="shadow-1 p-4 bg-white border-round-lg">
        <div className="flex justify-content-between align-items-center mb-3">
          <h3 className="m-0">Manage Products</h3>
          <Button
            icon={<CirclePlus size={20} className="mr-1" />}
            label="Add"
            size="small"
            outlined
            onClick={() => {
              setDialogType("ADD");
              setVisible(true);
            }}
          />
        </div>
        <DataTable value={products} stripedRows>
          <Column
            header="Sr.No"
            body={(_rowData, options) => options.rowIndex + 1}></Column>
          <Column field="name" header="Name"></Column>
          <Column field="sku" header="SKU"></Column>
          <Column field="category" header="Category"></Column>
          <Column
            field="costPrice"
            header="Cost Price"
            body={(rowData) => formatCurrency(rowData.costPrice)}></Column>
          <Column
            field="sellingPrice"
            header="Selling Price"
            body={(rowData) => formatCurrency(rowData.sellingPrice)}></Column>
          <Column field="currentQty" header="Quantity"></Column>
          <Column header="Actions" body={actionTemplate}></Column>
        </DataTable>
      </div>
      {(dialogType === "EDIT" || dialogType === "ADD") && (
        <ProductFormModal
          visible={visible}
          setVisible={setVisible}
          productData={productData!}
          dialogType={dialogType}
        />
      )}
      {dialogType === "DELETE" && (
        <ProductDeleteModal
          visible={visible}
          setVisible={setVisible}
          productData={productData!}
        />
      )}
    </>
  );
};

export default Products;
