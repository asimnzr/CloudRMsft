import { FuseNavigation } from "@fuse/types";

export const navigation: FuseNavigation[] = [
    {
        id: "RIMS",
        title: "",
        type: "group",
        children: [
            {
                id: "customers",
                title: "Customers",
                type: "collapsable",
                icon: "dashboard",
                children: [
                    {
                        id: "findACustomer",
                        title: "Find A Customer",
                        type: "item",
                        icon: "today",
                        url: "/customers/mycustomers"
                    },
                    {
                        id: "addACustomer",
                        title: "Add A Customer",
                        type: "item",
                        icon: "today",
                        url: "/sample"
                    },
                    {
                        id: "bulkImportCustomer",
                        title: "Bulk Import Customer",
                        type: "item",
                        icon: "today",
                        url: "/customers/sample"
                    },
                    {
                        id: "bulkExportCustomer",
                        title: "Bulk Export Customer",
                        type: "item",
                        icon: "today",
                        url: "/customers/sample"
                    }
                ]
            },
            {
                id: "orders",
                title: "Orders",
                type: "collapsable",
                icon: "dashboard",
                children: [
                    {
                        id: "cashandCarry",
                        title: "Cash and Carry",
                        type: "item",
                        icon: "today",
                        url: "/apps/dashboards/analytics"
                    },
                    {
                        id: "createanOrder",
                        title: "Create an Order",
                        type: "item",
                        icon: "today",
                        url: "/apps/dashboards/project"
                    },
                    {
                        id: "createaCredit",
                        title: "Create a Credit",
                        type: "item",
                        icon: "today",
                        url: "/apps/dashboards/project"
                    },
                    {
                        id: "createaRefund",
                        title: "Create a Refund",
                        type: "item",
                        icon: "today",
                        url: "/apps/dashboards/project"
                    },
                    {
                        id: "findanOrder",
                        title: "Find an Order",
                        type: "item",
                        icon: "today",
                        url: "/apps/dashboards/project"
                    },
                    {
                        id: "findanInvoice",
                        title: "Find an Invoice",
                        type: "item",
                        icon: "today",
                        url: "/apps/dashboards/project"
                    }
                ]
            },
            {
                id: "stock",
                title: "Stock",
                type: "collapsable",
                icon: "dashboard",
                children: [
                    {
                        id: "findAStockItem",
                        title: "Find a Stock Item",
                        type: "item",
                        icon: "today",
                        url: "/app/"
                    },
                    {
                        id: "stockRequestList",
                        title: "Stock Request List",
                        type: "item",
                        icon: "today",
                        url: "/apps/dashboards/project"
                    },
                    {
                        id: "bulkImportCustomer",
                        title: "Bulk Import Stock Item",
                        type: "item",
                        icon: "today",
                        url: "/apps/dashboards/project"
                    },
                    {
                        id: "bulkExportCustomer",
                        title: "Bulk Export Stock Item",
                        type: "item",
                        icon: "today",
                        url: "/apps/dashboards/project"
                    }
                ]
            },
            {
                id: "purchaseManagement",
                title: "Purchase Management",
                type: "collapsable",
                icon: "dashboard",
                children: [
                    {
                        id: "addaSupplier",
                        title: "Add a Supplier",
                        type: "item",
                        icon: "today",
                        url: "/app/"
                    },
                    {
                        id: "createaStockItem",
                        title: "Create a Stock Item",
                        type: "item",
                        icon: "today",
                        url: "/apps/dashboards/project"
                    },
                    {
                        id: "createaPurchaseOrder",
                        title: "Create a Purchase Order",
                        type: "item",
                        icon: "today",
                        url: "/apps/dashboards/project"
                    }
                ]
            },
            {
                id: "warehouseManagement",
                title: "Warehouse Management",
                type: "collapsable",
                icon: "dashboard",
                children: [
                    {
                        id: "findaSupplier",
                        title: "Find a Supplier",
                        type: "item",
                        icon: "today",
                        url: "/app/"
                    },
                    {
                        id: "findaPurchaseOrder",
                        title: "Find a Purchase Order",
                        type: "item",
                        icon: "today",
                        url: "/apps/dashboards/project"
                    },
                    {
                        id: "deliveryReceived",
                        title: "Delivery Received",
                        type: "item",
                        icon: "today",
                        url: "/apps/dashboards/project"
                    },
                    {
                        id: "createCreateManagerDatabase",
                        title: "Create CreateManager Database",
                        type: "item",
                        icon: "today",
                        url: "/apps/dashboards/project"
                    }
                ]
            },
            {
                id: "accountsManagement",
                title: "Accounts Management",
                type: "collapsable",
                icon: "dashboard",
                children: [
                    {
                        id: "paymentReceived",
                        title: "Payment Received",
                        type: "item",
                        icon: "today",
                        url: "/app/"
                    },
                    {
                        id: "settlementRoutine",
                        title: "Settlement Routine",
                        type: "item",
                        icon: "today",
                        url: "/apps/dashboards/project"
                    }
                ]
            },
            {
                id: "salesManagement",
                title: "Sales Management",
                type: "collapsable",
                icon: "dashboard",
                children: [
                    {
                        id: "stockAllocation",
                        title: "Stock Allocation",
                        type: "item",
                        icon: "today",
                        url: "/app/"
                    },
                    {
                        id: "ordersNotYetPrinted",
                        title: "Orders Not Yet Printed",
                        type: "item",
                        icon: "today",
                        url: "/apps/dashboards/project"
                    },
                    {
                        id: "packingNoteScreen",
                        title: "Packing Note Screen",
                        type: "item",
                        icon: "today",
                        url: "/apps/dashboards/project"
                    },
                    {
                        id: "unpaidOrders",
                        title: "Unpaid Orders",
                        type: "item",
                        icon: "today",
                        url: "/apps/dashboards/project"
                    }
                ]
            },
            {
                id: "labels",
                title: "Labels",
                type: "collapsable",
                icon: "dashboard",
                children: [
                    {
                        id: "printaLabel",
                        title: "Print a Label",
                        type: "item",
                        icon: "today",
                        url: "/app/"
                    }
                ]
            },
            {
                id: "tradeshow",
                title: "Tradeshow",
                type: "collapsable",
                icon: "dashboard",
                children: [
                    {
                        id: "importBHTOrders",
                        title: "Import BHT Orders",
                        type: "item",
                        icon: "today",
                        url: "/app/"
                    },
                    {
                        id: "importBHTOrders",
                        title: "Generate BHT Database",
                        type: "item",
                        icon: "today",
                        url: "/app/"
                    },
                    {
                        id: "importBHTOrders",
                        title: "Print Order from XML",
                        type: "item",
                        icon: "today",
                        url: "/app/"
                    }
                ]
            }
        ]
    }
];
