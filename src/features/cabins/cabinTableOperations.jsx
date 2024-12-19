import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by Name (A-Z)" },
          { value: "name-desc", label: "Sort by Name (Z-A)" },
          {
            value: "regularPrice-asc",
            label: "Sort by Price (lowest to highest)",
          },
          {
            value: "regularPrice-desc",
            label: "Sort by Price (highest to lowest)",
          },
          {
            value: "maxCapacity-asc",
            label: "Sort by capacity (lowest to highest)",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort by capacity (highest to lowest)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
