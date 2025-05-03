import { Inbox, MapPin, MessageCircle, ShoppingCart } from "lucide-react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useAppSelector } from "../../store/store";
import { InfoCard } from "../../components/home/InfoCard";
import { formatCurrency } from "../../utils/formatCurrency";
import LineChart from "../../components/chart/LineChart";

const Home = () => {
  const { products } = useAppSelector((state) => state.product);
  return (
    <>
      <div className="grid grid-nogutter gap-3 mb-3">
        <InfoCard
          title="Orders"
          value={152}
          icon={<ShoppingCart size={20} />}
          highlightText="24 new"
          subtext="since last visit"
          textColor="text-main-primary"
          bgColor="bg-color-primary"
        />
        <InfoCard
          title="Revenue"
          value={2.1}
          icon={<MapPin size={20} />}
          highlightText="%52+"
          subtext="since last week"
          textColor="text-danger"
          bgColor="bg-color-danger"
        />
        <InfoCard
          title="Customers"
          value={28441}
          icon={<Inbox size={20} />}
          highlightText="520"
          subtext="newly registered"
          textColor="text-info"
          bgColor="bg-color-info"
        />
        <InfoCard
          title="Comments"
          value={100}
          icon={<MessageCircle size={20} />}
          highlightText="85"
          subtext="responded"
          textColor="text-secondary"
          bgColor="bg-color-secondary"
        />
      </div>
      <div className="grid grid-nogutter gap-3">
        <div className="shadow-1 p-4 bg-white border-round-lg col-6 flex-1">
          <h3 className="mt-0 font-medium">Recent Sales</h3>
          <DataTable size="small" value={products} stripedRows>
            <Column field="sku" header="SKU"></Column>
            <Column field="name" header="Name"></Column>
            <Column
              field="sellingPrice"
              header="Selling Price"
              body={(rowData) =>
                formatCurrency(rowData?.sellingPrice)
              }></Column>
            <Column field="currentQty" header="Quantity"></Column>
          </DataTable>
        </div>
        <div className="shadow-1 p-4 bg-white border-round-lg col-6 flex-1">
          <h3 className="mt-0 font-medium">Sales Overview</h3>
          <LineChart />
        </div>
      </div>
    </>
  );
};

export default Home;
